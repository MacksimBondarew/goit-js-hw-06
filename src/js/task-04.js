let onCounterValue = document.querySelector("#value");
const onDecrement = document.querySelector('[data-action="decrement"]');
const onIncrement = document.querySelector('[data-action="increment"]');
let counterValue = 0;
const incrementClick = function () {
    counterValue += 1;
    onCounterValue.textContent = counterValue;
};
onIncrement.addEventListener("click", incrementClick);
const inDecrementClick = function () {
    counterValue -= 1;
    onCounterValue.textContent = counterValue;
};
onDecrement.addEventListener("click", inDecrementClick);