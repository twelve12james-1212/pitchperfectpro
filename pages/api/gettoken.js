export default async function handler(req, res) {
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
      code: "kwkh3YAsk12eAKeKNG80I4M8nmAYlXre",
      redirect_uri: "https://pitchperfectpro12.com/api/subscribe",
    }),
  });
  const data = await response.json();
  res.status(200).json(data);
}
