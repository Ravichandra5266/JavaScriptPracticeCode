let lightImg = document.getElementById('light-img');
let catImg = document.getElementById('cat-img');
let lightText = document.getElementById('light-text');
let switchOn = document.getElementById('switch-on');
let switchOff = document.getElementById('switch-off');

switchOff.addEventListener('mouseover', () => {
  lightImg.src =
    'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png';
  catImg.src =
    'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png';
  lightText.textContent = 'Light OFF';
});

switchOn.addEventListener('mouseover', () => {
  lightImg.src =
    'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png';
  catImg.src =
    'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png';
  lightText.textContent = 'Light ON';
});
