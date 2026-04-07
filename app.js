const SPORTS = {
  "⚽ Futebol": ["Brasileirão","Premier League","La Liga","Serie A","Bundesliga","Ligue 1","Primeira Liga","MLS","Liga Profesional","Copa do Mundo"],
  "🏀 Basquete": ["NBA"],
  "🏈 Futebol Americano": [],
};

const LEAGUES = {
  "Brasileirão": [
    { name: "Athletico-PR",  logo: "logos/athletico-pr.png" },
    { name: "Atlético-MG",   logo: "logos/atletico-mg.png" },
    { name: "Bahia",         logo: "logos/bahia.png" },
    { name: "Botafogo",      logo: "logos/botafogo.png" },
    { name: "Bragantino",    logo: "logos/bragantino.png" },
    { name: "Chapecoense",   logo: "logos/chapecoense.png" },
    { name: "Corinthians",   logo: "logos/corinthians.png" },
    { name: "Coritiba",      logo: "logos/coritiba.png" },
    { name: "Cruzeiro",      logo: "logos/cruzeiro.png" },
    { name: "Flamengo",      logo: "logos/flamengo.png" },
    { name: "Fluminense",    logo: "logos/fluminense.png" },
    { name: "Grêmio",        logo: "logos/gremio.png" },
    { name: "Internacional", logo: "logos/internacional.png" },
    { name: "Mirassol",      logo: "logos/mirassol.png" },
    { name: "Palmeiras",     logo: "logos/palmeiras.png" },
    { name: "Remo",          logo: "logos/remo.png" },
    { name: "Santos",        logo: "logos/santos.png" },
    { name: "São Paulo",     logo: "logos/saopaulos.png" },
    { name: "Vasco",         logo: "logos/vasco.png" },
    { name: "Vitória",       logo: "logos/vitoria.png" },
  ],
  "Premier League": [
    { name: "Arsenal",           logo: "logos/arsenal.png" },
    { name: "Aston Villa",       logo: "logos/aston-villa.png" },
    { name: "Bournemouth",       logo: "logos/bournemouth.png" },
    { name: "Brentford",         logo: "logos/brentford.png" },
    { name: "Brighton",          logo: "logos/brighton.png" },
    { name: "Burnley",           logo: "logos/burnley.png" },
    { name: "Chelsea",           logo: "logos/chelsea.png" },
    { name: "Crystal Palace",    logo: "logos/crystal-palace.png" },
    { name: "Everton",           logo: "logos/everton.png" },
    { name: "Fulham",            logo: "logos/fulham.png" },
    { name: "Leeds",             logo: "logos/leeds.png" },
    { name: "Liverpool",         logo: "logos/liverpool.png" },
    { name: "Manchester City",   logo: "logos/man-city.png" },
    { name: "Manchester United", logo: "logos/man-united.png" },
    { name: "Newcastle",         logo: "logos/newcastle.png" },
    { name: "Nottingham Forest", logo: "logos/nottingham.png" },
    { name: "Port Vale",         logo: "logos/port-vale.png" },
    { name: "Southampton",       logo: "logos/southampton.png" },
    { name: "Sunderland",        logo: "logos/sunderland.png" },
    { name: "Tottenham",         logo: "logos/tottenham.png" },
    { name: "West Ham",          logo: "logos/west-ham.png" },
    { name: "Wolves",            logo: "logos/wolves.png" },
  ],
  "La Liga": [
    { name: "Alavés",          logo: "logos/alaves.png" },
    { name: "Athletic Bilbao", logo: "logos/athletic-bilbao.png" },
    { name: "Atlético Madrid", logo: "logos/atletico-madrid.png" },
    { name: "Barcelona",       logo: "logos/Barcelona.png" },
    { name: "Betis",           logo: "logos/betis.png" },
    { name: "Celta Vigo",      logo: "logos/celta-vigo.png" },
    { name: "Elche",           logo: "logos/elche.png" },
    { name: "Espanyol",        logo: "logos/espanyol.png" },
    { name: "Getafe",          logo: "logos/Getafe.png" },
    { name: "Girona",          logo: "logos/girona.png" },
    { name: "Levante",         logo: "logos/levante.png" },
    { name: "Mallorca",        logo: "logos/Mallorca.png" },
    { name: "Osasuna",         logo: "logos/osasuna.png" },
    { name: "Rayo Vallecano",  logo: "logos/rayo-vallecano.png" },
    { name: "Real Madrid",     logo: "logos/real-madrid.png" },
    { name: "Real Oviedo",     logo: "logos/real-oviedo.png" },
    { name: "Real Sociedad",   logo: "logos/real-ociedad.png" },
    { name: "Sevilla",         logo: "logos/sevilla.png" },
    { name: "Valencia",        logo: "logos/Valencia.png" },
    { name: "Villarreal",      logo: "logos/villarreal.png" },
  ],
  "Serie A": [
    { name: "AC Milan",    logo: "logos/ac-milan.png" },
    { name: "Atalanta",    logo: "logos/atalanta.png" },
    { name: "Bologna",     logo: "logos/bologna.png" },
    { name: "Cagliari",    logo: "logos/cagliari.png" },
    { name: "Como",        logo: "logos/como1907.png" },
    { name: "Cremonese",   logo: "logos/cremonese.png" },
    { name: "Fiorentina",  logo: "logos/fiorentina.png" },
    { name: "Genoa",       logo: "logos/genoa.png" },
    { name: "Inter Milan", logo: "logos/inter-milan.png" },
    { name: "Juventus",    logo: "logos/juventus.png" },
    { name: "Lazio",       logo: "logos/lazio.png" },
    { name: "Lecce",       logo: "logos/lecce.png" },
    { name: "Napoli",      logo: "logos/napoli.png" },
    { name: "Parma",       logo: "logos/parma.png" },
    { name: "Pisa",        logo: "logos/pisa.png" },
    { name: "Roma",        logo: "logos/roma.png" },
    { name: "Sassuolo",    logo: "logos/sassuolo.png" },
    { name: "Torino",      logo: "logos/torino.png" },
    { name: "Udinese",     logo: "logos/udinese.png" },
    { name: "Verona",      logo: "logos/verona.png" },
  ],
  "Bundesliga": [
    { name: "Augsburg",            logo: "logos/augsburg.png" },
    { name: "Bayern Munich",       logo: "logos/bayern-munich.png" },
    { name: "Bayer Leverkusen",    logo: "logos/bayer-leverkusen.png" },
    { name: "Borussia Dortmund",   logo: "logos/borussia-dortmund.png" },
    { name: "B. Mönchengladbach",  logo: "logos/borussia-monchengladbach.png" },
    { name: "Eintracht Frankfurt", logo: "logos/frankfurt.png" },
    { name: "Freiburg",            logo: "logos/freiburg.png" },
    { name: "Hamburger SV",        logo: "logos/hamburger.png" },
    { name: "Heidenheim",          logo: "logos/heidenheim.png" },
    { name: "Hoffenheim",          logo: "logos/hoffenheim.png" },
    { name: "Köln",                logo: "logos/koln.png" },
    { name: "Mainz",               logo: "logos/mainz.png" },
    { name: "RB Leipzig",          logo: "logos/rb-leipzig.png" },
    { name: "St. Pauli",           logo: "logos/st-pauli.png" },
    { name: "Stuttgart",           logo: "logos/stuttgart.png" },
    { name: "Union Berlin",        logo: "logos/union-berlin.png" },
    { name: "Werder Bremen",       logo: "logos/werder-bremen.png" },
    { name: "Wolfsburg",           logo: "logos/wolfsburg.png" },
  ],
  "Ligue 1": [
    { name: "Angers",            logo: "logos/angers.png" },
    { name: "Auxerre",           logo: "logos/auxerre.png" },
    { name: "Brest",             logo: "logos/brest.png" },
    { name: "Havre",             logo: "logos/havre.png" },
    { name: "Lens",              logo: "logos/lens.png" },
    { name: "Lille",             logo: "logos/lille.png" },
    { name: "Lorient",           logo: "logos/lorient.png" },
    { name: "Lyon",              logo: "logos/lyon.png" },
    { name: "Marseille",         logo: "logos/olympique-de-marseille.png" },
    { name: "Metz",              logo: "logos/metz.png" },
    { name: "Monaco",            logo: "logos/monaco.png" },
    { name: "Nantes",            logo: "logos/nantes.png" },
    { name: "Nice",              logo: "logos/nice.png" },
    { name: "Paris FC",          logo: "logos/paris-fc.png" },
    { name: "PSG",               logo: "logos/paris-saint-germain.png" },
    { name: "Rennes",            logo: "logos/rennes.png" },
    { name: "Strasbourg",        logo: "logos/strasbourg-alsace.png" },
    { name: "Toulouse",          logo: "logos/toulouse.png" },
  ],
  "Primeira Liga": [
    { name: "Arouca",            logo: "logos/arouca.png" },
    { name: "Benfica",           logo: "logos/benfica.png" },
    { name: "Boa Vista",         logo: "logos/boa-vista.png" },
    { name: "Braga",             logo: "logos/braga.png" },
    { name: "Casa Pia",          logo: "logos/casa-pia.png" },
    { name: "Chaves",            logo: "logos/chaves.png" },
    { name: "Estoril Praia",     logo: "logos/estoril-praia.png" },
    { name: "Estrela Amadora",   logo: "logos/estrela-amadora.png" },
    { name: "Famalicão",         logo: "logos/famalicao.png" },
    { name: "Farense",           logo: "logos/farense.png" },
    { name: "Moreirense",        logo: "logos/moreirense.png" },
    { name: "Portimonense",      logo: "logos/portimonense.png" },
    { name: "Porto",             logo: "logos/porto.png" },
    { name: "Rio Ave",           logo: "logos/rio-ave.png" },
    { name: "Santa Clara",       logo: "logos/santa-clara.png" },
    { name: "Sporting CP",       logo: "logos/sporting.png" },
    { name: "Vicente",           logo: "logos/vicente.png" },
    { name: "Vitória SC",        logo: "logos/vitoria.png" },
    { name: "Vizela",            logo: "logos/vizela.png" },
  ],
  "MLS": [
    { name: "Atlanta United",         logo: "logos/atlanta-united.png" },
    { name: "Austin FC",              logo: "logos/austin.png" },
    { name: "Charlotte FC",           logo: "logos/charlotte.png" },
    { name: "Chicago Fire",           logo: "logos/chicago-fire.png" },
    { name: "Cincinnati",             logo: "logos/cincinnati.png" },
    { name: "Colorado Rapids",        logo: "logos/colorado-rapids.png" },
    { name: "Columbus Crew",          logo: "logos/columbus-crew.png" },
    { name: "Dallas",                 logo: "logos/dallas.png" },
    { name: "DC United",              logo: "logos/dc-united.png" },
    { name: "Galaxy",                 logo: "logos/galaxy.png" },
    { name: "Houston Dynamo",         logo: "logos/houston-dynamo.png" },
    { name: "Inter Miami",            logo: "logos/inter-miami.png" },
    { name: "Los Angeles FC",         logo: "logos/los-angeles.png" },
    { name: "Minnesota United",       logo: "logos/minnesota-united.png" },
    { name: "Montreal",               logo: "logos/montreal.png" },
    { name: "Nashville SC",           logo: "logos/nashville.png" },
    { name: "New England Revolution", logo: "logos/new-england-revolution.png" },
    { name: "New York City FC",       logo: "logos/new-york-city.png" },
    { name: "New York Red Bulls",     logo: "logos/new-york-redbulls.png" },
    { name: "Orlando City",           logo: "logos/orlando-city.png" },
    { name: "Philadelphia Union",     logo: "logos/philadelphia-union.png" },
    { name: "Portland Timbers",       logo: "logos/portland-timbers.png" },
    { name: "Real Salt Lake",         logo: "logos/real-salt-lake.png" },
    { name: "San Diego FC",           logo: "logos/san-diego.png" },
    { name: "San Jose Earthquakes",   logo: "logos/san-jose-earthquakes.png" },
    { name: "Seattle Sounders",       logo: "logos/seattle-sounders.png" },
    { name: "Sporting Kansas City",   logo: "logos/sporting-kansas-city.png" },
    { name: "St. Louis City",         logo: "logos/st-louis-city.png" },
    { name: "Toronto FC",             logo: "logos/toronto.png" },
    { name: "Vancouver Whitecaps",    logo: "logos/vancouver-whitecaps.png" },
  ],
  "Liga Profesional": [
    { name: "Aldosivi",                logo: "logos/aldosivi.png" },
    { name: "Argentinos Juniors",      logo: "logos/argentinos-juniors.png" },
    { name: "Atlético Platense",       logo: "logos/atletico-platense.png" },
    { name: "Atlético Tucumán",        logo: "logos/atletico-tucuman.png" },
    { name: "Banfield",                logo: "logos/banfield.png" },
    { name: "Barracas Central",        logo: "logos/barracas-central.png" },
    { name: "Belgrano",                logo: "logos/belgrano.png" },
    { name: "Boca Juniors",            logo: "logos/boca-juniors.png" },
    { name: "Central Córdoba",         logo: "logos/central-cordoba.png" },
    { name: "Defensa y Justicia",      logo: "logos/defensa-y-justicia.png" },
    { name: "Deportivo Riestra",       logo: "logos/deportivo-riestra.png" },
    { name: "Estudiantes LP",          logo: "logos/estudiantes-de-la-plata.png" },
    { name: "Gimnasia y Esgrima",      logo: "logos/gimnasia-y-esgrima.png" },
    { name: "Godoy Cruz",              logo: "logos/godoy-cruz.png" },
    { name: "Huracán",                 logo: "logos/huracan.png" },
    { name: "Independiente",           logo: "logos/independiente.png" },
    { name: "Independiente Rivadavia", logo: "logos/independiente-rivadavia.png" },
    { name: "Instituto Córdoba",       logo: "logos/instituto-cordoba.png" },
    { name: "Lanús",                   logo: "logos/lanus.png" },
    { name: "Newells Old Boys",        logo: "logos/old-boys.png" },
    { name: "Racing Club",             logo: "logos/racing-club.png" },
    { name: "River Plate",             logo: "logos/river-plate.png" },
    { name: "Rosario Central",         logo: "logos/rosario-central.png" },
    { name: "San Lorenzo",             logo: "logos/san-lorenzo.png" },
    { name: "San Martín",              logo: "logos/san-martin.png" },
    { name: "Sarmiento",               logo: "logos/sarmiento.png" },
    { name: "Talleres",                logo: "logos/talleres.png" },
    { name: "Tigre",                   logo: "logos/tigre.png" },
    { name: "Unión",                   logo: "logos/union.png" },
    { name: "Vélez Sarsfield",         logo: "logos/velez-sarsfield.png" },
  ],
  "Copa do Mundo": [
    { name: "Alemanha",        logo: "logos/alemanha.png" },
    { name: "Arábia Saudita",  logo: "logos/arabia-saudita.png" },
    { name: "Argélia",         logo: "logos/argelia.png" },
    { name: "Argentina",       logo: "logos/argentina.png" },
    { name: "Austrália",       logo: "logos/australia.png" },
    { name: "Áustria",         logo: "logos/austria.png" },
    { name: "Bélgica",         logo: "logos/belgica.png" },
    { name: "Brasil",          logo: "logos/brasil.png" },
    { name: "Cabo Verde",      logo: "logos/cabo-verde.png" },
    { name: "Canadá",          logo: "logos/canada.png" },
    { name: "Colômbia",        logo: "logos/colombia.png" },
    { name: "Coreia do Sul",   logo: "logos/coreia-do-sul.png" },
    { name: "Costa do Marfim", logo: "logos/costa-do-marfim.png" },
    { name: "Croácia",         logo: "logos/croacia.png" },
    { name: "Curaçao",         logo: "logos/curacao.png" },
    { name: "Egito",           logo: "logos/egito.png" },
    { name: "Equador",         logo: "logos/equador.png" },
    { name: "Escócia",         logo: "logos/escocia.png" },
    { name: "Espanha",         logo: "logos/espanha.png" },
    { name: "EUA",             logo: "logos/EUA.png" },
    { name: "França",          logo: "logos/franca.png" },
    { name: "Gana",            logo: "logos/ghana.png" },
    { name: "Haiti",           logo: "logos/haiti.png" },
    { name: "Holanda",         logo: "logos/holanda.png" },
    { name: "Inglaterra",      logo: "logos/inglaterra.png" },
    { name: "Irã",             logo: "logos/ira.png" },
    { name: "Japão",           logo: "logos/japao.png" },
    { name: "Jordânia",        logo: "logos/jordania.png" },
    { name: "Marrocos",        logo: "logos/marrocos.png" },
    { name: "México",          logo: "logos/mexico.png" },
    { name: "Noruega",         logo: "logos/noruega.png" },
    { name: "Nova Zelândia",   logo: "logos/nova-zelandia.png" },
    { name: "Panamá",          logo: "logos/panama.png" },
    { name: "Paraguai",        logo: "logos/paraguai.png" },
    { name: "Portugal",        logo: "logos/portugal.png" },
    { name: "Qatar",           logo: "logos/qatar.png" },
    { name: "Senegal",         logo: "logos/senegal.png" },
    { name: "Suíça",           logo: "logos/suica.png" },
    { name: "Tunísia",         logo: "logos/tunisia.png" },
    { name: "Uruguai",         logo: "logos/uruguai.png" },
    { name: "Uzbequistão",     logo: "logos/uzbequistao.png" },
  ],
  "NBA": [
    { name: "Charlotte Hornets",    logo: "logos/cha-hornets.png" },
    { name: "Chicago Bulls",        logo: "logos/chi-bulls.png" },
    { name: "Cleveland Cavaliers",  logo: "logos/cle-cavaliers.png" },
    { name: "Detroit Pistons",      logo: "logos/det-pistons.png" },
    { name: "LA Clippers",          logo: "logos/la-clippers.png" },
    { name: "LA Lakers",            logo: "logos/la-lakers.png" },
    { name: "Miami Heat",           logo: "logos/mia-heat.png" },
    { name: "Milwaukee Bucks",      logo: "logos/mil-bucks.png" },
    { name: "New Orleans Pelicans", logo: "logos/no-pelicans.png" },
    { name: "Orlando Magic",        logo: "logos/orl-magic.png" },
    { name: "Philadelphia 76ers",   logo: "logos/phi-76ers.png" },
    { name: "San Antonio Spurs",    logo: "logos/sa-spurs.png" },
    { name: "Sacramento Kings",     logo: "logos/sac-kings.png" },
    { name: "Utah Jazz",            logo: "logos/uta-jazz.png" },
    { name: "Washington Wizards",   logo: "logos/was-wizards.png" },
  ],
};

