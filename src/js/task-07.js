const onInput = document.querySelector('#font-size-control');
const onText = document.querySelector('#text');
onInput.addEventListener('input', event => {
    onText.style.fontSize = `${event.currentTarget.value}px`;
})