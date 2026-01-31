let selectedYear = 2026;

// YEAR CLICK
document.querySelectorAll(".year").forEach(y => {
  y.onclick = () => {
    document.querySelectorAll(".year").forEach(x => x.classList.remove("active"));
    y.classList.add("active");
    selectedYear = Number(y.dataset.year);
    document.getElementById("testResults").innerText =
      "Select a country to view matches";
  };
});

// MAP CLICK
document.getElementById("worldMap").addEventListener("load", () => {
  const svg = document.getElementById("worldMap").contentDocument;

  ["IN", "AU", "ENG", "SA", "NZ"].forEach(code => {
    const country = svg.getElementById(code);
    if (!country) return;

    country.style.cursor = "pointer";

    country.onclick = () => {
      showMatches(code);
    };
  });
});

function showMatches(countryCode) {
  const matches = testMatches.filter(
    m => m.year === selectedYear && m.country === countryCode
  );

  const box = document.getElementById("testResults");

  if (!matches.length) {
    box.innerHTML = "No Test matches found.";
    return;
  }

  box.innerHTML = matches.map(m => `
    <div style="margin-bottom:10px">
      <strong>${m.title}</strong><br>
      ${m.venue}<br>
      <em>${m.result}</em>
    </div>
  `).join("");
}
