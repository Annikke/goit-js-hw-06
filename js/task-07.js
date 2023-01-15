let input = document.getElementById(`font-size-control`);
const output = document.getElementById(`text`);

input.oninput = () => {
   output.style.fontSize = input.value + `px`;
}

