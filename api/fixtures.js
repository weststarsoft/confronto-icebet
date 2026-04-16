export default async function handler(req, res) {
  const today = new Date().toISOString().split("T")[0];

  try {
    const response = await fetch(
      `https://free-api-live-football-data.p.rapidapi.com/football-current-live`,
      {
        headers: {
          "x-rapidapi-host": "free-api-live-football-data.p.rapidapi.com",
          "x-rapidapi-key": "ec66d31905msh5b40b55572c7b57p1b5fe7jsn7219ab2da4d8"
        }
      }
    );

    if (!response.ok) {
      return res.status(response.status).json({ error: "API error", status: response.status });
    }

    const data = await response.json();
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Cache-Control", "s-maxage=300");
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
