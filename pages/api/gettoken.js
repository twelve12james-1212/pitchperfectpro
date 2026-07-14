export default async function handler(req, res) {
  if (req.method === "GET" && !req.query.code) {
    res.setHeader("Content-Type", "text/html");
    return res.status(200).send(`
      <html>
        <body style="font-family:sans-serif;padding:40px;max-width:500px">
          <h2>Get AWeber Refresh Token</h2>
          <form method="GET" action="/api/gettoken">
            <p>Paste your AWeber authorization code below:</p>
            <input 
              name="code" 
              style="width:100%;padding:10px;font-size:16px;margin-bottom:10px" 
              placeholder="Paste code here"
            />
            <br/>
            <button 
              type="submit" 
              style="padding:12px 24px;background:#0B5C6E;color:white;border:none;font-size:16px;cursor:pointer"
            >
              Get Refresh Token
            </button>
          </form>
        </body>
      </html>
    `);
  }

  const code = req.query.code;

  const response = await fetch("https://auth.aweber.com/oauth2/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Authorization": "Basic " + Buffer.from(
        "kbjvETrkaGb9zMO52zeHur1WjHWGMUOO:FHWJgL9G1pN47fx0cZYyZm10EyNvXzy6"
      ).toString("base64"),
    },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code: code,
      redirect_uri: "https://pitchperfectpro12.com/api/subscribe",
    }),
  });

  const data = await response.json();
  res.setHeader("Content-Type", "application/json");
  return res.status(200).json(data);
}
