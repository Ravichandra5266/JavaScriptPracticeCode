let idOne = document.getElementById('one');
let idTwo = document.getElementById('two');
let idThree = document.getElementById('three');
let idFour = document.getElementById('four');
let bgcolor = document.getElementById('bgcolor');
let bgText = document.getElementById('bgtext');

let updatedColor = '';

idOne.addEventListener('click', () => {
  updatedColor = idOne.value;
  bgcolor.style.backgroundColor = updatedColor;
  bgText.textContent = `Background-Color : ${updatedColor}`;
});

idTwo.addEventListener('click', () => {
  updatedColor = idTwo.value;
  bgcolor.style.backgroundColor = updatedColor;
  bgText.textContent = `Background-Color : ${updatedColor}`;
});

idThree.addEventListener('click', () => {
  updatedColor = idThree.value;
  bgcolor.style.backgroundColor = updatedColor;
  bgText.textContent = `Background-Color : ${updatedColor}`;
});

idFour.addEventListener('click', () => {
  updatedColor = idFour.value;
  bgcolor.style.backgroundColor = updatedColor;
  bgText.textContent = `Background-Color : ${updatedColor}`;
});
