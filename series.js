document.addEventListener("DOMContentLoaded", () => {
  const title = document.getElementById("seriesTitle");
  const dropdown = document.getElementById("matchDropdown");
  const frame = document.getElementById("highlightFrame");

  fetch("./data/testSeries.json")
    .then(res => {
      if (!res.ok) throw new Error("Failed to load testSeries.json");
      return res.json();
    })
    .then(data => {
      if (!data.series || !data.series.length) return;

      // For now, load first series only
      const series = data.series[0];

      title.textContent = series.name || "Series Highlights";

      if (!series.matches || !series.matches.length) return;

      series.matches.forEach((match, i) => {
        const opt = document.createElement("option");
        opt.value = match.highlight || "";
        opt.textContent =
          match.match || match.title || `Match ${i + 1}`;

        dropdown.appendChild(opt);
      });
    })
    .catch(err => {
      console.error(err);
      title.textContent = "Failed to load series";
    });

  dropdown.addEventListener("change", () => {
    const link = dropdown.value;
    frame.src = link || "";
  });
});
