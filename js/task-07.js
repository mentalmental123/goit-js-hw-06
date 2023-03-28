function task7() {
  const input = document.querySelector('#font-size-control');
  const changeText = document.querySelector('#text');
  changeText.style.fontSize = `${input.value}px`;
  input.addEventListener('input', () => {
    changeText.style.fontSize = `${input.value}px`;
  })
  
}

task7();