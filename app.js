const API = "/api/search?q=";

let selected = { team1: null, team2: null };
let searchTimers = {};

// ── Search ─────────────────────────────────────────────
async function searchTeam(slot) {
  const query  = document.getElementById(`search${slot}`).value.trim();
  const grid   = document.getElementById(`grid${slot}`);
  const status = document.getElementById(`searchStatus${slot}`);

  grid.innerHTML = "";
  clearTimeout(searchTimers[slot]);

  if (query.length < 2) {
    status.textContent = "";
    return;
  }

  status.textContent = "Buscando...";

  searchTimers[slot] = setTimeout(async () => {
    try {
      const res  = await fetch(API + encodeURIComponent(query));
      const data = await res.json();
      const teams = data.teams;

      grid.innerHTML = "";

      if (!teams || teams.length === 0) {
        status.textContent = "Nenhum time encontrado";
        return;
      }

      const filtered = teams
        .filter(t => t.strBadge)
        .sort((a, b) => a.strTeam.localeCompare(b.strTeam));

      status.textContent = `${filtered.length} time(s) encontrado(s)`;

      filtered.forEach(t => {
        const team = {
          name: t.strTeam,
          logo: t.strBadge
        };
        const btn = document.createElement("button");
        btn.className = "team-btn";
        btn.dataset.name = team.name;
        btn.innerHTML = `<img src="${team.logo}" alt="${team.name}" onerror="this.style.display='none'" />${team.name}`;
        btn.onclick = () => selectTeam(slot, team, btn, grid);
        grid.appendChild(btn);
      });

    } catch (e) {
      status.textContent = "Erro na busca. Tente novamente.";
    }
  }, 500);
}

function selectTeam(slot, team, btnEl, grid) {
  selected[`team${slot}`] = team;

  grid.querySelectorAll(".team-btn").forEach(b => b.classList.remove("active"));
  btnEl.classList.add("active");

  document.getElementById(`selected${slot}`).innerHTML =
    `<img src="${team.logo}" alt="${team.name}" />${team.name}`;

  updateLivePreview(slot, team);

  const btn = document.getElementById("generateBtn");
  if (selected.team1 && selected.team2) {
    btn.disabled = false;
    btn.classList.add("ready");
  }
}

// ── Live Preview ───────────────────────────────────────
function updateLivePreview(slot, team) {
  const logo        = document.getElementById(`liveLogo${slot}`);
  const placeholder = document.getElementById(`livePlaceholder${slot}`);
  const name        = document.getElementById(`liveName${slot}`);

  if (team) {
    logo.src = team.logo;
    logo.style.display = "block";
    placeholder.style.display = "none";
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
