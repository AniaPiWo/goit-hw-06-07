const categories = document.querySelectorAll('#categories .element');
const categoryNames = document.querySelectorAll('#categories .element h2');

console.log(`Number of categories: ${categories.length}`);
categoryNames.forEach(element => {
  console.log(`Category: ${element.textContent}`);
  console.log(`Elements: ${element.nextElementSibling.children.length}`);
});
