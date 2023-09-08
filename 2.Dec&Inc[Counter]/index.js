let countValue = document.getElementById('count-value');
let incBtn = document.getElementById('inc');
let decBtn = document.getElementById('dec');
let rstBtn = document.getElementById('rst');

let updatedValue = parseInt(countValue.textContent);

incBtn.addEventListener('click', () => {
  updatedValue += 1;
  countValue.textContent = updatedValue;
  if (updatedValue > 0) {
    countValue.style.color = 'green';
  } else if (updatedValue === 0) {
    countValue.style.color = 'white';
  }
});
decBtn.addEventListener('click', () => {
  updatedValue -= 1;
  countValue.textContent = updatedValue;
  if (updatedValue < 0) {
    countValue.style.color = 'red';
  } else if (updatedValue === 0) {
    countValue.style.color = 'white';
  }
});

rstBtn.addEventListener('click', () => {
  updatedValue = 0;
  countValue.textContent = updatedValue;
  countValue.style.color = 'white';
});
