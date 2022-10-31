const parentBox = document.querySelector("#boxes");

const quantityInput = document.querySelector("#controls input");
const buttonCreate = document.querySelector('[data-action="render"]');
const buttonDestroy = document.querySelector('[data-action="destroy"]');

const boxes = [];

quantityInput.addEventListener("keypress", (e) => {
  if (
    (e.key.length === 1 && e.key !== "." && isNaN(e.key) && !e.ctrlKey) ||
    (e.key === "." && e.target.value.toString().indexOf(".") > -1)
  ) {
    e.preventDefault();
  }
  // stackoverflow 🤙🏻
});

function createBoxes(amount) {
  amount = quantityInput.value;

  for (let i = 0; i < amount; i++) {
    if (boxes.length === 0) {
      boxes.push({ color: getRandomHexValue(), height: 30, width: 30 });
    } else {
      boxes.push({
        color: getRandomHexValue(),
        height: boxes[boxes.length - 1].height + 10,
        width: boxes[boxes.length - 1].width + 10,
      });
    }
  }
  console.log(boxes);
  addBoxes();
}

function destroyBoxes() {
  while (boxes.length > 0) {
    boxes.pop();
  }
  addBoxes();
}

function addBoxes() {
  boxes.forEach((box) => {
    parentBox.innerHTML += `<div style="background: ${box.color};width: ${box.width}px; height: ${box.height}px"></div>`;
  });
}

function getRandomHexValue() {
  return `rgb(${Math.floor(Math.random() * (256 - 0))}, ${Math.floor(
    Math.random() * (256 - 0)
  )}, ${Math.floor(Math.random() * (256 - 0))})`;
}

buttonCreate.addEventListener("click", createBoxes);
buttonDestroy.addEventListener("click", destroyBoxes);
