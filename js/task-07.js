const inputElem = document.querySelector("#font-size-control");
const spanElem = document.querySelector("#text");

inputElem.addEventListener("input", (e) => {
  spanElem.style.fontSize = e.target.value + "px";
});
