document.addEventListener("DOMContentLoaded", () => {
  const title = document.getElementById("seriesTitle");
  const frame = document.getElementById("highlightFrame");
  const matchBar = document.getElementById("matchBar");

  fetch("./data/testSeries.json")
    .then(res => res.json())
    .then(data => {
      if (!data.series || !data.series.length) return;

      const series = data.series[0];
      title.textContent = series.name || "Series Highlights";

      if (!series.matches || !series.matches.length) return;

      series.matches.forEach((match, index) => {
        const btn = document.createElement("button");
        btn.className = "match-btn";
        btn.textContent =
          match.match || match.title || `Match ${index + 1}`;

        if (index === 0) btn.classList.add("active");

        btn.addEventListener("click", () => {
          document
            .querySelectorAll(".match-btn")
            .forEach(b => b.classList.remove("active"));

          btn.classList.add("active");
          frame.src = match.highlight || "";
        });

        matchBar.appendChild(btn);

        // auto-load first video if exists
        if (index === 0 && match.highlight) {
          frame.src = match.highlight;
        }
      });
    })
    .catch(err => {
      console.error(err);
      title.textContent = "Failed to load series";
    });
});
