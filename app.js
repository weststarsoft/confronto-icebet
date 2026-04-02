const TEAMS = [
  { name: "Arsenal",           logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Arsenal_FC.svg/200px-Arsenal_FC.svg.png" },
  { name: "Aston Villa",       logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Aston_Villa_FC_crest_%282016%29.svg/200px-Aston_Villa_FC_crest_%282016%29.svg.png" },
  { name: "Bournemouth",       logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e5/AFC_Bournemouth_%282013%29.svg/200px-AFC_Bournemouth_%282013%29.svg.png" },
  { name: "Brentford",         logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Brentford_FC_crest.svg/200px-Brentford_FC_crest.svg.png" },
  { name: "Brighton",          logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Brighton_%26_Hove_Albion_logo.svg/200px-Brighton_%26_Hove_Albion_logo.svg.png" },
  { name: "Chelsea",           logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/200px-Chelsea_FC.svg.png" },
  { name: "Crystal Palace",    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/Crystal_Palace_FC_logo_%282022%29.svg/200px-Crystal_Palace_FC_logo_%282022%29.svg.png" },
  { name: "Everton",           logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7c/Everton_FC_logo.svg/200px-Everton_FC_logo.svg.png" },
  { name: "Fulham",            logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Fulham_FC_%28shield%29.svg/200px-Fulham_FC_%28shield%29.svg.png" },
  { name: "Ipswich Town",      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/43/Ipswich_Town.svg/200px-Ipswich_Town.svg.png" },
  { name: "Leicester City",    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2d/Leicester_City_crest.svg/200px-Leicester_City_crest.svg.png" },
  { name: "Liverpool",         logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/200px-Liverpool_FC.svg.png" },
  { name: "Manchester City",   logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/200px-Manchester_City_FC_badge.svg.png" },
  { name: "Manchester United", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/200px-Manchester_United_FC_crest.svg.png" },
  { name: "Newcastle",         logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Newcastle_United_Logo.svg/200px-Newcastle_United_Logo.svg.png" },
  { name: "Nottingham Forest", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e5/Nottingham_Forest_F.C._logo.svg/200px-Nottingham_Forest_F.C._logo.svg.png" },
  { name: "Southampton",       logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c9/FC_Southampton.svg/200px-FC_Southampton.svg.png" },
  { name: "Tottenham",         logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/Tottenham_Hotspur.svg/200px-Tottenham_Hotspur.svg.png" },
  { name: "West Ham",          logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/West_Ham_United_FC_logo.svg/200px-West_Ham_United_FC_logo.svg.png" },
  { name: "Wolves",            logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fc/Wolverhampton_Wanderers.svg/200px-Wolverhampton_Wanderers.svg.png" },
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

  // Update selected display
  const selEl = document.getElementById(`selected${slot}`);
  selEl.innerHTML = `<img src="${team.logo}" alt="${team.name}" />${team.name}`;

  // Highlight active button in this grid
  document.querySelectorAll(`#grid${slot} .team-btn`).forEach(btn => {
    btn.classList.toggle("active", btn.dataset.name === team.name);
  });

  // Enable generate button when both selected
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

  // Canvas dimensions matching reference image 3
  canvas.width = 500;
  canvas.height = 390;

  // White background
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, 500, 390);

  const [img1, img2] = await Promise.all([
    loadImage(selected.team1.logo),
    loadImage(selected.team2.logo)
  ]);

  const logoSize = 120;
  const centerY = canvas.height / 2;
  const gap = 44; // space for "vs"

  // Total width of the group: logo + gap + logo
  const groupW = logoSize + gap + logoSize;
  // Position group on right half of canvas (like reference)
  const groupStartX = (canvas.width - groupW) / 2 + 80;

  const x1 = groupStartX;
  const x2 = groupStartX + logoSize + gap;

  if (img1) ctx.drawImage(img1, x1, centerY - logoSize / 2, logoSize, logoSize);
  if (img2) ctx.drawImage(img2, x2, centerY - logoSize / 2, logoSize, logoSize);

  // "vs" label
  ctx.font = "bold 16px Arial";
  ctx.fillStyle = "#222222";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("vs", x1 + logoSize + gap / 2, centerY);

  document.getElementById("preview").style.display = "block";
}

function downloadImage() {
  const canvas = document.getElementById("canvas");
  const link = document.createElement("a");
  link.download = `${selected.team1.name}_vs_${selected.team2.name}.png`;
  link.href = canvas.toDataURL("image/png");
  link.click();
}

// Init
buildGrids();
