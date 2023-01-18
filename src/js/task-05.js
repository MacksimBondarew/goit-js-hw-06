const onInput = document.querySelector('#name-input');
const onOutput = document.querySelector("#name-output");
onInput.addEventListener("input", (event) => {
    onOutput.textContent = event.currentTarget.value;
    if (event.currentTarget.value === ' ') {
        onInput.textContent = 'Anonymous'
    }
});