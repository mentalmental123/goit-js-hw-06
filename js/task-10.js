function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


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