export default async function handler(req, res) {
  const code = req.query.code || req.body?.code;
  if (!code) {
    return res.status(200).send(`
      <form method="POST">
        <input name="code" placeholder="Paste AWeber code here" style="width:400px;padding:10px" />
        <button type="submit" style="padding:10px 20px">Get Refresh Token</button>
      </form>
    `);
  }
  const response = await fetch("https://auth.aweber.com/oauth2/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + Buffer.from(
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
  res.status(200).json(data);
}
  
