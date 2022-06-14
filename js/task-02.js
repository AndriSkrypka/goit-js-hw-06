const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientList = document.querySelector("#ingredients");

const ingridientNew = ingredients.map((ingredient) => {
  const ingredientItem = document.createElement("li");
  ingredientItem.textContent = ingredient;
  ingredientItem.classList.add("item");
  // console.log(ingredientItem);
  ingredientList.append(ingredientItem);
});
