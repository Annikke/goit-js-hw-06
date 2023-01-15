const textInput = document.getElementById(`validation-input`);
const dtLength = Number(textInput.dataset.length);

textInput.addEventListener("blur", (event) => {
    if (event.currentTarget.value.length !== dtLength) {
        textInput.classList.add(`invalid`);        
    } else {
        textInput.classList.replace(`invalid`, `valid`);
    }
});