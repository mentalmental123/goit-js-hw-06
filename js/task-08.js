
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