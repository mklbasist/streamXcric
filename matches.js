let matches = [];

// ===============================
// STATE
// ===============================
let activeYear = null;
let activeTeam = null;

// ===============================
// RESTORE ARCHIVE STATE (BACK FROM SERIES PAGE)
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  const savedYear = sessionStorage.getItem("activeYear");
  const savedTeam = sessionStorage.getItem("activeTeam");

  if (savedYear) {
    activeYear = Number(savedYear);

    // activate year button
    const yearBtn = document.querySelector(
      `.year-btn[data-year="${activeYear}"]`
    );
    if (yearBtn) yearBtn.classList.add("active");
  }

  if (savedTeam) {
    activeTeam = savedTeam;

    const teamBtn = document.querySelector(
      `.team-btn[data-team="${activeTeam}"]`
    );
    if (teamBtn) teamBtn.classList.add("active");
  }

  if (activeYear) {
    renderMatches();
  }
});

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
      ) return true;

      return false;
    });
  }

  if (!filtered.length) {
    container.innerHTML =
      `<p class="archive-placeholder">No matches found</p>`;
    return;
  }

  filtered.forEach(series => {
    const flags = getFlagsFromTitle(series.title);

    const card = document.createElement("div");
    card.className = "series-card";

    card.innerHTML = `
      <div class="flag-poster">
        <div class="flag left" style="background-image:url('${flags.left}')"></div>
        <div class="flag right" style="background-image:url('${flags.right}')"></div>

        <div class="flag-overlay">
          <h4>${series.title}</h4>
          <span>${series.year}</span>
        </div>
      </div>
    `;

      // 🔥 Page-06-02-2026
card.addEventListener("click", () => {
  sessionStorage.setItem("activeYear", activeYear);
  sessionStorage.setItem("activeTeam", activeTeam || "");

  window.location.href = `series.html?id=${encodeURIComponent(series.title)}`;
});


    container.appendChild(card);
  });
}

// ===============================
// FLAG DETECTION LOGIC
// ===============================
function getFlagsFromTitle(title) {
  const t = title.toLowerCase();

  const map = {
    india: "in",
    england: "gb",
    australia: "au",
    pakistan: "pk",
    "south africa": "za",
    "new zealand": "nz",
    "sri lanka": "lk",
    bangladesh: "bd",
    ireland: "ie",
    zimbabwe: "zw",
    "west indies": "jm"
  };

  let found = [];

  Object.keys(map).forEach(team => {
    if (t.includes(team)) found.push(map[team]);
  });

  // Ashes
  if (t.includes("ashes")) found = ["gb", "au"];

  // fallback handling
  if (found.length === 1) found.push(found[0]);
  if (!found.length) found = ["in", "au"];

  return {
    left: `https://flagcdn.com/w320/${found[0]}.png`,
    right: `https://flagcdn.com/w320/${found[1]}.png`
  };
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

// ===============================
// Back button logic
// ===============================

document.addEventListener("DOMContentLoaded", () => {
  const openPage = sessionStorage.getItem("openPage");
  const savedYear = sessionStorage.getItem("activeYear");
  const savedTeam = sessionStorage.getItem("activeTeam");

  if (openPage === "testArchive") {
    showPage("testArchive"); // this already exists in your site

    if (savedYear) {
      activeYear = Number(savedYear);
    }

    if (savedTeam) {
      activeTeam = savedTeam || null;
    }

    renderMatches(); // re-render cards
  }
});
