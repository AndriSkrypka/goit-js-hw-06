const body = document.querySelector("body");

const button = document.querySelector(".change-color");

const span = document.querySelector(".color");

button.addEventListener("click", testClick);

function testClick(event) {
  const color = getRandomHexColor();

  body.style.backgroundColor = color;

  span.textContent = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
