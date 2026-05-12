// ⛔ redirect on refresh 
// if (performance.getEntriesByType("navigation")[0]?.type === "reload") {
//   window.location.replace("index.html");
// }

function loadVideo(videoUrl, frameElement) {
  const container = frameElement.parentElement;
  
  if (videoUrl.includes('hotstar.com')) {
    container.innerHTML = `
      <div style="display:flex; align-items:center; justify-content:center; height:400px; background:#1a1a1a; border-radius:8px;">
        <button onclick="window.open('${videoUrl}', '_blank')" 
          style="padding:15px 30px; background:#3df2e0; color:#000; border:none; border-radius:8px; cursor:pointer; font-weight:bold; font-size:16px;">
          ▶ Watch on Hotstar
        </button>
      </div>
    `;
  } else {
    container.innerHTML = '';
    const newFrame = document.createElement('iframe');
    newFrame.id = 'videoFrame';
    newFrame.src = videoUrl;
    newFrame.style.width = '100%';
    newFrame.style.height = '400px';
    newFrame.style.border = 'none';
    newFrame.style.borderRadius = '8px';
    container.appendChild(newFrame);
  }
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
  // Clear and reload iframe for Brightcove
  frame.src = '';
  setTimeout(() => {
    loadVideo(ep.video, frame);
    frame.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }, 50);
};

      list.appendChild(row);
    });

    // autoplay first day
    if (match.highlights[0]) {
  loadVideo(match.highlights[0].video, frame);
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
    // Redirect to index without query params, welcome will show normally
  });
}
