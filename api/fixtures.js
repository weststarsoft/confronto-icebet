const TOKEN = "507ca300477b4853816bcbba9f955119";

export default async function handler(req, res) {
  const today = new Date().toISOString().split("T")[0];

  try {
    const r = await fetch(
      `https://api.football-data.org/v4/matches?date=${today}`,
      { headers: { "X-Auth-Token": TOKEN } }
    );

    const text = await r.text();
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(text);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
