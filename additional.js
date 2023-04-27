document.addEventListener("click", () => {
  soundTag.play();
});

//change language
document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && event.altKey) {
      ukFlag.classList.toggle("flag_pol");
  }
});
let shiftPressed = false;
document.addEventListener("keydown", function (event) {
  if (event.shiftKey) {
      shiftPressed = true;
  }
});
document.addEventListener("keyup", function (event) {
  if (event.key === "Shift") {
      shiftPressed = false;
  }
});

//flags
const ukFlag = document.createElement("div");
ukFlag.setAttribute("class", "flag");

