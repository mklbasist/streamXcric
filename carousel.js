const track = document.querySelector(".carousel-track");

document.querySelector(".next").onclick = () => {
  track.scrollBy({ left: 300, behavior: "smooth" });
};

document.querySelector(".prev").onclick = () => {
  track.scrollBy({ left: -300, behavior: "smooth" });
};
