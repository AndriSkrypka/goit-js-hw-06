const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingridientNew = ingredients.map((ingredient) => {
  const ingredientItem = document.createElement("li");
  ingredientItem.textContent = ingredient;
  ingredientItem.classList.add("item");
  // console.log(ingredientItem);
  return ingredientItem;
});
const ingredientList = document.querySelector("#ingredients");
ingredientList.append(...ingridientNew);
