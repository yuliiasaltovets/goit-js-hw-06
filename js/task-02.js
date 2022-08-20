const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulELement = document.querySelector('ul');

const elements = [];

for (let i = 0; i < ingredients.length; i += 1) {
  const ing = ingredients[i];

  const liEl = document.createElement('li');
  liEl.textContent = ing;
  liEl.classList.add('item');

  elements.push(liEl);
}
 
ulELement.append(...elements);
console.log(ulELement);