const navEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${navEl.length}`);

const navElCategories = [...navEl].map(categories => `Category: ${categories.children[0].textContent}
Elements: ${categories.children[1].children.length}`)

.join("\n");
console.log(navElCategories);

