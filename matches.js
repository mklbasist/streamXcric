// ===============================
// MATCH DATA (clean)
// ===============================
const matches = [
  {
    year: 2026,
    team: "India",
    title: "India vs Australia – 1st Test",
  },
  {
    year: 2026,
    team: "India",
    title: "India vs England – 2nd Test",
  },
  {
    year: 2026,
    team: "Australia",
    title: "Australia vs Pakistan – 1st Test",
  },
  {
    year: 2025,
    team: "England",
    title: "The Ashes – 3rd Test",
  },
  {
    year: 2025,
    team: "India",
    title: "India vs South Africa – 2nd Test",
  },
];

// ===============================
// STATE
// ===============================
let activeYear = null;
let activeTeam = null;

// ===============================
// RENDER MATCHES
// ===============================
function renderMatches() {
  const container = document.getElementById("matchesContainer");
  container.innerHTML = "";

  let filtered = matches.filter(m => m.year === activeYear);

  if (activeTeam) {
    filtered = filtered.filter(
      m => m.team.toLowerCase() === activeTeam.toLowerCase()
    );
  }

  if (!filtered.length) {
    container.innerHTML = `
      <p class="archive-placeholder">
        No matches found
      </p>`;
    return;
  }

  filtered.forEach(match => {
    const card = document.createElement("div");
    card.className = "match-card";
    card.innerText = match.title;
    container.appendChild(card);
  });
}

// ===============================
// YEAR BUTTON LOGIC
// ===============================
document.querySelectorAll(".year-btn").forEach(btn => {
  btn.addEventListener("click", () => {
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
const yearButtons = [...document.querySelectorAll(".year-btn")];
const latestYearBtn = yearButtons.sort(
  (a, b) => b.dataset.year - a.dataset.year
)[0];

if (latestYearBtn) {
  latestYearBtn.click(); // 🔥 auto default
}
