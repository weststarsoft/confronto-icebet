const ODDS_KEY = "9b4192d616b4e5857af1a2a61e61120b";

// Ligas principais com seus IDs na The Odds API
const SPORTS = [
  "soccer_epl",
  "soccer_spain_la_liga",
  "soccer_italy_serie_a",
  "soccer_germany_bundesliga",
  "soccer_france_ligue_one",
  "soccer_uefa_champs_league",
  "soccer_uefa_europa_league",
  "soccer_conmebol_libertadores",
  "soccer_brazil_campeonato",
  "soccer_usa_mls",
  "soccer_portugal_primeira_liga",
  "soccer_argentina_primera_division",
];

const SPORT_NAMES = {
  "soccer_epl": "Premier League",
  "soccer_spain_la_liga": "La Liga",
  "soccer_italy_serie_a": "Serie A",
  "soccer_germany_bundesliga": "Bundesliga",
  "soccer_france_ligue_one": "Ligue 1",
  "soccer_uefa_champs_league": "Champions League",
  "soccer_uefa_europa_league": "Liga Europa",
  "soccer_conmebol_libertadores": "Copa Libertadores",
  "soccer_brazil_campeonato": "Brasileirão",
  "soccer_usa_mls": "MLS",
  "soccer_portugal_primeira_liga": "Primeira Liga",
  "soccer_argentina_primera_division": "Liga Profesional",
};

export default async function handler(req, res) {
  const today     = new Date();
  const tomorrow  = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const dateFrom = today.toISOString();
  const dateTo   = tomorrow.toISOString();

  try {
    const results = await Promise.all(
      SPORTS.map(async sport => {
        const r = await fetch(
          `https://api.the-odds-api.com/v4/sports/${sport}/odds/?apiKey=${ODDS_KEY}&regions=eu&markets=h2h&dateFormat=iso&commenceTimeFrom=${dateFrom}&commenceTimeTo=${dateTo}`,
        );
        if (!r.ok) return [];
        const data = await r.json();
        return (Array.isArray(data) ? data : []).map(m => ({
          id:          m.id,
          competition: SPORT_NAMES[sport],
          utcDate:     m.commence_time,
          status:      "TIMED",
          home:        { name: m.home_team },
          away:        { name: m.away_team },
          score:       { home: null, away: null }
        }));
      })
    );

    const matches = results
      .flat()
      .sort((a, b) => new Date(a.utcDate) - new Date(b.utcDate));

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Cache-Control", "s-maxage=300");
    res.status(200).json({ matches });

  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
