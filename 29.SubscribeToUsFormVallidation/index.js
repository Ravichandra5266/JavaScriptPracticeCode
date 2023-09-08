let form = document.querySelector('form');
let nameInput = document.getElementById('name');
let emailInput = document.getElementById('email');
let nameError = document.getElementById('nameError');
let emailError = document.getElementById('emailError');

let nameValue = '';
let emailValue = '';

function checkForm(event) {
  event.preventDefault();
  nameValue = nameInput.value;
  emailValue = emailInput.value;
  if (nameValue !== '' && emailValue !== '') {
    emailError.textContent = '';
    nameError.textContent = '';
  } else {
    emailError.textContent = 'Required*';
    nameError.textContent = 'Required*';
  }
}
form.addEventListener('submit', checkForm);

function checkName(event) {
  if (nameValue === '') {
    nameError.textContent = 'Required*';
  } else {
    nameError.textContent = '';
  }
}
nameInput.addEventListener('mouseout', checkName);

function checkEmail(event) {
  if (nameValue === '') {
    emailError.textContent = 'Required*';
  } else {
    emailError.textContent = '';
  }
}
emailInput.addEventListener('mouseout', checkEmail);
