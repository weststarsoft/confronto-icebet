const API = "/api/search?q=";

const TEAMS_DB = [
  // Brasileirão
  "Flamengo","Palmeiras","Corinthians","São Paulo FC","Grêmio","Internacional",
  "Atletico Mineiro","Botafogo","Fluminense","Vasco da Gama","Cruzeiro","Santos FC",
  "Bahia","Fortaleza EC","Athletico Paranaense","Red Bull Bragantino","Ceara",
  "Cuiaba","Sport Recife","Goias","América Mineiro","Coritiba","Chapecoense",
  "Juventude","Avai","CRB","Nautico","Ponte Preta","Vila Nova","Novorizontino",
  // La Liga
  "Real Madrid","Barcelona","Atletico Madrid","Sevilla","Valencia","Villarreal",
  "Real Betis","Athletic Bilbao","Real Sociedad","Osasuna","Girona","Las Palmas",
  "Getafe","Rayo Vallecano","Celta Vigo","Alaves","Mallorca","Leganes","Espanyol",
  // Premier League
  "Arsenal","Chelsea","Liverpool","Manchester City","Manchester United",
  "Tottenham Hotspur","Newcastle United","West Ham United","Aston Villa",
  "Brighton","Fulham","Brentford","Crystal Palace","Everton","Wolves",
  "Nottingham Forest","Bournemouth","Southampton","Ipswich Town","Leicester City",
  // Serie A
  "Juventus","Inter Milan","AC Milan","Napoli","Roma","Lazio","Atalanta",
  "Fiorentina","Bologna","Torino","Udinese","Genoa","Cagliari","Lecce",
  "Empoli","Verona","Venezia","Como","Parma","Monza",
  // Bundesliga
  "Bayern Munich","Borussia Dortmund","Bayer Leverkusen","RB Leipzig",
  "Eintracht Frankfurt","Wolfsburg","Freiburg","Union Berlin","Hoffenheim",
  "Werder Bremen","Mainz","Augsburg","Stuttgart","Borussia Monchengladbach",
  "St Pauli","Heidenheim","Holstein Kiel","FC Köln",
  // Ligue 1
  "Paris Saint-Germain","Olympique Marseille","Monaco","Olympique Lyonnais",
  "Lille","Nice","Lens","Rennes","Strasbourg","Nantes","Reims","Toulouse",
  "Brest","Le Havre","Auxerre","Angers","Montpellier","Saint-Etienne",
  // Primeira Liga
  "Benfica","Porto","Sporting CP","Braga","Vitoria Guimaraes","Famalicao",
  "Moreirense","Arouca","Estoril Praia","Casa Pia","Rio Ave","Farense",
  // MLS
  "Inter Miami","LA Galaxy","Los Angeles FC","Seattle Sounders",
  "Portland Timbers","Atlanta United","New York City FC","New York Red Bulls",
  "Toronto FC","Philadelphia Union","New England Revolution","Orlando City",
  "Nashville SC","Austin FC","Charlotte FC","Chicago Fire","Colorado Rapids",
  "Columbus Crew","DC United","Houston Dynamo","Minnesota United",
  "Real Salt Lake","San Jose Earthquakes","Sporting Kansas City",
  "Vancouver Whitecaps","Montreal","St Louis City","San Diego FC",
  // Liga Profesional
  "Boca Juniors","River Plate","Racing Club","Independiente","San Lorenzo",
  "Estudiantes","Lanus","Velez Sarsfield","Tigre","Huracan","Banfield",
  "Godoy Cruz","Colon","Talleres","Belgrano","Rosario Central",
  // NBA
  "Los Angeles Lakers","Chicago Bulls","Miami Heat","Golden State Warriors",
  "Boston Celtics","Brooklyn Nets","New York Knicks","Milwaukee Bucks",
  "Phoenix Suns","Dallas Mavericks","Denver Nuggets","Philadelphia 76ers",
  "Toronto Raptors","Atlanta Hawks","Cleveland Cavaliers","Charlotte Hornets",
  "Indiana Pacers","Detroit Pistons","Orlando Magic","Washington Wizards",
  "Memphis Grizzlies","New Orleans Pelicans","Oklahoma City Thunder",
  "San Antonio Spurs","Utah Jazz","Sacramento Kings","Portland Trail Blazers",
  "Minnesota Timberwolves","Houston Rockets","Los Angeles Clippers",
  // Copa do Mundo
  "Brazil","Argentina","France","Germany","Spain","England","Portugal",
  "Netherlands","Belgium","Uruguay","Mexico","United States","Japan",
  "Morocco","Croatia","Senegal","Australia","Colombia","Chile","Ecuador",
];

