let input = document.getElementById('input');
let result = document.getElementById('result');

input.addEventListener('keypress', (e) => {
  let liEl = document.createElement('li');
  liEl.textContent = `code : ${e.keyCode} text : ${e.key}`;
  result.appendChild(liEl);
});
