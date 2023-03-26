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
  


  mainList.innerHTML = listItem;
  
}


task3();

console.log("--------------------------");


// task4

function task4() {
  const reduceButton = document.querySelector("button[data-action='decrement']")
  const increaseButton = document.querySelector("button[data-action='increment']")
  const counterDisplay = document.querySelector("#value");
  let counter = 0;
  reduceButton.addEventListener('click', minus);
  function minus(evt) {
    counter--;
    counterDisplay.textContent = counter;
  }
  increaseButton.addEventListener('click', add);

  function add(evt) {
    counter++;
    counterDisplay.textContent = counter;
  }
  
}

task4();


// task5

function task5() {
  const input = document.querySelector('#name-input');
  const userName = document.querySelector('#name-output');
  input.addEventListener('change', accept);
  function accept(evt) {
    if (input.value === '') {
       userName.textContent = "Anonymous";
    return 0;
  } else {
    userName.textContent = input.value;
  }
  }
 
}

task5();


// task 6

function task6() {
  const input = document.querySelector("#validation-input");
  const dataLength = input.dataset.length;
  input.addEventListener('blur', () => {
    if (input.value.length === Number(dataLength)) {
      input.classList.remove('invalid');
      input.classList.add('valid');
      return 0;
    } else {
      input.classList.remove('valid');
      input.classList.add('invalid');
    }
  })
}

task6();


// task7

function task7() {
  const input = document.querySelector('#font-size-control');
  const changeText = document.querySelector('#text');
  input.addEventListener('input', () => {
    changeText.style.fontSize = `${input.value}px`;
  })
  
}

task7();

// task8

function task8() {
  const form = document.querySelector('.login-form');
  form.addEventListener('submit', formSubmit);
  function formSubmit(evt) {
    evt.preventDefault();
    const { email, password }  = form.elements;

    if (email.value === '' || password.value === '') {
      return alert('Please fill all the fields!');
    }else{
      const User = {
        emailField: email.value,
        passwordField: password.value
      }
      console.log(User);
      evt.currentTarget.reset()
    }
  }
}

task8();

// task9

function task9() {
  const button = document.querySelector('.change-color');
  const colorText = document.querySelector('.color');
  const BODY = document.querySelector('body');
  button.addEventListener('click', colorChanger);
  function colorChanger(evt) {
    const hexColor = getRandomHexColor();
    BODY.style.backgroundColor = hexColor;
    colorText.textContent = hexColor;
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

task9();


// task10

function task10() {
  const form = document.querySelector('#controls');
  const input = form.querySelector('input');
  const createBtn = form.querySelector('button[data-create]')
  const destroyBtn = form.querySelector('button[data-destroy]')
  const boxContainer = document.querySelector('#boxes');

  console.log(input.value);

  createBtn.addEventListener('click', create);
  function create(evt) {
    if (input.value >= 1 && input.value <= 100) {
      createBoxes(input.value);
      return;
    } else {
      return alert('Enter value from 1 to 100 please')
    }
  }


  destroyBtn.addEventListener('click', () => {
    
    while (boxContainer.firstChild) {
      boxContainer.removeChild(boxContainer.firstChild);
    }
  })

  // create boxex
  function createBoxes(amount) {
    const boxes = [];
    let startSize = 30;
    let boxIndex = 1;
    
    for (let i = 0; i < amount; i++) {
      boxes.push(`<div style="text-align: center;margin: 5px 0; background-color: ${getRandomHexColor()}; width: ${startSize}px; height: ${startSize}px;">${boxIndex}</div>
    </div>`)
      // add
      startSize += 10;
      boxIndex++;
    }
    
    const boxList = boxes.join('');
    boxContainer.innerHTML = boxList;
  }

}

task10();