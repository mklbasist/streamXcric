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
    renderMatches();
  })
  .catch(err => {
    console.error("Failed to load series data", err);
  });

// ===============================
// RENDER MATCHES
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
    container.innerHTML = `<p class="archive-placeholder">No matches found</p>`;
    return;
  }

  filtered.forEach(series => {
    const card = document.createElement("div");
    card.className = "series-card";

    card.innerHTML = `
      <div class="poster">
        <img src="assets/posters/default.jpg" alt="${series.title}">
        <div class="overlay">
          <h4>${series.title}</h4>
          <span>${series.year}</span>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
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

  // reset team when year changes
  activeTeam = null;
  document.querySelectorAll(".team-btn")
    .forEach(t => t.classList.remove("active"));

  renderMatches();
});

// ===============================
// TEAM BUTTON LOGIC (toggle on/off)
// ===============================
document.querySelectorAll(".team-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const team = btn.dataset.team;

    if (activeTeam === team) {
      // unselect team
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
    (a, b) => b.dataset.year - a.dataset.year
  )[0];

  if (latestYearBtn) {
    latestYearBtn.click();
  }
}
