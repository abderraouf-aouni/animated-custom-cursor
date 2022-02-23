let cursor = document.querySelector(".cursor");
let links = document.querySelectorAll("nav a");

window.addEventListener("mousemove", moveCursor);

function moveCursor(e) {
  let mouseX = e.clientX - 20;
  let mouseY = e.clientY - 20;

  cursor.style.left = `${mouseX}px`;
  cursor.style.top = `${mouseY}px`;
}

links.forEach((link) => link.addEventListener("mouseenter", mouseInLink));
links.forEach((link) => link.addEventListener("mouseout", mouseOutLink));

function mouseInLink() {
  cursor.classList.add("round-cursor");
}
function mouseOutLink() {
  cursor.classList.remove("round-cursor");
}
