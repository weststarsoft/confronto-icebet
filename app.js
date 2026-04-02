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
};
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
};

const LEAGUE_LOGOS = {
  "Brasileirão":    "logos/brasileirao.png",
  "Premier League": "logos/premier-league.png",
  "La Liga":        "logos/laliga.png",
  "Serie A":        "logos/seriea.png",
  "Bundesliga":     "logos/bundesliga.png",
  "Ligue 1":        "logos/ligue-1.png",
};

let currentLeague = "Brasileirão";
let selected = { team1: null, team2: null };

function buildLeagueButtons() {
  const container = document.getElementById("leagueButtons");
  container.innerHTML = "";
  Object.keys(LEAGUES).forEach(league => {
    const btn = document.createElement("button");
    btn.className = "league-btn" + (league === currentLeague ? " active" : "");
    if (LEAGUE_LOGOS[league]) {
      btn.innerHTML = `<img src="${LEAGUE_LOGOS[league]}" alt="${league}" />${league}`;
    } else {
      btn.textContent = league;
    }
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

function buildGrids() {
  ["grid1", "grid2"].forEach((gridId, idx) => {
    const grid = document.getElementById(gridId);
    grid.innerHTML = "";
    LEAGUES[currentLeague].forEach(team => {
      const btn = document.createElement("button");
      btn.className = "team-btn";
      btn.innerHTML = `<img src="${team.logo}" alt="${team.name}" />${team.name}`;
      btn.onclick = () => selectTeam(idx + 1, team);
      btn.dataset.name = team.name;
      grid.appendChild(btn);
    });
  });
}

function selectTeam(slot, team) {
  const key = slot === 1 ? "team1" : "team2";
  selected[key] = team;

  const selEl = document.getElementById(`selected${slot}`);
  selEl.innerHTML = `<img src="${team.logo}" alt="${team.name}" />${team.name}`;

  document.querySelectorAll(`#grid${slot} .team-btn`).forEach(btn => {
    btn.classList.toggle("active", btn.dataset.name === team.name);
  });

  const btn = document.getElementById("generateBtn");
  if (selected.team1 && selected.team2) {
    btn.disabled = false;
    btn.classList.add("ready");
  }
}

function loadImage(src) {
  return new Promise(resolve => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => resolve(null);
    img.src = src;
  });
}

async function generateImage() {
  if (!selected.team1 || !selected.team2) return;

  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width  = 512;
  canvas.height = 368;
  canvas.style.width  = "512px";
  canvas.style.height = "368px";

  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const [img1, img2] = await Promise.all([
    loadImage(selected.team1.logo),
    loadImage(selected.team2.logo)
  ]);

  const maxSize = 70;
  const y       = 98;
  const x1      = 302;
  const vsGap   = 32;

  function fitLogo(img, x) {
    if (!img) return;
    const ratio = img.naturalWidth / img.naturalHeight;
    let w, h;
    if (ratio >= 1) { w = maxSize; h = maxSize / ratio; }
    else            { h = maxSize; w = maxSize * ratio; }
    const offsetX = (maxSize - w) / 2;
    const offsetY = (maxSize - h) / 2;
    ctx.drawImage(img, x + offsetX, y + offsetY, w, h);
  }

  fitLogo(img1, x1);
  fitLogo(img2, x1 + maxSize + vsGap);

  ctx.font         = "bold 13px Arial";
  ctx.fillStyle    = "#111111";
  ctx.textAlign    = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("vs", x1 + maxSize + vsGap / 2, y + maxSize / 2);

  document.getElementById("preview").style.display = "block";
}

function downloadImage() {
  const canvas = document.getElementById("canvas");

  const exportCanvas = document.createElement("canvas");
  exportCanvas.width  = 512;
  exportCanvas.height = 368;
  const exportCtx = exportCanvas.getContext("2d");
  exportCtx.drawImage(canvas, 0, 0, 512, 368);

  const link = document.createElement("a");
  link.download = `${selected.team1.name}_vs_${selected.team2.name}.png`;
  link.href = exportCanvas.toDataURL("image/png");
  link.click();
}

// Init
buildLeagueButtons();
buildGrids();
