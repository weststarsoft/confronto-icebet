const ODDS_KEY = "9b4192d616b4e5857af1a2a61e61120b";

const SPORTS = [
  { key: "soccer_epl",                          name: "Premier League" },
  { key: "soccer_spain_la_liga",                name: "La Liga" },
  { key: "soccer_italy_serie_a",                name: "Serie A" },
  { key: "soccer_germany_bundesliga",           name: "Bundesliga" },
  { key: "soccer_france_ligue_one",             name: "Ligue 1" },
  { key: "soccer_uefa_champs_league",           name: "Champions League" },
  { key: "soccer_uefa_europa_league",           name: "Liga Europa" },
  { key: "soccer_conmebol_libertadores",        name: "Copa Libertadores" },
  { key: "soccer_brazil_campeonato",            name: "Brasileirão" },
  { key: "soccer_usa_mls",                      name: "MLS" },
  { key: "soccer_portugal_primeira_liga",       name: "Primeira Liga" },
  { key: "soccer_argentina_primera_division",   name: "Liga Profesional" },
];

export default async function handler(req, res) {
  // Janela de 2 dias: hoje + amanhã
  const now      = new Date();
  const start    = new Date(now);
  start.setHours(0, 0, 0, 0);
  const end      = new Date(now);
  end.setHours(47, 59, 59, 999);

  const dateFrom = start.toISOString();
  const dateTo   = end.toISOString();

  try {
    const results = await Promise.all(
      SPORTS.map(async sport => {
        try {
          const r = await fetch(
            `https://api.the-odds-api.com/v4/sports/${sport.key}/odds/?apiKey=${ODDS_KEY}&regions=eu&markets=h2h&dateFormat=iso&commenceTimeFrom=${dateFrom}&commenceTimeTo=${dateTo}&oddsFormat=decimal`,
          );
          if (!r.ok) return [];
          const data = await r.json();
          return (Array.isArray(data) ? data : []).map(m => ({
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

    const matches = results
      .flat()
      .sort((a, b) => new Date(a.utcDate) - new Date(b.utcDate));

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Cache-Control", "s-maxage=600");
    res.status(200).json({ matches });

  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
