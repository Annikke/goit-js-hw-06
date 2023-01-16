const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.getElementById(`ingredients`);
const ingredientsElem = [];

for (const ingredient of ingredients) {
  const element = document.createElement(`li`);
  element.textContent = ingredient;
  element.classList.add('item');
  ingredientsElem.push(element);
}

ingredientsList.append(...ingredientsElem);