const LEAGUE_LOGOS = {
  "Brasileirão":    "logos/brasileirao.png",
  "Premier League": "logos/premier-league.png",
  "La Liga":        "logos/laliga.png",
  "Serie A":        "logos/seriea.png",
  "Bundesliga":     "logos/bundesliga.png",
  "Ligue 1":        "logos/ligue-1.png",
  "Primeira Liga":  "logos/primeira-liga.png",
  "MLS":            "logos/major-league-soccer.png",
  "Liga Profesional": "logos/liga-profisional.png",
  "Copa do Mundo":  "logos/fifa-world-cup-2026.png",
  "NBA":            "logos/nba.png",
};

let currentSport  = "⚽ Futebol";
let currentLeague = "Brasileirão";
let currentMode   = "same";
let selected      = { team1: null, team2: null };
let freeSelected  = { team1: null, team2: null };

// ── Sport ──────────────────────────────────────────────
function buildSportButtons() {
  const container = document.getElementById("sportButtons");
  container.innerHTML = "";
  Object.keys(SPORTS).forEach(sport => {
    const btn = document.createElement("button");
    btn.className = "sport-btn" + (sport === currentSport ? " active" : "");
    btn.textContent = sport;
    btn.onclick = () => selectSport(sport);
    container.appendChild(btn);
  });
}

