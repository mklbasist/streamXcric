/* ===============================
   Match Data (EASY TO EDIT)
================================ */

const MATCHES = [
  {
    year: "2026",
    teams: ["India", "Australia"],
    title: "IND vs AUS – Border Gavaskar Trophy"
  },
  {
    year: "2026",
    teams: ["India", "England"],
    title: "IND vs ENG – Test Series"
  },
  {
    year: "2026",
    teams: ["Pakistan", "Australia"],
    title: "PAK vs AUS – Test Series"
  },
  {
    year: "2025",
    teams: ["India", "South Africa"],
    title: "IND vs SA – Freedom Series"
  }
];

/* ===============================
   Archive Logic
================================ */

document.addEventListener("DOMContentLoaded", () => {

  const yearBtns = document.querySelectorAll(".year-btn");
  const teamBtns = document.querySelectorAll(".team-btn");
  const container = document.getElementById("matchesContainer");

  let selectedYear = null;
  let selectedTeam = null;

  /* Render matches */
  function renderMatches() {
    container.innerHTML = "";

    MATCHES.forEach(match => {
      if (match.year !== selectedYear) return;
      if (selectedTeam && !match.teams.includes(selectedTeam)) return;

      const card = document.createElement("div");
      card.className = "match-card";
      card.innerText = match.title;

      container.appendChild(card);
    });

    if (!container.innerHTML) {
      container.innerHTML =
        "<p class='archive-placeholder'>No matches found</p>";
    }
  }

  /* YEAR CLICK */
  yearBtns.forEach(btn => {
    btn.addEventListener("click", () => {

      yearBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      selectedYear = btn.textContent;

      // reset team filter
      teamBtns.forEach(t => t.classList.remove("active"));
      selectedTeam = null;

      renderMatches();
    });
  });

  /* TEAM CLICK (TOGGLE) */
  teamBtns.forEach(btn => {
    btn.addEventListener("click", () => {

      if (btn.classList.contains("active")) {
        btn.classList.remove("active");
        selectedTeam = null;
      } else {
        teamBtns.forEach(t => t.classList.remove("active"));
        btn.classList.add("active");
        selectedTeam = btn.textContent;
      }

      renderMatches();
    });
  });

  /* DEFAULT → LATEST YEAR */
  if (yearBtns.length) {
    yearBtns[0].classList.add("active");
    selectedYear = yearBtns[0].textContent;
    renderMatches();
  }
});
