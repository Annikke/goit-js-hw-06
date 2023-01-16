function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector(`body`);
const changeColorBtn = document.querySelector(`.change-color`);
const newColor = document.querySelector(`.color`);

changeColorBtn.addEventListener(`click`, changeColor);

function changeColor (event) {
  body.style.backgroundColor = getRandomHexColor();
  newColor.textContent = getRandomHexColor();
}