let matches = [];

// ===============================
// STATE
// ===============================
let activeYear = null;
let activeTeam = null;

// ===============================
// LOAD SERIES DATA
// ===============================
fetch("./data/testSeries.json")
  .then(res => res.json())
  .then(data => {
    matches = data;
    autoSelectLatestYear();
  })
  .catch(err => {
    console.error("Failed to load series data", err);
  });

// ===============================
// RENDER SERIES CARDS
// ===============================
function renderMatches() {
  const container = document.getElementById("matchesContainer");
  container.innerHTML = "";

  let filtered = matches.filter(m => m.year === activeYear);

  if (activeTeam) {
    filtered = filtered.filter(m => {
      const title = m.title.toLowerCase();
      const team = activeTeam.toLowerCase();

      if (title.includes(team)) return true;

      // Ashes support
      if (
        title.includes("ashes") &&
        (team === "england" || team === "australia")
      ) {
        return true;
      }

      return false;
    });
  }

  if (!filtered.length) {
    container.innerHTML = `
      <p class="archive-placeholder">No matches found</p>
    `;
    return;
  }

  filtered.forEach(series => {
    const card = document.createElement("div");
    card.className = "series-card";

    const bgClass = getTeamGradient(series.title);

    card.innerHTML = `
      <div class="series-bg ${bgClass}">
        <h4>${series.title}</h4>
        <span>${series.year}</span>
      </div>
    `;

    container.appendChild(card);
  });
}

// ===============================
// TEAM → GRADIENT MAPPING
// ===============================
function getTeamGradient(title) {
  const t = title.toLowerCase();

  if (t.includes("ashes")) return "bg-england bg-australia";

  if (t.includes("india")) return "bg-india";
  if (t.includes("england")) return "bg-england";
  if (t.includes("australia")) return "bg-australia";
  if (t.includes("pakistan")) return "bg-pakistan";
  if (t.includes("sri lanka")) return "bg-sri-lanka";
  if (t.includes("south africa")) return "bg-south-africa";
  if (t.includes("new zealand")) return "bg-new-zealand";
  if (t.includes("bangladesh")) return "bg-bangladesh";
  if (t.includes("ireland")) return "bg-ireland";
  if (t.includes("west indies")) return "bg-west-indies";
  if (t.includes("zimbabwe")) return "bg-zimbabwe";

  return "bg-default";
}

// ===============================
// YEAR BUTTON LOGIC
// ===============================
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".year-btn");
  if (!btn) return;

  document.querySelectorAll(".year-btn")
    .forEach(b => b.classList.remove("active"));

  btn.classList.add("active");
  activeYear = Number(btn.dataset.year);

  activeTeam = null;
  document.querySelectorAll(".team-btn")
    .forEach(t => t.classList.remove("active"));

  renderMatches();
});

// ===============================
// TEAM BUTTON LOGIC
// ===============================
document.querySelectorAll(".team-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const team = btn.dataset.team;

    if (activeTeam === team) {
      activeTeam = null;
      btn.classList.remove("active");
    } else {
      document.querySelectorAll(".team-btn")
        .forEach(t => t.classList.remove("active"));

      activeTeam = team;
      btn.classList.add("active");
    }

    renderMatches();
  });
});

// ===============================
// AUTO-SELECT LATEST YEAR
// ===============================
function autoSelectLatestYear() {
  const yearButtons = [...document.querySelectorAll(".year-btn")];

  const latestYearBtn = yearButtons.sort(
    (a, b) => Number(b.dataset.year) - Number(a.dataset.year)
  )[0];

  if (latestYearBtn) {
    latestYearBtn.click();
  }
}
