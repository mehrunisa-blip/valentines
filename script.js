lights.onclick = () => lights.classList.toggle("pink-glow");

let lighterOpen = false;
lighter.onclick = () => {
  lighter.src = lighterOpen
    ? "assets/images/lighter-closed.png"
    : "assets/images/lighter-open.png";
  lighterOpen = !lighterOpen;
};

const letter = document.getElementById("letter");
const envelopeImg = document.getElementById("envelopeImg");

envelopeImg.onclick = () => {
  envelopeImg.src = envelopeImg.src.includes("closed")
    ? "assets/images/envelope-open.png"
    : "assets/images/envelope-closed.png";

  letter.classList.toggle("show");
};

let locketOpen = false;
locket.onclick = () => {
  locket.src = locketOpen
    ? "assets/images/locket-closed.png"
    : "assets/images/locket-open.png";
  locketOpen = !locketOpen;
};

let catsKiss = false;
cats.onclick = () => {
  cats.src = catsKiss
    ? "assets/images/cats-apart.png"
    : "assets/images/cats-kiss.png";
  catsKiss = !catsKiss;
};

play.onclick = () => song.play();
pause.onclick = () => song.pause();
stop.onclick = () => {
  song.pause();
  song.currentTime = 0;
};

const photos = [
  "assets/photos/1.jpg",
  "assets/photos/2.jpg",
  "assets/photos/3.jpg"
];

let index = 0;

camera.onclick = () => {
  gallery.style.display = "flex";
  photo.src = photos[index];
};

next.onclick = () => {
  index = (index + 1) % photos.length;
  photo.src = photos[index];
};

prev.onclick = () => {
  index = (index - 1 + photos.length) % photos.length;
  photo.src = photos[index];
};

closeGallery.onclick = () => gallery.style.display = "none";

kiss.onclick = () => {
  for (let i = 0; i < 3; i++) {
    const mark = document.createElement("img");
    mark.src = "assets/images/kiss.png";
    mark.className = "kiss-mark";
    mark.style.left = Math.random() * 80 + "px";
    mark.style.top = Math.random() * 80 + "px";
    mark.style.width = 30 + Math.random() * 40 + "px";

    kiss.parentElement.appendChild(mark);
    setTimeout(() => mark.remove(), 2000);
  }
};
