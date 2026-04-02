const TEAMS = [
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
];

let selected = { team1: null, team2: null };

function buildGrids() {
  ["grid1", "grid2"].forEach((gridId, idx) => {
    const grid = document.getElementById(gridId);
    grid.innerHTML = "";
    TEAMS.forEach(team => {
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
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = () => resolve(null);
    img.src = src;
  });
}

async function generateImage() {
  if (!selected.team1 || !selected.team2) return;

  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  // Dimensões fiéis à imagem de referência
  canvas.width = 520;
  canvas.height = 390;

  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const [img1, img2] = await Promise.all([
    loadImage(selected.team1.logo),
    loadImage(selected.team2.logo)
  ]);

  const logoSize = 90;   // tamanho dos escudos
  const vsGap   = 32;    // espaço total reservado para o "vs"
  const x1      = 258;   // início do logo 1 (pouco após o meio)
  const x2      = x1 + logoSize + vsGap;  // início do logo 2
  const y       = 95;    // distância do topo

  if (img1) ctx.drawImage(img1, x1, y, logoSize, logoSize);
  if (img2) ctx.drawImage(img2, x2, y, logoSize, logoSize);

  // "vs" centralizado no gap
  ctx.font = "bold 15px Arial";
  ctx.fillStyle = "#111111";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("vs", x1 + logoSize + vsGap / 2, y + logoSize / 2);

  document.getElementById("preview").style.display = "block";
}

function downloadImage() {
  const canvas = document.getElementById("canvas");
  const link = document.createElement("a");
  link.download = `${selected.team1.name}_vs_${selected.team2.name}.png`;
  link.href = canvas.toDataURL("image/png");
  link.click();
}

buildGrids();
