const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.getElementById(`ingredients`);

const ingredientsElem = ingredients.map(ingredient => `<li class='item'> ${ingredient}</li>`).join(' ');
ingredientsList.insertAdjacentHTML(`beforeend`, ingredientsElem);

// for (const ingredient of ingredients) {
//   const ingredientsElem = document.createElement(`li`);
//   ingredientsElem.textContent = ingredient;
//   ingredientsList.appendChild(ingredientsElem);
// }


