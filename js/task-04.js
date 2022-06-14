const counterButton = {
  increment: document.querySelector('[data-action="increment"]'),
  decrement: document.querySelector('[data-action="decrement"]'),
  span: document.querySelector("#value"),
};

let counterValue = 0;

const increment = () => {
  counterValue += 1;
  counterButton.span.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;
  counterButton.span.textContent = counterValue;
};

counterButton.increment.addEventListener("click", increment);
counterButton.decrement.addEventListener("click", decrement);
