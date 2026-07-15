export default async function handler(req, res) {
  const code = req.query.code;

  if (!code) {
    const authUrl = "https://auth.aweber.com/oauth2/authorize?response_type=code&client_id=kbjvETrkaGb9zMO52zeHur1WjHWGMUOO&redirect_uri=https://pitchperfectpro12.com/api/subscribe&scope=subscriber.read+subscriber.write+account.read+list.read+list.write";
    res.setHeader("Content-Type", "text/html");
    return res.status(200).send("<html><body style='font-family:sans-serif;padding:40px'><h2>Step 1: <a href='" + authUrl + "'>Authorize AWeber</a></h2><h2>Step 2: Paste code here</h2><form method='GET'><input name='code' style='width:500px;padding:10px;font-size:16px' placeholder='Paste code here'/><br/><br/><button type='submit' style='padding:12px 24px;background:#0B5C6E;color:white;border:none;font-size:16px'>Get Token</button></form></body></html>");
  }

  const creds = Buffer.from("kbjvETrkaGb9zMO52zeHur1WjHWGMUOO:FHWJgL9G1pN47fx0cZYyZm10EyNvXzy6").toString("base64");
  const response = await fetch("https://auth.aweber.com/oauth2/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Authorization": "Basic " + creds
    },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code: code,
      redirect_uri: "https://pitchperfectpro12.com/api/subscribe"
    })
  });

  const data = await response.json();
  return res.status(200).json(data);
}
