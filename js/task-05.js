function task5() {
  const input = document.querySelector('#name-input');
  const userName = document.querySelector('#name-output');
  input.addEventListener('input', accept);
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
