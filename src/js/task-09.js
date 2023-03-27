function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


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

task9();
