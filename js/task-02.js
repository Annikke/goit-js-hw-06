const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.getElementById(`ingredients`);
for (const ingredient of ingredients) {
  const ingredientsElem = document.createElement(`li`);
  ingredientsElem.textContent = ingredient;
  ingredientsList.appendChild(ingredientsElem);
}