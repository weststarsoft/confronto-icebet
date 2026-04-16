// Mapeamento: nome da API → arquivo PNG local
const LOGO_MAP = {
  // Premier League
  "Arsenal": "logos/arsenal.png",
  "Aston Villa": "logos/aston-villa.png",
  "Bournemouth": "logos/bournemouth.png",
  "Brentford": "logos/brentford.png",
  "Brighton and Hove Albion": "logos/brighton.png",
  "Brighton": "logos/brighton.png",
  "Burnley": "logos/burnley.png",
  "Chelsea": "logos/chelsea.png",
  "Crystal Palace": "logos/crystal-palace.png",
  "Everton": "logos/everton.png",
  "Fulham": "logos/fulham.png",
  "Leeds United": "logos/leeds.png",
  "Leeds": "logos/leeds.png",
  "Liverpool": "logos/liverpool.png",
  "Manchester City": "logos/man-city.png",
  "Manchester United": "logos/man-united.png",
  "Newcastle United": "logos/newcastle.png",
  "Newcastle": "logos/newcastle.png",
  "Nottingham Forest": "logos/nottingham.png",
  "Port Vale": "logos/port-vale.png",
  "Southampton": "logos/southampton.png",
  "Sunderland": "logos/sunderland.png",
  "Tottenham Hotspur": "logos/tottenham.png",
  "Tottenham": "logos/tottenham.png",
  "West Ham United": "logos/west-ham.png",
  "West Ham": "logos/west-ham.png",
  "Wolverhampton Wanderers": "logos/wolves.png",
  "Wolves": "logos/wolves.png",
  // La Liga
  "Alavés": "logos/alaves.png",
  "Athletic Bilbao": "logos/athletic-bilbao.png",
  "Athletic Club": "logos/athletic-bilbao.png",
  "Atletico Madrid": "logos/atletico-madrid.png",
  "Atlético Madrid": "logos/atletico-madrid.png",
  "Barcelona": "logos/barcelona.png",
  "Real Betis": "logos/betis.png",
  "Betis": "logos/betis.png",
  "Celta Vigo": "logos/celta-vigo.png",
  "Elche": "logos/elche.png",
  "Espanyol": "logos/espanyol.png",
  "Getafe": "logos/getafe.png",
  "Girona": "logos/girona.png",
  "Las Palmas": "logos/las-palmas.png",
  "Levante": "logos/levante.png",
  "Mallorca": "logos/mallorca.png",
  "Osasuna": "logos/osasuna.png",
  "Rayo Vallecano": "logos/rayo-vallecano.png",
  "Real Madrid": "logos/real-madrid.png",
  "Real Sociedad": "logos/real-ociedad.png",
  "Real Oviedo": "logos/real-oviedo.png",
  "Sevilla": "logos/sevilla.png",
  "Valencia": "logos/valencia.png",
  "Villarreal": "logos/villarreal.png",
  // Serie A
  "AC Milan": "logos/ac-milan.png",
  "Atalanta": "logos/atalanta.png",
  "Bologna": "logos/bologna.png",
  "Cagliari": "logos/cagliari.png",
  "Como": "logos/como-1907.png",
  "Cremonese": "logos/cremonese.png",
  "Fiorentina": "logos/fiorentina.png",
  "Genoa": "logos/genoa.png",
  "Inter Milan": "logos/inter-milan.png",
  "Internazionale": "logos/inter-milan.png",
  "Juventus": "logos/juventus.png",
  "Lazio": "logos/lazio.png",
  "Lecce": "logos/lecce.png",
  "Napoli": "logos/napoli.png",
  "Parma": "logos/parma.png",
  "Pisa": "logos/pisa.png",
  "Roma": "logos/roma.png",
  "Sassuolo": "logos/sassuolo.png",
  "Torino": "logos/torino.png",
  "Udinese": "logos/udinese.png",
  "Verona": "logos/verona.png",
  "Hellas Verona": "logos/verona.png",
  // Bundesliga
  "Augsburg": "logos/augsburg.png",
  "Bayern Munich": "logos/bayern-munich.png",
  "Bayer Leverkusen": "logos/bayer-leverkusen.png",
  "Borussia Dortmund": "logos/borussia-dortmund.png",
  "Borussia Monchengladbach": "logos/borussia-monchengladbach.png",
  "Borussia Mönchengladbach": "logos/borussia-monchengladbach.png",
  "Eintracht Frankfurt": "logos/frankfurt.png",
  "Frankfurt": "logos/frankfurt.png",
  "Freiburg": "logos/freiburg.png",
  "Hamburger SV": "logos/hamburger.png",
  "Heidenheim": "logos/heidenheim.png",
  "Hoffenheim": "logos/hoffenheim.png",
  "FC Köln": "logos/koln.png",
  "Köln": "logos/koln.png",
  "Mainz": "logos/mainz.png",
  "RB Leipzig": "logos/rb-leipzig.png",
  "St. Pauli": "logos/st-pauli.png",
  "Stuttgart": "logos/stuttgart.png",
  "Union Berlin": "logos/union-berlin.png",
  "Werder Bremen": "logos/werder-bremen.png",
  "Wolfsburg": "logos/wolfsburg.png",
  // Ligue 1
  "Angers": "logos/angers.png",
  "Auxerre": "logos/auxerre.png",
  "Brest": "logos/brest.png",
  "Le Havre": "logos/havre.png",
  "Lens": "logos/lens.png",
  "Lille": "logos/lille.png",
  "Lorient": "logos/lorient.png",
  "Lyon": "logos/lyon.png",
  "Olympique Lyonnais": "logos/lyon.png",
  "Marseille": "logos/olympique-de-marseille.png",
  "Olympique Marseille": "logos/olympique-de-marseille.png",
  "Metz": "logos/metz.png",
  "Monaco": "logos/monaco.png",
  "Nantes": "logos/nantes.png",
  "Nice": "logos/nice.png",
  "Paris FC": "logos/paris-fc.png",
  "Paris Saint-Germain": "logos/paris-saint-germain.png",
  "PSG": "logos/paris-saint-germain.png",
  "Rennes": "logos/rennes.png",
  "Strasbourg": "logos/strasbourg-alsace.png",
  "Toulouse": "logos/toulouse.png",
  // Primeira Liga
  "Arouca": "logos/arouca.png",
  "Benfica": "logos/benfica.png",
  "Boa Vista": "logos/boa-vista.png",
  "Braga": "logos/braga.png",
  "Casa Pia": "logos/casa-pia.png",
  "Chaves": "logos/chaves.png",
  "Estoril Praia": "logos/estoril-praia.png",
  "Estrela Amadora": "logos/estrela-amadora.png",
  "Famalicão": "logos/famalicao.png",
  "Farense": "logos/farense.png",
  "Moreirense": "logos/moreirense.png",
  "Portimonense": "logos/portimonense.png",
  "Porto": "logos/porto.png",
  "Rio Ave": "logos/rio-ave.png",
  "Santa Clara": "logos/santa-clara.png",
  "Sporting CP": "logos/sporting.png",
  "Sporting": "logos/sporting.png",
  "Vicente": "logos/vicente.png",
  "Vitória SC": "logos/vitoria.png",
  "Vizela": "logos/vizela.png",
  // MLS
  "Atlanta United": "logos/atlanta-united.png",
  "Austin FC": "logos/austin.png",
  "Charlotte FC": "logos/charlotte.png",
  "Chicago Fire": "logos/chicago-fire.png",
  "FC Cincinnati": "logos/cincinnati.png",
  "Cincinnati": "logos/cincinnati.png",
  "Colorado Rapids": "logos/colorado-rapids.png",
  "Columbus Crew": "logos/columbus-crew.png",
  "FC Dallas": "logos/dallas.png",
  "Dallas": "logos/dallas.png",
  "DC United": "logos/dc-united.png",
  "LA Galaxy": "logos/galaxy.png",
  "Houston Dynamo": "logos/houston-dynamo.png",
  "Inter Miami": "logos/inter-miami.png",
  "Los Angeles FC": "logos/los-angeles.png",
  "Minnesota United": "logos/minnesota-united.png",
  "CF Montreal": "logos/montreal.png",
  "Montreal": "logos/montreal.png",
  "Nashville SC": "logos/nashville.png",
  "New England Revolution": "logos/new-england-revolution.png",
  "New York City FC": "logos/new-york-city.png",
  "New York Red Bulls": "logos/new-york-redbulls.png",
  "Orlando City": "logos/orlando-city.png",
  "Philadelphia Union": "logos/philadelphia-union.png",
  "Portland Timbers": "logos/portland-timbers.png",
  "Real Salt Lake": "logos/real-salt-lake.png",
  "San Diego FC": "logos/san-diego.png",
  "San Jose Earthquakes": "logos/san-jose-earthquakes.png",
  "Seattle Sounders": "logos/seattle-sounders.png",
  "Sporting Kansas City": "logos/sporting-kansas-city.png",
  "St. Louis City": "logos/st-louis-city.png",
  "Toronto FC": "logos/toronto.png",
  "Vancouver Whitecaps": "logos/vancouver-whitecaps.png",
  // Liga Profesional
  "Aldosivi": "logos/aldosivi.png",
  "Argentinos Juniors": "logos/argentinos-juniors.png",
  "Atletico Platense": "logos/atletico-platense.png",
  "Atletico Tucuman": "logos/atletico-tucuman.png",
  "Banfield": "logos/banfield.png",
  "Barracas Central": "logos/barracas-central.png",
  "Belgrano": "logos/belgrano.png",
  "Boca Juniors": "logos/boca-juniors.png",
  "Central Cordoba": "logos/central-cordoba.png",
  "Defensa y Justicia": "logos/defensa-y-justicia.png",
  "Deportivo Riestra": "logos/deportivo-riestra.png",
  "Estudiantes": "logos/estudiantes-de-la-plata.png",
  "Gimnasia y Esgrima": "logos/gimnasia-y-esgrima.png",
  "Godoy Cruz": "logos/godoy-cruz.png",
  "Huracan": "logos/huracan.png",
  "Independiente": "logos/independiente.png",
  "Independiente Rivadavia": "logos/independiente-rivadavia.png",
  "Instituto Cordoba": "logos/instituto-cordoba.png",
  "Lanus": "logos/lanus.png",
  "Newells Old Boys": "logos/old-boys.png",
  "Racing Club": "logos/racing-club.png",
  "River Plate": "logos/river-plate.png",
  "Rosario Central": "logos/rosario-central.png",
  "San Lorenzo": "logos/san-lorenzo.png",
  "San Martin": "logos/san-martin.png",
  "Sarmiento": "logos/sarmiento.png",
  "Talleres": "logos/talleres.png",
  "Tigre": "logos/tigre.png",
  "Union": "logos/union.png",
  "Velez Sarsfield": "logos/velez-sarsfield.png",
  // Copa Libertadores / times brasileiros
  "Flamengo": "logos/flamengo.png",
  "Fluminense": "logos/fluminense.png",
  "Palmeiras": "logos/palmeiras.png",
  "Corinthians": "logos/corinthians.png",
  "SC Corinthians Paulista": "logos/corinthians.png",
  "Gremio": "logos/gremio.png",
  "Grêmio": "logos/gremio.png",
  "Internacional": "logos/internacional.png",
  "Atletico Mineiro": "logos/atletico-mg.png",
  "Atlético Mineiro": "logos/atletico-mg.png",
  "Botafogo": "logos/botafogo.png",
  "Vasco da Gama": "logos/vasco.png",
  "Cruzeiro": "logos/cruzeiro.png",
  "Santos": "logos/santos.png",
  "Bahia": "logos/bahia.png",
  "Fortaleza": "logos/fortaleza.png",
  "Athletico Paranaense": "logos/atletico-pr.png",
  "Red Bull Bragantino": "logos/bragantino.png",
  "Sao Paulo": "logos/sao-paulo.png",
  "São Paulo": "logos/sao-paulo.png",
  "Mirassol": "logos/mirassol.png",
  "SE Palmeiras": "logos/palmeiras.png",
  "Independiente del Valle": "logos/independiente-del-valle.png",
  "CS Independiente Rivadavia": "logos/independiente-rivadavia.png",
  "Lanus": "logos/lanus.png",
  "CA Lanus": "logos/lanus.png",
  "Always Ready": "logos/always-ready.png",
  "Club Always Ready": "logos/always-ready.png",
  "Sporting Cristal": "logos/sporting-cristal.png",
  "CS Cristal": "logos/sporting-cristal.png",
  "Santa Fe": "logos/santa-fe.png",
  "Universidad Central": "logos/universidad-central.png",
  "Nacional": "logos/nacional.png",
  "Penarol": "logos/penarol.png",
  // Copa do Mundo
  "Brazil": "logos/brasil.png",
  "Argentina": "logos/argentina.png",
  "France": "logos/franca.png",
  "Germany": "logos/alemanha.png",
  "Spain": "logos/espanha.png",
  "England": "logos/inglaterra.png",
  "Portugal": "logos/portugal.png",
  "Netherlands": "logos/holanda.png",
  "Belgium": "logos/belgica.png",
  "Uruguay": "logos/uruguai.png",
  "Mexico": "logos/mexico.png",
  "United States": "logos/estados-unidos.png",
  "Japan": "logos/japao.png",
  "Morocco": "logos/marrocos.png",
  "Croatia": "logos/croacia.png",
  "Senegal": "logos/senegal.png",
  "Australia": "logos/australia.png",
  "Colombia": "logos/colombia.png",
};