function selectSport(sport) {
  currentSport  = sport;
  const leagues = SPORTS[sport];
  currentLeague = leagues.length ? leagues[0] : null;
  selected      = { team1: null, team2: null };
  freeSelected  = { team1: null, team2: null };
  resetUI();
  buildSportButtons();
  buildLeagueButtons();
  buildGrids();
  if (currentMode === "free") buildFreeSelects();
}

// ── Mode ───────────────────────────────────────────────
function setMode(mode) {
  currentMode = mode;
  document.getElementById("sameModeSection").style.display = mode === "same" ? "block" : "none";
  document.getElementById("freeModeSection").style.display = mode === "free" ? "block" : "none";
  document.getElementById("modeSame").classList.toggle("active", mode === "same");
  document.getElementById("modeFree").classList.toggle("active", mode === "free");
  selected     = { team1: null, team2: null };
  freeSelected = { team1: null, team2: null };
  resetUI();
  if (mode === "free") buildFreeSelects();
}

function resetUI() {
  document.getElementById("selected1").innerHTML    = "Nenhum selecionado";
  document.getElementById("selected2").innerHTML    = "Nenhum selecionado";
  document.getElementById("preview").style.display  = "none";
  const btn = document.getElementById("generateBtn");
  btn.disabled = true;
  btn.classList.remove("ready");
}

