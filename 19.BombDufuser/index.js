let text = document.getElementById('text');
let input = document.getElementById('input');
let timerId = null;
let count = 10;

timerId = setInterval(() => {
  count -= 1;
  text.textContent = count;
  if (count < 1) {
    clearInterval(timerId);
    text.textContent = 'BOOM';
  } else {
    input.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' && input.value === 'defuser' && count !== 0) {
        clearInterval(timerId);
        text.textContent = 'You Did It !';
      }
    });
  }
}, 1000);
