export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  var email = req.body && req.body.email;
  if (!email) {
    return res.status(400).json({ error: "Valid email address is required" });
  }

  var clientId = process.env.AWEBER_CLIENT_ID;
  var clientSecret = process.env.AWEBER_CLIENT_SECRET;
  var refreshToken = process.env.AWEBER_REFRESH_TOKEN;
  var creds = Buffer.from(clientId + ":" + clientSecret).toString("base64");

  var tokenRes = await fetch("https://auth.aweber.com/oauth2/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Authorization": "Basic " + creds
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken
    })
  });

  var tokenData = await tokenRes.json();
  console.log("Token:", JSON.stringify(tokenData));

  if (!tokenData.access_token) {
    return res.status(500).json({ error: "Token failed", detail: tokenData });
  }

  var accountRes = await fetch("https://api.aweber.com/1.0/accounts", {
    headers: { "Authorization": "Bearer " + tokenData.access_token }
  });

  var accountData = await accountRes.json();
  console.log("Account:", JSON.stringify(accountData));

  var accountId = accountData.entries && accountData.entries[0] && accountData.entries[0].id;
  if (!accountId) {
    return res.status(500).json({ error: "No account found" });
  }

  var subRes = await fetch(
    "https://api.aweber.com/1.0/accounts/" + accountId + "/lists/6966175/subscribers",
    {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + tokenData.access_token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        tags: ["pitchperfectpro-waitlist"],
        update_existing: true
      })
    }
  );

  var subData = await subRes.json().catch(function() { return {}; });
  console.log("Subscriber status:", subRes.status);
  console.log("Subscriber response:", JSON.stringify(subData));

  if (subRes.status === 200 || subRes.status === 201) {
    return res.status(200).json({ success: true });
  } else {
    return res.status(500).json({ error: "Failed", detail: subData });
  }
}