// ── League ─────────────────────────────────────────────
function buildLeagueButtons() {
  const leagues   = SPORTS[currentSport];
  const label     = document.getElementById("leagueLabel");
  const container = document.getElementById("leagueButtons");
  container.innerHTML = "";

  if (!leagues || leagues.length === 0) {
    label.style.display = "none";
    container.innerHTML = `<p style="color:rgba(255,255,255,0.35);font-size:13px;padding:8px 0">Em breve...</p>`;
    return;
  }

  label.style.display = "block";
  leagues.forEach(league => {
    const btn = document.createElement("button");
    btn.className = "league-btn" + (league === currentLeague ? " active" : "");
    btn.innerHTML = LEAGUE_LOGOS[league]
      ? `<img src="${LEAGUE_LOGOS[league]}" alt="${league}" />${league}`
      : league;
    btn.onclick = () => selectLeague(league);
    container.appendChild(btn);
  });
}

function selectLeague(league) {
  currentLeague = league;
  selected = { team1: null, team2: null };
  document.getElementById("selected1").innerHTML = "Nenhum selecionado";
  document.getElementById("selected2").innerHTML = "Nenhum selecionado";
  document.getElementById("preview").style.display = "none";
  const btn = document.getElementById("generateBtn");
  btn.disabled = true;
  btn.classList.remove("ready");
  buildLeagueButtons();
  buildGrids();
}

