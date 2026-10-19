let container = document.querySelector(".container");
let x = 1;
while (x <= 256) {
  let square = document.createElement("div");
  square.classList.add("square");
  container.appendChild(square);
  x++;
}