function getLocalLogo(name) {
  if (!name) return null;
  // Busca direta
  if (LOGO_MAP[name]) return LOGO_MAP[name];
  // Busca case-insensitive
  const lower = name.toLowerCase();
  const key = Object.keys(LOGO_MAP).find(k => k.toLowerCase() === lower);
  return key ? LOGO_MAP[key] : null;
}

const TEAMS_DB = Object.keys(LOGO_MAP);

let selected     = { team1: null, team2: null };
let searchTimers = {};

// ── Search ─────────────────────────────────────────────
async function searchTeam(slot) {
  const raw    = document.getElementById(`search${slot}`).value.trim();
  const query  = raw.toLowerCase();
  const grid   = document.getElementById(`grid${slot}`);
  const status = document.getElementById(`searchStatus${slot}`);

  grid.innerHTML = "";
  clearTimeout(searchTimers[slot]);

  if (query.length < 2) { status.textContent = ""; return; }

  const matches = TEAMS_DB.filter(t => t.toLowerCase().includes(query));
  const unique  = [...new Set(matches)];

  if (unique.length > 0) {
    status.textContent = `${unique.length} time(s) encontrado(s)`;
    unique.forEach(name => {
      const logo = getLocalLogo(name);
      const btn  = document.createElement("button");
      btn.className    = "team-btn";
      btn.dataset.name = name;
      btn.innerHTML    = logo
        ? `<img src="${logo}" alt="${name}" onerror="this.style.display='none'" />${name}`
        : `<span style="width:22px;height:22px;display:inline-block;flex-shrink:0"></span>${name}`;
      btn.onclick = () => selectTeam(slot, { name, logo: logo || "" }, btn, grid);
      grid.appendChild(btn);
    });
  } else {
    status.textContent = "Nenhum time encontrado. Adicione o logo na pasta logos/";
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
  const exp    = document.createElement("canvas");
  exp.width = 512; exp.height = 368;
  exp.getContext("2d").drawImage(canvas, 0, 0, 512, 368);
  const link    = document.createElement("a");
  link.download = `${t1.name}_vs_${t2.name}.png`;
  link.href     = exp.toDataURL("image/png");
  link.click();
}

// ── Fixtures ───────────────────────────────────────────
async function loadFixtures() {
  const list = document.getElementById("fixturesList");
  list.innerHTML = `<div class="fixtures-loading">Carregando jogos...</div>`;

  try {
    const res     = await fetch("/api/fixtures");
    const data    = await res.json();
    const matches = data.matches || [];

    if (matches.length === 0) {
      list.innerHTML = `<div class="fixtures-loading">Nenhum jogo encontrado</div>`;
      return;
    }

    list.innerHTML = "";
    const grouped = {};
    matches.forEach(m => {
      if (!grouped[m.competition]) grouped[m.competition] = [];
      grouped[m.competition].push(m);
    });

    Object.entries(grouped).forEach(([comp, matches]) => {
      const header = document.createElement("div");
      header.className = "fixture-league-header";
      header.innerHTML = `<span>${comp}</span>`;
      list.appendChild(header);

      matches.forEach(m => {
        const utc    = new Date(m.utcDate);
        const hoje   = new Date().toLocaleDateString("pt-BR", { timeZone: "America/Sao_Paulo" });
        const dataJogo = utc.toLocaleDateString("pt-BR", { timeZone: "America/Sao_Paulo" });
        const time   = utc.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit", timeZone: "America/Sao_Paulo" });
        const label  = dataJogo === hoje ? time : `${dataJogo.slice(0,5)} ${time}`;
        const isLive = m.status === "IN_PLAY" || m.status === "PAUSED";
        const isDone = m.status === "FINISHED";
        const score  = isDone || isLive ? `${m.score?.home ?? 0} - ${m.score?.away ?? 0}` : label;
        const dot    = isLive ? "🔴" : "⏰";

        const homeLogo = getLocalLogo(m.home.name);
        const awayLogo = getLocalLogo(m.away.name);

        const item = document.createElement("div");
        item.className = "fixture-item";
        item.innerHTML = `
          <span class="fixture-status">${dot}</span>
          <div class="fixture-crest-wrap">${homeLogo ? `<img src="${homeLogo}" class="fixture-crest" />` : ""}</div>
          <div class="fixture-teams">
            <span class="fixture-team-name">${m.home.name}</span>
            <span class="fixture-vs">vs</span>
            <span class="fixture-team-name">${m.away.name}</span>
          </div>
          <div class="fixture-crest-wrap">${awayLogo ? `<img src="${awayLogo}" class="fixture-crest" />` : ""}</div>
          <span class="fixture-score ${isLive ? "live" : ""}">${score}</span>
          <button class="fixture-use-btn" onclick="useFixture('${m.home.name.replace(/'/g,"\\'")}','${m.away.name.replace(/'/g,"\\'")}')">Usar</button>
        `;
        list.appendChild(item);
      });
    });

  } catch(e) {
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
