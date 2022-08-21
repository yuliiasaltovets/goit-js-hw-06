

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulELement = document.querySelector('#ingredients');

const onIngredEl = ingredients.map(element => {
  const liElement = document.createElement('li');
  liElement.classList.add('item');
  liElement.textContent = element.textContent;

  return liElement;
});

console.log(onIngredEl);
ulELement.append(...onIngredEl);
