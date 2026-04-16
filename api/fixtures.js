const FOOTBALL_DATA_TOKEN = "507ca300477b4853816bcbba9f955119";
const ODDS_KEY            = "9b4192d616b4e5857af1a2a61e61120b";

// Ordem de prioridade das ligas
const LEAGUE_PRIORITY = [
  "Champions League",
  "Liga Europa",
  "Conference League",
  "Premier League",
  "La Liga",
  "Serie A",
  "Bundesliga",
  "Ligue 1",
  "Copa Libertadores",
  "Brasileirão",
  "Primeira Liga",
  "Liga Profesional",
  "MLS",
];

const FD_COMPETITIONS = [
  { id: 2001, name: "Champions League" },
  { id: 2146, name: "Liga Europa" },
  { id: 2048, name: "Conference League" },
  { id: 2152, name: "Copa Libertadores" },
];

const ODDS_SPORTS = [
  { key: "soccer_epl",                name: "Premier League" },
  { key: "soccer_spain_la_liga",      name: "La Liga" },
  { key: "soccer_italy_serie_a",      name: "Serie A" },
  { key: "soccer_germany_bundesliga", name: "Bundesliga" },
  { key: "soccer_france_ligue_one",   name: "Ligue 1" },
  { key: "soccer_brazil_campeonato",  name: "Brasileirão" },
];

export default async function handler(req, res) {
  const now   = new Date();
  const end   = new Date(now.getTime() + 48 * 60 * 60 * 1000);
  const today = now.toISOString().split("T")[0];
  const endDay = end.toISOString().split("T")[0];

  const allMatches = [];

  // ── Football-data.org ──────────────────────────────
  try {
    const fdResults = await Promise.all(
      FD_COMPETITIONS.map(async comp => {
        try {
          const r = await fetch(
            `https://api.football-data.org/v4/competitions/${comp.id}/matches?dateFrom=${today}&dateTo=${endDay}`,
            { headers: { "X-Auth-Token": FOOTBALL_DATA_TOKEN } }
          );
          if (!r.ok) return [];
          const d = await r.json();
          return (d.matches || []).map(m => ({
            id:          `fd-${m.id}`,
            competition: comp.name,
            utcDate:     m.utcDate,
            status:      m.status === "IN_PLAY" ? "IN_PLAY" : m.status === "FINISHED" ? "FINISHED" : "TIMED",
            home:        { name: m.homeTeam?.shortName || m.homeTeam?.name },
            away:        { name: m.awayTeam?.shortName || m.awayTeam?.name },
            score:       { home: m.score?.fullTime?.home, away: m.score?.fullTime?.away }
          }));
        } catch { return []; }
      })
    );
    fdResults.flat().forEach(m => allMatches.push(m));
  } catch {}

  // ── The Odds API ───────────────────────────────────
  try {
    const oddsResults = await Promise.all(
      ODDS_SPORTS.map(async sport => {
        try {
          const r = await fetch(
            `https://api.the-odds-api.com/v4/sports/${sport.key}/odds/?apiKey=${ODDS_KEY}&regions=eu&markets=h2h&dateFormat=iso&commenceTimeFrom=${now.toISOString()}&commenceTimeTo=${end.toISOString()}&oddsFormat=decimal`
          );
          if (!r.ok) return [];
          const data = await r.json();
          if (!Array.isArray(data)) return [];
          return data.map(m => ({
            id:          m.id,
            competition: sport.name,
            utcDate:     m.commence_time,
            status:      "TIMED",
            home:        { name: m.home_team },
            away:        { name: m.away_team },
            score:       { home: null, away: null }
          }));
        } catch { return []; }
      })
    );
    oddsResults.flat().forEach(m => allMatches.push(m));
  } catch {}

  // Remove duplicatas e filtra só jogos futuros ou ao vivo
  const seen = new Set();
  const unique = allMatches.filter(m => {
    const key = `${m.home.name}-${m.away.name}-${m.utcDate?.slice(0,13)}`;
    if (seen.has(key)) return false;
    seen.add(key);
    // Remove jogos já finalizados ou que já passaram
    if (m.status === "FINISHED") return false;
    if (m.status === "TIMED" && new Date(m.utcDate) < now) return false;
    return true;
  });

  // Ordena por prioridade de liga, depois por horário
  unique.sort((a, b) => {
    const pa = LEAGUE_PRIORITY.indexOf(a.competition);
    const pb = LEAGUE_PRIORITY.indexOf(b.competition);
    const priorityDiff = (pa === -1 ? 99 : pa) - (pb === -1 ? 99 : pb);
    if (priorityDiff !== 0) return priorityDiff;
    return new Date(a.utcDate) - new Date(b.utcDate);
  });

  // Top 10 mais relevantes
  const matches = unique.slice(0, 10);

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Cache-Control", "s-maxage=300");
  res.status(200).json({ matches });
}
