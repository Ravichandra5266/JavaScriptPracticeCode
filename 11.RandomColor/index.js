let bgcontainer = document.getElementById('bgcontainer');
let button = document.getElementById('button');

let colors = [
  '#e75d7c',
  '#b16cef',
  '#53cca4',
  '#efc84d',
  '#628ef0',
  '#184b73',
  '#883e7f',
  '#ed048b',
];

let currentBg = colors[0];
bgcontainer.style.backgroundColor = currentBg;

button.addEventListener('click', () => {
  let colorsLength = colors.length;
  let randomColor = Math.ceil(Math.random() * colorsLength);
  currentBg = colors[randomColor];
  bgcontainer.style.backgroundColor = currentBg;
});
