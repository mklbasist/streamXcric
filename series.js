// ⛔ redirect on refresh 
if (performance.getEntriesByType("navigation")[0]?.type === "reload") {
  window.location.replace("index.html");
}

document.addEventListener("DOMContentLoaded", async () => {
  const frame = document.getElementById("videoFrame");
  const testSelect = document.getElementById("testSelect");
  const list = document.getElementById("episodesList");

  const params = new URLSearchParams(window.location.search);
  const seriesTitle = params.get("id");
  if (!seriesTitle) return;

  let data;
  try {
    const res = await fetch("./data/testSeries.json");
    data = await res.json();
  } catch {
    console.error("JSON load failed");
    return;
  }

  const series = data.find(s => s.id === seriesTitle);
  if (!series || !series.matches) return;

  // Populate Test dropdown
  testSelect.innerHTML = "";
  series.matches.forEach((match, i) => {
    const opt = document.createElement("option");
    opt.value = i;
    opt.textContent = match.name;
    testSelect.appendChild(opt);
  });

  function loadMatch(index) {
    list.innerHTML = "";
    const match = series.matches[index];
    if (!match || !match.highlights) return;

    match.highlights.forEach((ep, i) => {
      const row = document.createElement("div");
      row.className = "episode-row";

      row.innerHTML = `
        <div class="ep-thumbnail">
          <img src="${ep.thumbnail}" alt="">
        </div>
        <div class="ep-info">
          <h4>${ep.day}</h4>
          <span>Watch</span>
        </div>
      `;

      row.onclick = () => {
        frame.src = ep.video + "?autoplay=1&modestbranding=1&rel=0";
      };

      list.appendChild(row);
    });

    // autoplay first day
    if (match.highlights[0]) {
      frame.src = match.highlights[0].video;
    }
  }

  loadMatch(0);

  testSelect.addEventListener("change", () => {
    loadMatch(Number(testSelect.value));
  });
});

// Back button
const backBtn = document.getElementById("seriesBackBtn");
if (backBtn) {
  backBtn.addEventListener("click", () => {
    window.location.href = "index.html";
  });
}
