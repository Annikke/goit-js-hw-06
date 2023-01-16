const textInput = document.getElementById(`name-input`);
const output = document.getElementById(`name-output`);

textInput.addEventListener("input", (event) => {
  if (event.currentTarget.value !== '') {
    output.textContent = event.currentTarget.value;
  } else {
    output.textContent = 'Anonymous';
  }
});

