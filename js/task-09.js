function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const widget = document.querySelector(`.widget`);
const changeColorBtn = document.querySelector(`.change-color`);

changeColorBtn.addEventListener(`click`, changeColor);

function changeColor (event) {
  widget.style.backgroundColor = getRandomHexColor();
}