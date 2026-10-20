let container = document.querySelector(".container");
let x = 1;
while (x <= 256) {
  let square = document.createElement("div");
  square.classList.add("square");
  container.appendChild(square);
  x++;
}
let btn = document.createElement("button");
let squares = document.querySelectorAll(".square");

for (const s of squares) {
  s.addEventListener("mouseenter", () => (s.style.backgroundColor = "pink"));
}
