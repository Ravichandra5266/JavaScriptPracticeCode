let BackgroundColor = document.getElementById('BackgroundColor');
let FontColor = document.getElementById('FontColor');
let FontSize = document.getElementById('FontSize');
let FontWeight = document.getElementById('FontWeight');
let Padding = document.getElementById('Padding');
let BorderRadious = document.getElementById('BorderRadious');
let Apply = document.getElementById('apply');
let Custom = document.getElementById('Custom');

Apply.addEventListener('click', () => {
  Custom.style.backgroundColor = BackgroundColor.value;
  Custom.style.color = FontColor.value;
  Custom.style.fontSize = FontSize.value;
  Custom.style.fontWeight = FontWeight.value;
  Custom.style.padding = Padding.value;
  Custom.style.borderRadius = BorderRadious.value;
});
