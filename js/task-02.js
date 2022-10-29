const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];

const list = document.querySelector("#ingredients")
const array = [];

ingredients.forEach(ingredient => {
  item = document.createElement("li");
  item.textContent = ingredient;
  array.push(item)
})

list.append(...array)


