const inputElem = document.querySelector("#validation-input");
const dataSymbolCount = Number(inputElem.dataset.length);

function validClass() {
  inputElem.classList.remove("invalid");
  inputElem.classList.add("valid");
}

function invalidClass() {
  inputElem.classList.add("invalid");
  inputElem.classList.remove("valid");
}

inputElem.addEventListener("change", (e) => {
  e.target.value.length === dataSymbolCount ? validClass() : invalidClass();
});
