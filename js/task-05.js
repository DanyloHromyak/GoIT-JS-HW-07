const nameInputElem = document.querySelector("#name-input");
const nameOutputElem = document.querySelector("#name-output");

nameInputElem.addEventListener("input", (e) => {
  if (e.target.value !== "") {
    nameOutputElem.textContent = e.target.value;
  } else {
    nameOutputElem.textContent = "незнайомець";
  }
});
