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