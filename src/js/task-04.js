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