// ── Grids (mesma liga) ─────────────────────────────────
function buildGrids() {
  if (!currentLeague || !LEAGUES[currentLeague]) return;
  ["grid1", "grid2"].forEach((gridId, idx) => {
    const grid = document.getElementById(gridId);
    grid.innerHTML = "";
    LEAGUES[currentLeague].forEach(team => {
      const btn = document.createElement("button");
      btn.className = "team-btn";
      btn.innerHTML = `<img src="${team.logo}" alt="${team.name}" />${team.name}`;
      btn.dataset.name = team.name;
      btn.onclick = () => selectTeam(idx + 1, team);
      grid.appendChild(btn);
    });
  });
}

function selectTeam(slot, team) {
  const key = `team${slot}`;
  selected[key] = team;
  document.getElementById(`selected${slot}`).innerHTML = `<img src="${team.logo}" alt="${team.name}" />${team.name}`;
  document.querySelectorAll(`#grid${slot} .team-btn`).forEach(b => b.classList.toggle("active", b.dataset.name === team.name));
  const btn = document.getElementById("generateBtn");
  if (selected.team1 && selected.team2) { btn.disabled = false; btn.classList.add("ready"); }
}

// ── Free mode ──────────────────────────────────────────
const ALL_TEAMS = Object.values(LEAGUES).flat();

