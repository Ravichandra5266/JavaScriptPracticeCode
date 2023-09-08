let hyd = document.getElementById('hyd');
let chi = document.getElementById('chi');
let mum = document.getElementById('mum');
let del = document.getElementById('del');
let result = document.querySelector('p');
let form = document.querySelector('form');

let ans = 'Delhi';
let value = null;

form.addEventListener('submit', (event) => {
  event.preventDefault();

  hyd.addEventListener('click', (event) => {
    value = event.target.value;
  });

  chi.addEventListener('click', (event) => {
    value = event.target.value;
  });

  mum.addEventListener('click', (event) => {
    value = event.target.value;
  });

  del.addEventListener('click', (event) => {
    value = event.target.value;
  });

  if (ans === value) {
    result.textContent = 'Correct Answer';
    result.style.color = 'green';
  } else if (value === null) {
    result.textContent = 'Select Any Option';
    result.style.color = 'yellow';
  } else {
    result.textContent = 'Wrong Answer';
    result.style.color = 'red';
  }
});
