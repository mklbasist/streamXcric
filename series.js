document.addEventListener("DOMContentLoaded", async () => {
  const frame = document.getElementById("videoFrame");
  const testSelect = document.getElementById("testSelect");
  const list = document.getElementById("episodesList");

  // keep default frame (no autoplay chaos)
  frame.src = "";

  const params = new URLSearchParams(window.location.search);
  const seriesTitle = params.get("id");
  if (!seriesTitle) return;

  let data;
  try {
    const res = await fetch("./data/testSeries.json");
    data = await res.json();
  } catch (e) {
    console.error("Failed to load JSON");
    return;
  }

  const series = data.find(s => s.title === seriesTitle);
  if (!series || !Array.isArray(series.matches)) return;

  // 🔽 Populate Test dropdown
  testSelect.innerHTML = "";
  series.matches.forEach((match, i) => {
    const opt = document.createElement("option");
    opt.value = i;
    opt.textContent = match.name;
    testSelect.appendChild(opt);
  });

  function loadMatch(index) {
    list.innerHTML = "";
    frame.src = "";

    const match = series.matches[index];
    if (!match || !Array.isArray(match.highlights)) return;

    match.highlights.forEach((ep, i) => {
      const row = document.createElement("div");
      row.className = "episode-row";

      row.innerHTML = `
        <div class="ep-thumb">
          <img src="${ep.thumbnail}" alt="">
        </div>
        <div class="ep-info">
          <h4>${ep.day}</h4>
          <span>${ep.duration || ""}</span>
        </div>
      `;

      row.addEventListener("click", () => {
        frame.src = ep.video;
      });

      list.appendChild(row);
    });
  }

  // load first test only (NO autoplay)
  loadMatch(0);

  testSelect.addEventListener("change", () => {
    loadMatch(testSelect.value);
  });
});

// Back button (unchanged, simple, safe)
const backBtn = document.getElementById("seriesBackBtn");
if (backBtn) {
  backBtn.addEventListener("click", () => {
    window.location.href = "index.html";
  });
}
