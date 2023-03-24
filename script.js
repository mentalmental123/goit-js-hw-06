// task 1
 
function task1() {
const listItemValue = document.querySelectorAll('.item');
    // console.log(listItemValue);
    console.log(listItemValue.length);

    listItemValue.forEach(item => {
        console.log('Category ', item.querySelector('h2').textContent);
        console.log('Elements ',item.querySelectorAll('li').length);
    })
    
}
task1();

console.log("--------------------------");

// task2

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

function task2() {
    // console.log(itemLi);
    const mainList = document.querySelector('#ingredients');
    ingredients.forEach(item => {
        const itemLi = document.createElement('li');
        itemLi.textContent = item;
        // console.log(itemLi);
        itemLi.classList.add('item');
        mainList.append(itemLi);
    })
    

}

task2();


console.log("--------------------------");

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

function task3() {
  const mainList = document.querySelector('.gallery');
  
    const listItem =  images.map(image => 
       `<li class="gallery-item"><img src="${image.url}" alt="${image.alt}"></li>`
  ).join('');
  
console.log(listItem);

  mainList.innerHTML = listItem;
  
}


task3();

console.log("--------------------------");


// task4


