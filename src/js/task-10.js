const onInput = document.querySelector('#controls>input')
const onButtonCreate = document.querySelector('button[data-create]')
const onButtonDestroy = document.querySelector('button[data-destroy]')
const onBox = document.querySelector('#boxes')

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}
const createBoxes = amount => {
  const baseObject = [];
  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div')
    div.style.width = `${10 + 30 * i}px`;
    div.style.height = `${10 + 30 * i}px`;
    div.style.backgroundColor = getRandomHexColor();
    baseObject.push(div);
  }
  return baseObject;
}
const destroyBoxes = () => {
  onBox.innerHTML = '';
}
onButtonCreate.addEventListener('click', () => {
  let addToBox = createBoxes(onInput.value)
  onBox.append(...addToBox);
})
onButtonDestroy.addEventListener('click', () => {
	destroyBoxes()
})