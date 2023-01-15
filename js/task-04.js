const counterValue = document.getElementById(`value`);
const decrementBtn = document.querySelector('#counter button[data-action="decrement"]');
const incrementBtn = document.querySelector('#counter button[data-action="increment"]');

const counter = {
    value: 0,
    decrement() {
        this.value -= 1;
    },
    increment() {
        this.value += 1;
    },
}

decrementBtn.addEventListener(`click`, () => {
    counter.decrement();
    counterValue.textContent = counter.value;
});

incrementBtn.addEventListener(`click`, () => {
    counter.increment();
    counterValue.textContent = counter.value;
});