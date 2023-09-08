let checkBtn = document.getElementById('Check');
let userInputEl = document.getElementById('userInput');
let result = document.getElementById('result');

let randomNumber = Math.ceil(Math.random() * 100);

checkBtn.addEventListener('click', () => {
  let userInputNunmer = parseInt(userInputEl.value);

  if (userInputNunmer === randomNumber) {
    result.textContent = 'Congratulations! You got it right.';
    result.style.color = 'green';
  } else if (userInputNunmer > randomNumber) {
    result.textContent = 'Too High! Try Again..';
    result.style.color = 'red';
  } else if (userInputNunmer < randomNumber) {
    result.textContent = 'Too Low! Try Again.';
    result.style.color = 'red';
  } else {
    let promptValue = prompt('Enter Random Number');
    if (promptValue) {
      userInputEl.value = promptValue;
    } else {
      alert('You Didnt Enter Number');
    }
  }
});
