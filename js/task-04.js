let counterValue = 0;

const spanValueElem = document.querySelector("#value");
const incrementElem = document.querySelector('[data-action="increment"');
const decrementElem = document.querySelector('[data-action="decrement"');

function increment() {
  counterValue++;
  spanValueElem.textContent = counterValue;
}

function decrement() {
  counterValue--;
  spanValueElem.textContent = counterValue;
}

incrementElem.addEventListener("click", increment);
decrementElem.addEventListener("click", decrement);
