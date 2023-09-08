let firstNumber = document.getElementById('first');
let secondNumber = document.getElementById('second');
let check = document.getElementById('checkSum');
let resetBtn = document.getElementById('reset');
let checkBtn = document.getElementById('check');
let result = document.getElementById('result');
let randomFirstNumber = '';
let randomSecondNumber = '';

function generateValues() {
  randomFirstNumber = Math.ceil(Math.random() * 100);
  randomSecondNumber = Math.ceil(Math.random() * 100);
  firstNumber.textContent = randomFirstNumber;
  secondNumber.textContent = randomSecondNumber;
  result.textContent = '';
  check.value = '';
}
resetBtn.addEventListener('click', generateValues);
generateValues();

checkBtn.addEventListener('click', () => {
  let checkValue = parseInt(check.value);
  let sum = randomFirstNumber + randomSecondNumber;
  if (checkValue === sum) {
    result.textContent = 'Sum Of Two' + ' ' + sum;
    result.style.color = 'green';
  } else {
    result.textContent = 'Omg! Wrong Pls Check Sum Of Two Values';
    result.style.color = 'red';
  }
});
