// ⛔ If user refreshes series page, send back to main
if (performance.getEntriesByType("navigation")[0]?.type === "reload") {
  window.location.replace("index.html");
}

document.addEventListener("DOMContentLoaded", async () => {
  const frame = document.getElementById("videoFrame");
  const testSelect = document.getElementById("testSelect");
  const list = document.getElementById("episodesList");

  // fallback video (won't break)
  frame.src = "https://www.youtube.com/embed/5TOJpz_EYAw";

  // ✅ get series title from card click
  const params = new URLSearchParams(window.location.search);
  const seriesTitle = params.get("id");

  if (!seriesTitle) return;

  let data;
  try {
    const res = await fetch("./data/testSeries.json");
    data = await res.json();
  } catch (e) {
    console.error("Failed to load testSeries.json");
    return;
  }

  // ✅ find selected series
  const series = data.find(s => s.title === seriesTitle);
  if (!series || !series.tests) return;

  // 🔽 populate Test dropdown
  testSelect.innerHTML = "";
  series.tests.forEach((test, i) => {
    const opt = document.createElement("option");
    opt.value = i;
    opt.textContent = test.name;
    testSelect.appendChild(opt);
  });

  // 🎥 load highlights for selected test
  function loadTest(index) {
    list.innerHTML = "";
    const test = series.tests[index];
    if (!test || !test.highlights) return;

    test.highlights.forEach((ep, i) => {
      const row = document.createElement("div");
      row.className = "episode-row";

      row.innerHTML = `
        <div class="ep-thumb">
          <img src="${ep.thumb}" alt="">
        </div>
        <div class="ep-info">
          <h4>${ep.day}</h4>
          <span>Highlights</span>
        </div>
      `;

      row.onclick = () => {
        frame.src = ep.video;
      };

      list.appendChild(row);
    });

    // autoplay first highlight
    if (test.highlights[0]) {
      frame.src = test.highlights[0].video;
    }
  }

  // initial load
  loadTest(0);

  testSelect.addEventListener("change", () => {
    loadTest(testSelect.value);
  });
});

// ⬅ Back button (unchanged behavior)
const backBtn = document.getElementById("seriesBackBtn");
if (backBtn) {
  backBtn.addEventListener("click", () => {
    window.location.href = "index.html";
  });
}
