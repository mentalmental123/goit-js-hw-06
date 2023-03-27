const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


function task2() {
  const mainList = document.querySelector('#ingredients');
  const items = [];
    ingredients.forEach(item => {
        const itemLi = document.createElement('li');
        itemLi.textContent = item;
        itemLi.classList.add('item');
        items.push(itemLi);
    })
      mainList.append(...items);
}
task2();