// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).

const categori = document.querySelector("#categories");
console.log("Number of categories:", categori.children.length);

const elementsCategories = [...categori.children];
// console.log(elementsCategories);

elementsCategories.forEach((element) => {
  console.log("Category:", element.children[0].textContent);
  console.log("Elements:", element.children[1].children.length);
});
