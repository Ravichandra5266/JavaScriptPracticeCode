let form = document.querySelector('form');
let Password = document.getElementById('Password');
let confirmPassword = document.getElementById('confirmPassword');
let msgError = document.getElementById('error');
let confirmPasswordError = document.getElementById('confirmPasswordError');
let PasswordError = document.getElementById('PasswordError');

function formCheck(event) {
  event.preventDefault();
  if (Password.value === '' && confirmPassword.value === '') {
    PasswordError.textContent = 'Required';
    confirmPasswordError.textContent = 'Required';
  } else if (Password.value !== confirmPassword.value) {
    msgError.textContent = 'Password & Confirm Password Should Be Same';
  } else {
    PasswordError.textContent = '';
    confirmPasswordError.textContent = '';
    msgError.textContent = 'Thank You! Your Password Changed';
    msgError.style.color = 'green';
  }
}

form.addEventListener('submit', formCheck);
