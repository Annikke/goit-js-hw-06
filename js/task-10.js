function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// const controls = document.getElementById(`controls`);
// const boxes = document.getElementById(`boxes`);
// const createBtn = document.querySelector(`#controls button[data-create]`);
// const destroyBtn = document.querySelector(`#controls button[data-destroy]`);
// const inputNumber = controls.firstElementChild;

// inputNumber.addEventListener("input", (event) => {
//   const amount = Number(event.currentTarget.value);
// });

// createBtn.addEventListener(`click`, createBoxes);

// function createBoxes(amount) {
//   const markup = [];
//   for (let i = 0; i < amount; i++) {
//     const box = `<div style='background-color: ${ getRandomHexColor()};
//     width: 30px; height: 30px;'></div>`;
//     markup.push(box).join(``);
//     
//   }

//   
// };

