export default async function handler(req, res) {
  const today = new Date().toISOString().split("T")[0];

  try {
    const response = await fetch(
      `https://api.sofascore.com/api/v1/sport/football/scheduled-events/${today}`,
      {
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
          "Accept": "application/json",
          "Referer": "https://www.sofascore.com/"
        }
      }
    );

    if (!response.ok) {
      return res.status(response.status).json({ error: "API error", status: response.status });
    }

    const data = await response.json();
    const events = data.events || [];

    // Ligas prioritárias
    const PRIORITY_LEAGUES = [
      "UEFA Champions League",
      "UEFA Europa League",
      "UEFA Conference League",
      "Premier League",
      "LaLiga",
      "Bundesliga",
      "Serie A",
      "Ligue 1",
      "Brasileirão Série A",
      "Copa Libertadores",
      "Copa do Brasil",
      "MLS",
      "Liga Profesional",
      "Primeira Liga",
    ];

    // Filtra e ordena por liga prioritária e horário
    const filtered = events
      .filter(e => PRIORITY_LEAGUES.some(l => e.tournament?.name?.includes(l) || e.tournament?.uniqueTournament?.name?.includes(l)))
      .sort((a, b) => a.startTimestamp - b.startTimestamp)
      .map(e => ({
        id:          e.id,
        competition: e.tournament?.uniqueTournament?.name || e.tournament?.name,
        home:        e.homeTeam?.name,
        away:        e.awayTeam?.name,
        utcDate:     new Date(e.startTimestamp * 1000).toISOString(),
        status:      e.status?.type === "inprogress" ? "IN_PLAY" :
                     e.status?.type === "finished"   ? "FINISHED" : "TIMED",
        score: {
          home: e.homeScore?.current ?? null,
          away: e.awayScore?.current ?? null,
        }
      }));

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Cache-Control", "s-maxage=300");
    res.status(200).json({ matches: filtered });

  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
