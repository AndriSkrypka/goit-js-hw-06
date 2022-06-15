const validationEl = document.querySelector("#validation-input");

const validationLength = Number(validationEl.getAttribute("data-length"));
console.log(validationLength);
validationEl.addEventListener("blur", () => {
  if (validationEl.value.length === validationLength) {
    validationEl.classList.add("valid");
    validationEl.classList.remove("invalid");
    return;
  } else {
    validationEl.classList.add("invalid");
    validationEl.classList.remove("valid");
  }
});
