function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
console.log(getRandomHexColor());
const onNameColor = document.querySelector(".color");
const onButtonReplaceColor = document.querySelector('.change-color');
const onBodyChangeColor = document.querySelector('body');
console.log(onBodyChangeColor);
onButtonReplaceColor.addEventListener('click', buttonReplaceColor);
function buttonReplaceColor() {
  onBodyChangeColor.style.backgroundColor = getRandomHexColor();
  onNameColor.textContent = getRandomHexColor();
  console.log('click')
}