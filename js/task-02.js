const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("#ingredients");

const markup = (item) => {
  const element = document.createElement('li');
  element.textContent = item;
  return element;
}
const createMarkup = ingredients.map(markup);

ingredientsList.append(...createMarkup);
console.log(ingredientsList);