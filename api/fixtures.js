const TOKEN = "507ca300477b4853816bcbba9f955119";

// Ligas principais cobertas pelo plano gratuito
const LEAGUES = [
  { id: 2,   name: "Champions League" },
  { id: 39,  name: "Premier League" },
  { id: 140, name: "La Liga" },
  { id: 135, name: "Serie A" },
  { id: 78,  name: "Bundesliga" },
  { id: 61,  name: "Ligue 1" },
  { id: 71,  name: "Brasileirão" },
  { id: 94,  name: "Primeira Liga" },
  { id: 253, name: "MLS" },
  { id: 128, name: "Liga Profesional" },
];

export default async function handler(req, res) {
  const today = new Date().toISOString().split("T")[0];

  try {
    // Busca jogos do dia em todas as ligas principais em paralelo
    const results = await Promise.all(
      LEAGUES.map(async league => {
        const r = await fetch(
          `https://api.football-data.org/v4/competitions/${league.id}/matches?dateFrom=${today}&dateTo=${today}`,
          { headers: { "X-Auth-Token": TOKEN } }
        );
        if (!r.ok) return [];
        const d = await r.json();
        return (d.matches || []).map(m => ({
          league: league.name,
          home: m.homeTeam?.shortName || m.homeTeam?.name,
          away: m.awayTeam?.shortName || m.awayTeam?.name,
          time: m.utcDate,
          status: m.status,
          score: m.score?.fullTime
        }));
      })
    );

    const matches = results.flat().sort((a, b) => new Date(a.time) - new Date(b.time));

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Cache-Control", "s-maxage=300");
    res.status(200).json({ matches });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
