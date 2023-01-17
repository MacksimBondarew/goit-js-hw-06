const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const onList = document.querySelector('#ingredients');
for (let ingredient of ingredients) {
  const listItem = document.createElement('li');
  listItem.className = 'item';
  listItem.textContent = ingredient;
  onList.append(listItem);
};
