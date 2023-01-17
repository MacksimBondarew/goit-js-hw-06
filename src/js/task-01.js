const listItem = document.querySelectorAll('.item');
console.log(`Number of categories: ${listItem.length}`);
listItem.forEach (item => {
    console.log(" ")
    console.log(`category: ${item.firstElementChild.textContent}`),
    console.log(`elements: ${item.lastElementChild.children.length}`)
})
