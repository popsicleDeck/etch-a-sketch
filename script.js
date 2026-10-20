let container = document.querySelector(".container");
let btn = document.querySelector("button");
function gridMaker() {
  let x = 1;
  while (x <= 256) {
    let square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
    x++;
  }
}
gridMaker();

function changeColor() {
  let squares = document.querySelectorAll(".square");
  for (const s of squares) {
    s.addEventListener("mouseenter", () => (s.style.backgroundColor = "pink"));
  }
}
changeColor();
function newGrid(usrInput) {
  let x = 1;
  while (x <= usrInput ** 2) {
    let square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
    x++;
  }
  changeColor();
}
btn.addEventListener("click", () => {
  let squares = document.querySelectorAll(".square");
  for (const s of squares) {
    s.remove();
  }
  let n = prompt("Please enter a number: ");
  while (n > 50) {
    n = prompt("Please reenter a number smaller than 50:");
  }
  newGrid(n);
});