let selected = { team1: null, team2: null };
let searchTimers = {};

// ── Search ─────────────────────────────────────────────
async function searchTeam(slot) {
  const raw   = document.getElementById(`search${slot}`).value.trim();
  const query = raw.toLowerCase();
  const grid  = document.getElementById(`grid${slot}`);
  const status = document.getElementById(`searchStatus${slot}`);

  grid.innerHTML = "";
  clearTimeout(searchTimers[slot]);

  if (query.length < 2) { status.textContent = ""; return; }

  const matches = TEAMS_DB.filter(t => t.toLowerCase().includes(query));

  if (matches.length > 0) {
    status.textContent = `${matches.length} time(s) encontrado(s)`;
    grid.innerHTML = "";
    matches.forEach(name => {
      const btn = document.createElement("button");
      btn.className = "team-btn";
      btn.dataset.name = name;
      btn.innerHTML = `<span style="width:22px;height:22px;display:inline-block;flex-shrink:0"></span>${name}`;
      btn.onclick = () => fetchAndSelect(slot, name, btn, grid);
      grid.appendChild(btn);

      fetch(API + encodeURIComponent(name))
        .then(r => r.json())
        .then(data => {
          if (data.teams && data.teams[0] && data.teams[0].strBadge) {
            const logoUrl = `/api/search?img=${encodeURIComponent(data.teams[0].strBadge)}`;
            const b = grid.querySelector(`[data-name="${name.replace(/"/g, '\\"')}"]`);
            if (b) b.innerHTML = `<img src="${logoUrl}" alt="${name}" onerror="this.style.display='none'" />${name}`;
          }
        }).catch(() => {});
    });
  } else {
    status.textContent = "Buscando...";
    searchTimers[slot] = setTimeout(() => fetchFromAPI(slot, raw, grid, status), 500);
  }
}

async function fetchFromAPI(slot, query, grid, status) {
  try {
    const res  = await fetch(API + encodeURIComponent(query));
    const data = await res.json();
    const teams = data.teams;

    grid.innerHTML = "";
    if (!teams || teams.length === 0) {
      status.textContent = "Nenhum time encontrado";
      return;
    }

    const filtered = teams.filter(t => t.strBadge);
    status.textContent = `${filtered.length} time(s) encontrado(s)`;

    filtered.forEach(t => {
      const team = { name: t.strTeam, logo: `/api/search?img=${encodeURIComponent(t.strBadge)}` };
      const btn = document.createElement("button");
      btn.className = "team-btn";
      btn.dataset.name = team.name;
      btn.innerHTML = `<img src="${team.logo}" alt="${team.name}" onerror="this.style.display='none'" />${team.name}`;
      btn.onclick = () => selectTeam(slot, team, btn, grid);
      grid.appendChild(btn);
    });
  } catch {
    status.textContent = "Erro na busca. Tente novamente.";
  }
}

async function fetchAndSelect(slot, name, btn, grid) {
  try {
    const res  = await fetch(API + encodeURIComponent(name));
    const data = await res.json();
    if (data.teams && data.teams[0] && data.teams[0].strBadge) {
      const logo = `/api/search?img=${encodeURIComponent(data.teams[0].strBadge)}`;
      selectTeam(slot, { name, logo }, btn, grid);
    } else {
      selectTeam(slot, { name, logo: "" }, btn, grid);
    }
  } catch {
    selectTeam(slot, { name, logo: "" }, btn, grid);
  }
}

function selectTeam(slot, team, btnEl, grid) {
  selected[`team${slot}`] = team;
  grid.querySelectorAll(".team-btn").forEach(b => b.classList.remove("active"));
  btnEl.classList.add("active");
  document.getElementById(`selected${slot}`).innerHTML =
    team.logo ? `<img src="${team.logo}" alt="${team.name}" />${team.name}` : team.name;
  updateLivePreview(slot, team);
  const btn = document.getElementById("generateBtn");
  if (selected.team1 && selected.team2) { btn.disabled = false; btn.classList.add("ready"); }
}