function buildFreeSelects() {
  [1, 2].forEach(slot => {
    document.getElementById(`freeSearch${slot}`).value = "";
    document.getElementById(`freeGrid${slot}`).innerHTML = "";
    document.getElementById(`freeSelected${slot}`).innerHTML = "Nenhum selecionado";
  });
}

function searchTeam(slot) {
  const query = document.getElementById(`freeSearch${slot}`).value.toLowerCase().trim();
  const grid  = document.getElementById(`freeGrid${slot}`);
  grid.innerHTML = "";
  if (query.length < 2) return;

  const results = ALL_TEAMS.filter(t => t.name.toLowerCase().includes(query));
  results.forEach(team => {
    const btn = document.createElement("button");
    btn.className = "team-btn";
    btn.innerHTML = `<img src="${team.logo}" alt="${team.name}" />${team.name}`;
    btn.dataset.name = team.name;
    btn.onclick = () => selectFreeTeam(slot, team);
    grid.appendChild(btn);
  });

  if (results.length === 0) {
    grid.innerHTML = `<p style="color:rgba(255,255,255,0.35);font-size:12px;padding:6px">Nenhum time encontrado</p>`;
  }
}

function selectFreeTeam(slot, team) {
  freeSelected[`team${slot}`] = team;
  document.getElementById(`freeSelected${slot}`).innerHTML = `<img src="${team.logo}" alt="${team.name}" />${team.name}`;
  document.querySelectorAll(`#freeGrid${slot} .team-btn`).forEach(b => b.classList.toggle("active", b.dataset.name === team.name));
  const btn = document.getElementById("generateBtn");
  if (freeSelected.team1 && freeSelected.team2) { btn.disabled = false; btn.classList.add("ready"); }
}

