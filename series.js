if (!document.referrer.includes("index.html")) {
  window.location.replace("index.html");
}

document.addEventListener("DOMContentLoaded", () => {
  const frame = document.getElementById("videoFrame");
  const testSelect = document.getElementById("testSelect");
  const list = document.getElementById("episodesList");

  // Default video
  frame.src = "https://www.youtube.com/embed/5TOJpz_EYAw";

  // Fake data (DESIGN ONLY)
  const tests = {
    "1st Test": [
      { day: "Day 1 Highlights", duration: "10 min" },
      { day: "Day 2 Highlights", duration: "11 min" },
      { day: "Day 3 Highlights", duration: "9 min" },
      { day: "Day 4 Highlights", duration: "12 min" },
      { day: "Day 5 Highlights", duration: "8 min" }
    ]
  };

  function loadTest(testName) {
    list.innerHTML = "";

    tests[testName].forEach((ep, i) => {
      const row = document.createElement("div");
      row.className = "episode-row";

      row.innerHTML = `
        <div class="ep-thumb">
          <span>${i + 1}</span>
        </div>
        <div class="ep-info">
          <h4>${ep.day}</h4>
          <span>${ep.duration}</span>
        </div>
      `;

      row.onclick = () => {
        frame.src = frame.src; // placeholder
      };

      list.appendChild(row);
    });
  }

  // initial load
  loadTest("1st Test");

  testSelect.addEventListener("change", () => {
    loadTest(testSelect.value);
  });
});

document.getElementById("seriesBackBtn").addEventListener("click", () => {
  window.location.href = "index.html"; // or your cards page
});