// ── Live Preview ───────────────────────────────────────
function updateLivePreview(slot, team) {
  const logo        = document.getElementById(`liveLogo${slot}`);
  const placeholder = document.getElementById(`livePlaceholder${slot}`);
  const name        = document.getElementById(`liveName${slot}`);
  if (team && team.logo) {
    logo.src = team.logo;
    logo.style.display = "block";
    placeholder.style.display = "none";
    name.textContent = team.name;
    name.classList.remove("placeholder");
  } else if (team) {
    logo.style.display = "none";
    placeholder.style.display = "flex";
    name.textContent = team.name;
    name.classList.remove("placeholder");
  } else {
    logo.style.display = "none";
    placeholder.style.display = "flex";
    name.textContent = slot === 1 ? "Time da Casa" : "Time Visitante";
    name.classList.add("placeholder");
  }
}

// ── Image generation ───────────────────────────────────
function loadImage(src) {
  return new Promise(resolve => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload  = () => resolve(img);
    img.onerror = () => resolve(null);
    img.src = src;
  });
}

async function generateImage() {
  const t1 = selected.team1;
  const t2 = selected.team2;
  if (!t1 || !t2) return;

  const btn = document.getElementById("generateBtn");
  btn.classList.remove("ready");
  btn.classList.add("loading");
  btn.textContent = "⏳ Gerando...";

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

  btn.classList.remove("loading");
  btn.classList.add("ready");
  btn.textContent = "⚽ Gerar Imagem";

  document.getElementById("preview").style.display = "block";
}

function downloadImage() {
  const t1 = selected.team1;
  const t2 = selected.team2;
  const canvas = document.getElementById("canvas");
  const exp = document.createElement("canvas");
  exp.width = 512; exp.height = 368;
  exp.getContext("2d").drawImage(canvas, 0, 0, 512, 368);
  const link = document.createElement("a");
  link.download = `${t1.name}_vs_${t2.name}.png`;
  link.href = exp.toDataURL("image/png");
  link.click();
}

// ── Fixtures ───────────────────────────────────────────
async function loadFixtures() {
  const list = document.getElementById("fixturesList");
  list.innerHTML = `<div class="fixtures-loading">Carregando jogos...</div>`;

  try {
    const res  = await fetch("/api/fixtures");
    const data = await res.json();
    const matches = data.matches || [];

    if (matches.length === 0) {
      list.innerHTML = `<div class="fixtures-loading">Nenhum jogo encontrado para hoje</div>`;
      return;
    }

    list.innerHTML = "";

    const grouped = {};
    matches.forEach(m => {
      const key = m.competition;
      if (!grouped[key]) grouped[key] = { emblem: m.emblem, matches: [] };
      grouped[key].matches.push(m);
    });

    Object.entries(grouped).forEach(([comp, { emblem, matches }]) => {
      const header = document.createElement("div");
      header.className = "fixture-league-header";
      header.innerHTML = `
        ${emblem ? `<img src="${emblem}" alt="${comp}" />` : ""}
        <span>${comp}</span>
      `;
      list.appendChild(header);

      matches.forEach(m => {
        const utc    = new Date(m.utcDate);
        const time   = utc.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit", timeZone: "America/Sao_Paulo" });
        const isLive = m.status === "IN_PLAY" || m.status === "PAUSED";
        const isDone = m.status === "FINISHED";
        const score  = isDone || isLive
          ? `${m.score?.home ?? 0} - ${m.score?.away ?? 0}`
          : time;

        const item = document.createElement("div");
        item.className = "fixture-item";
        item.innerHTML = `
          <div class="fixture-teams">
            ${m.home.crest ? `<img src="${m.home.crest}" alt="${m.home.name}" class="fixture-crest" />` : ""}
            <span>${m.home.name}</span>
            <span class="fixture-vs">vs</span>
            <span>${m.away.name}</span>
            ${m.away.crest ? `<img src="${m.away.crest}" alt="${m.away.name}" class="fixture-crest" />` : ""}
          </div>
          <span class="fixture-score ${isLive ? "live" : ""}">${score}</span>
          <button class="fixture-use-btn" onclick="useFixture('${m.home.name.replace(/'/g,"\\'")}','${m.away.name.replace(/'/g,"\\'")}')">Usar</button>
        `;
        list.appendChild(item);
      });
    });

  } catch (e) {
    list.innerHTML = `<div class="fixtures-loading">Erro ao carregar jogos</div>`;
  }
}

async function useFixture(home, away) {
  document.getElementById("search1").value = home;
  document.getElementById("search2").value = away;
  searchTeam(1);
  searchTeam(2);
  document.getElementById("search1").scrollIntoView({ behavior: "smooth" });
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
loadFixtures();
