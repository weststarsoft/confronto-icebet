const TOKEN = "507ca300477b4853816bcbba9f955119";

export default async function handler(req, res) {
  const today = new Date().toISOString().split("T")[0];

  try {
    const r = await fetch(
      `https://api.football-data.org/v4/matches?date=${today}`,
      { headers: { "X-Auth-Token": TOKEN } }
    );

    const data = await r.json();
    const matches = (data.matches || []).map(m => ({
      id:          m.id,
      competition: m.competition?.name,
      emblem:      m.competition?.emblem,
      utcDate:     m.utcDate,
      status:      m.status,
      home: {
        name:  m.homeTeam?.shortName || m.homeTeam?.name,
        crest: m.homeTeam?.crest,
      },
      away: {
        name:  m.awayTeam?.shortName || m.awayTeam?.name,
        crest: m.awayTeam?.crest,
      },
      score: m.score?.fullTime
    })).sort((a, b) => new Date(a.utcDate) - new Date(b.utcDate));

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Cache-Control", "s-maxage=300");
    res.status(200).json({ matches });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
