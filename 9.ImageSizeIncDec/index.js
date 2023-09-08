let result = document.getElementById('result');
let inc = document.getElementById('inc');
let dec = document.getElementById('dec');
let image = document.getElementById('image');
let warnText = document.getElementById('warn-text');

let finalWidth = 300;
let warningText = '';

dec.addEventListener('click', () => {
  if (finalWidth <= 100) {
    warningText = 'Too Small Pls Add Width';
    warnText.textContent = warningText;
    result.textContent = `Width : ${finalWidth}px`;
  } else {
    finalWidth -= 5;
    image.style.width = finalWidth + 'px';
    result.textContent = `Width : ${finalWidth}px`;
    warningText = '';
    warnText.textContent = warningText;
  }
});

inc.addEventListener('click', () => {
  if (finalWidth >= 300) {
    warningText = 'Too Big Pls Remove Width';
    warnText.textContent = warningText;
    result.textContent = `Width : ${finalWidth}px`;
  } else {
    finalWidth += 5;
    image.style.width = finalWidth + 'px';
    result.textContent = `Width : ${finalWidth}px`;
    warningText = '';
    warnText.textContent = warningText;
  }
});
