
const numberOfCategories = categories.querySelectorAll('.item');
console.log(`Number of categories: ${numberOfCategories.length}`);

numberOfCategories.forEach((category) => {
    console.log(`Category: ${category.firstElementChild.textContent}`);
    console.log(`Elements: ${category.lastElementChild.children.length}`);
});