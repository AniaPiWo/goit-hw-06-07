const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatoes',
  'Greens',
  'Spices',
];

const ingredientsList = document.querySelector('#ingredients');
ingredients.forEach(ingredient => {
  const item = document.createElement('li');
  item.textContent = ingredient;
  item.classList.add('item');
  ingredientsList.append(item);
});
