export default async function handler(req, res) {
  const { q, img } = req.query;

  // Proxy de imagem
  if (img) {
    try {
      const response = await fetch(decodeURIComponent(img));
      const buffer = await response.arrayBuffer();
      const contentType = response.headers.get("content-type") || "image/png";
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Content-Type", contentType);
      res.setHeader("Cache-Control", "s-maxage=86400");
      res.send(Buffer.from(buffer));
    } catch (e) {
      res.status(500).json({ error: "Image fetch failed" });
    }
    return;
  }

  // Busca de times
  if (!q) return res.status(400).json({ error: "Missing query" });

  try {
    const response = await fetch(
      `https://www.thesportsdb.com/api/v1/json/3/searchteams.php?t=${encodeURIComponent(q)}`,
      {
        headers: {
          "User-Agent": "Mozilla/5.0",
          "Accept": "application/json",
        }
      }
    );

    if (!response.ok) {
      return res.status(response.status).json({ error: "API error", status: response.status });
    }

    const data = await response.json();
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Cache-Control", "s-maxage=60");
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
