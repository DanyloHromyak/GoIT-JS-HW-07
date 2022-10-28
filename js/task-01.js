const categories = document.querySelectorAll(".item")

console.log(`У списку ${categories.length} категорії.`)

categories.forEach(category => {
  const title = category.querySelector("h2").textContent
  console.log(title)

  const childListCount = category.querySelector("ul").children.length;
  console.log(
    `Категорія: ${title}
Кількість елементів: ${childListCount}`)
})