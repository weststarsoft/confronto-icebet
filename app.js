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
  ]
};

const LEAGUE_LOGOS = {
  "Brasileirão":    "logos/brasileirao.png",
  "Premier League": "logos/premier-league.png",
  "La Liga":        "logos/laliga.png",
  "Serie A":        "logos/seriea.png",
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

  const logoSize = 70;
  const y     = 98;
  const x1    = 302;
  const vsGap = 32;
  const x2    = x1 + logoSize + vsGap;

  if (img1) ctx.drawImage(img1, x1, y, logoSize, logoSize);
  if (img2) ctx.drawImage(img2, x2, y, logoSize, logoSize);

  ctx.font         = "bold 13px Arial";
  ctx.fillStyle    = "#111111";
  ctx.textAlign    = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("vs", x1 + logoSize + vsGap / 2, y + logoSize / 2);

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
