// pages/api/subscribe.js
// AWeber email capture API route for PitchPerfect Pro

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email } = req.body;

  if (!email || !email.includes("@")) {
    return res.status(400).json({ error: "Valid email address is required" });
  }

  try {
    const AWEBER_CLIENT_ID = process.env.AWEBER_CLIENT_ID;
    const AWEBER_CLIENT_SECRET = process.env.AWEBER_CLIENT_SECRET;
    const AWEBER_REFRESH_TOKEN = process.env.AWEBER_REFRESH_TOKEN;
    const AWEBER_LIST_ID = "awlist6966175";

    // Step 1: Get a fresh access token using refresh token
    const tokenResponse = await fetch("https://auth.aweber.com/oauth2/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " +
          Buffer.from(`${AWEBER_CLIENT_ID}:${AWEBER_CLIENT_SECRET}`).toString(
            "base64"
          ),
      },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: AWEBER_REFRESH_TOKEN,
      }),
    });

    const tokenData = await tokenResponse.json();

    if (!tokenData.access_token) {
      console.error("AWeber token error:", tokenData);
      return res.status(500).json({ error: "Authentication failed" });
    }

    // Step 2: Get the account ID
    const accountResponse = await fetch(
      "https://api.aweber.com/1.0/accounts",
      {
        headers: {
          Authorization: `Bearer ${tokenData.access_token}`,
        },
      }
    );
    const accountData = await accountResponse.json();
    const accountId = accountData.entries?.[0]?.id;

    if (!accountId) {
      return res.status(500).json({ error: "Could not retrieve AWeber account" });
    }

    // Step 3: Add subscriber to the list
    const subscriberResponse = await fetch(
      `https://api.aweber.com/1.0/accounts/${accountId}/lists/${AWEBER_LIST_ID}/subscribers`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${tokenData.access_token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          tags: ["pitchperfectpro-waitlist"],
          update_existing: true,
        }),
      }
    );

    if (subscriberResponse.status === 200 || subscriberResponse.status === 201) {
      return res.status(200).json({ success: true });
    } else {
      const errorData = await subscriberResponse.json();
      console.error("AWeber subscriber error:", errorData);
      return res.status(500).json({ error: "Could not add subscriber" });
    }
  } catch (error) {
    console.error("Subscribe error:", error);
    return res.status(500).json({ error: "Server error" });
  }
}

