
export default async function handler(req, res) {
  const { q } = req.query;
  if (!q) return res.status(400).json({ error: "Missing query" });

  try {
    const response = await fetch(
      `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${encodeURIComponent(q)}`
    );
    const data = await response.json();
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: "Failed to fetch" });
  }
}
