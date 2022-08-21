


const navEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${navEl.length}`);

const navElCategories = navEl.forEach( function(categories) { console.log(`Category: ${categories.firstElementChild.textContent}
Elements: ${categories.lastElementChild.children.length}`)})


