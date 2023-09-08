let result = document.getElementById('result');
let tenSec = document.getElementById('10sec');
let thirtSec = document.getElementById('30sec');
let fortSec = document.getElementById('40sec');
let oneMin = document.getElementById('1min');

let value;
let clear;
tenSec.addEventListener('click', () => {
  clearInterval(clear);
  value = 10;
  clear = setInterval(() => {
    if (value > 0) {
      value -= 1;
      result.textContent = value;
    } else {
      clearInterval(clear);
      result.textContent = 'Your moment is complete';
    }
  }, 1000);
});

thirtSec.addEventListener('click', () => {
  clearInterval(clear);
  value = 30;
  clear = setInterval(() => {
    if (value > 0) {
      value -= 1;
      result.textContent = value;
    } else {
      clearInterval(clear);
      result.textContent = 'Your moment is complete';
    }
  }, 1000);
});

fortSec.addEventListener('click', () => {
  clearInterval(clear);
  value = 40;
  clear = setInterval(() => {
    if (value > 0) {
      value -= 1;
      result.textContent = value;
    } else {
      clearInterval(clear);
      result.textContent = 'Your moment is complete';
    }
  }, 1000);
});

oneMin.addEventListener('click', () => {
  clearInterval(clear);
  value = 60;
  clear = setInterval(() => {
    if (value > 0) {
      value -= 1;
      result.textContent = value;
    } else {
      clearInterval(clear);
      result.textContent = 'Your moment is complete';
    }
  }, 1000);
});
