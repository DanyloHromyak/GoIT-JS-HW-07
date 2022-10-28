const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];

const list = document.querySelector("#ingredients")

ingredients.forEach(ingredient => {
  item = document.createElement("li");
  item.textContent = ingredient;
  console.log(item)
  list.append(item)
})