// ── Image generation ───────────────────────────────────
function loadImage(src) {
  return new Promise(resolve => {
    const img = new Image();
    img.onload  = () => resolve(img);
    img.onerror = () => resolve(null);
    img.src = src;
  });
}

async function generateImage() {
  const t1 = currentMode === "free" ? freeSelected.team1 : selected.team1;
  const t2 = currentMode === "free" ? freeSelected.team2 : selected.team2;
  if (!t1 || !t2) return;

  const canvas = document.getElementById("canvas");
  const ctx    = canvas.getContext("2d");

  canvas.width  = 512;
  canvas.height = 368;
  canvas.style.width  = "512px";
  canvas.style.height = "368px";

  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const [img1, img2] = await Promise.all([loadImage(t1.logo), loadImage(t2.logo)]);

  const maxSize = 70, y = 98, x1 = 302, vsGap = 32;

  function fitLogo(img, x) {
    if (!img) return;
    const r = img.naturalWidth / img.naturalHeight;
    const w = r >= 1 ? maxSize : maxSize * r;
    const h = r >= 1 ? maxSize / r : maxSize;
    ctx.drawImage(img, x + (maxSize - w) / 2, y + (maxSize - h) / 2, w, h);
  }

  fitLogo(img1, x1);
  fitLogo(img2, x1 + maxSize + vsGap);

  ctx.font = "bold 13px Arial";
  ctx.fillStyle = "#111111";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("vs", x1 + maxSize + vsGap / 2, y + maxSize / 2);

  document.getElementById("preview").style.display = "block";
}

function downloadImage() {
  const t1 = currentMode === "free" ? freeSelected.team1 : selected.team1;
  const t2 = currentMode === "free" ? freeSelected.team2 : selected.team2;
  const canvas = document.getElementById("canvas");
  const exp    = document.createElement("canvas");
  exp.width = 512; exp.height = 368;
  exp.getContext("2d").drawImage(canvas, 0, 0, 512, 368);
  const link = document.createElement("a");
  link.download = `${t1.name}_vs_${t2.name}.png`;
  link.href = exp.toDataURL("image/png");
  link.click();
}

// ── Tools panel ────────────────────────────────────────
function toggleTools() {
  const panel = document.getElementById("toolsPanel");
  panel.classList.toggle("open");
  if (panel.classList.contains("open")) {
    setTimeout(() => {
      document.addEventListener("click", function close(e) {
        if (!e.target.closest(".tools-wrapper")) {
          panel.classList.remove("open");
          document.removeEventListener("click", close);
        }
      });
    }, 0);
  }
}

// ── Init ───────────────────────────────────────────────
buildSportButtons();
buildLeagueButtons();
buildGrids();
