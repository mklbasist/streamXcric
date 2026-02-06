// ===============================
// GET SERIES ID FROM URL
// ===============================
const params = new URLSearchParams(window.location.search);
const seriesId = params.get("id");

// ===============================
// ELEMENTS
// ===============================
const titleEl = document.getElementById("seriesTitle");
const dropdown = document.getElementById("matchDropdown");
const iframe = document.getElementById("highlightFrame");

// ===============================
// LOAD SERIES DATA
// ===============================
fetch("./testSeries.json")
  .then(res => res.json())
  .then(data => {
    const series = data.find(s => s.id === seriesId);

    if (!series) {
      titleEl.innerText = "Series not found";
      return;
    }

    titleEl.innerText = series.title;

    // populate matches
    series.matches.forEach(match => {
      const option = document.createElement("option");
      option.value = match;
      option.innerText = match;
      dropdown.appendChild(option);
    });
  });

// ===============================
// HANDLE MATCH CHANGE
// ===============================
dropdown.addEventListener("change", () => {
  const match = dropdown.value;

  if (!match) {
    iframe.src = "";
    return;
  }

  // placeholder for now
  iframe.src = "https://www.youtube.com/embed/dQw4w9WgXcQ";
});
