export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email } = req.body;
  if (!email) return res.status(400).json({ error: "Valid email address is required" });

  try {
    // Step 1: Get fresh access token
    const tokenRes = await fetch("https://auth.aweber.com/oauth2/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": "Basic " + Buffer.from(
          process.env.AWEBER_CLIENT_ID + ":" + process.env.AWEBER_CLIENT_SECRET
        ).toString("base64"),
      },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: process.env.AWEBER_REFRESH_TOKEN,
      }),
    });

    const tokenData = await tokenRes.json();
    console.log("Token response:", JSON.stringify(tokenData));

    if (!tokenData.access_token) {
      return res.status(500).json({ error: "Token failed", detail: tokenData });
    }

    // Step 2: Get account ID
    const accountRes = await fetch("https://api.aweber.com/1.0/accounts", {
      headers: { "Authorization": "Bearer " + tokenData.access_token },
    });
    const accountData = await accountRes.json();
    console.log("Account response:", JSON.stringify(accountData));
    const accountId = accountData.entries?.[0]?.id;

    if (!accountId) {
      return res.status(500).json({ error: "No account found" });
    }

    // Step 3: Add subscriber
    const subRes = await fetch(
      `https://api.aweber.com/1.0/accounts/${accountId}/lists/6966175/subscribers`
      {
        method: "POST",
        headers: {
          "Authorization": "Bearer " + tokenData.access_token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          tags: ["pitchperfectpro-waitlist"],
          update_existing: true,
        }),
      }
    );

    console.log("Subscriber status:", subRes.status);
    const subData = await subRes.json().catch(() => ({}));
    console.log("Subscriber response:", JSON.stringify(subData));

    if (subRes.status === 200 || subRes.status === 201) {
      return res.status(200).json({ success: true });
    } else {
      return res.status(500).json({ error: "Subscriber failed", detail: subData });
    }

  } catch (err) {
    console.error("Subscribe error:", err);
    return res.status(500).json({ error: err.message });
  }
}
