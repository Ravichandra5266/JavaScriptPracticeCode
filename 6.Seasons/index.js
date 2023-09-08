let banner = document.getElementById('banner');
let springBtn = document.getElementById('spring');
let summerBtn = document.getElementById('summer');
let winterBtn = document.getElementById('winter');
let autumnBtn = document.getElementById('autumn');

springBtn.addEventListener('click', () => {
  banner.src =
    'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-xs-img.png';
  springBtn.style.backgroundColor = 'orange';
  summerBtn.style.backgroundColor = '';
  winterBtn.style.backgroundColor = '';
  autumnBtn.style.backgroundColor = '';
});

summerBtn.addEventListener('click', () => {
  banner.src =
    'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-xs-img.png';
  summerBtn.style.backgroundColor = 'orange';
  springBtn.style.backgroundColor = '';
  winterBtn.style.backgroundColor = '';
  autumnBtn.style.backgroundColor = '';
});

winterBtn.addEventListener('click', () => {
  banner.src =
    'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-xs-img.png';
  springBtn.style.backgroundColor = '';
  summerBtn.style.backgroundColor = '';
  winterBtn.style.backgroundColor = 'orange';
  autumnBtn.style.backgroundColor = '';
});

autumnBtn.addEventListener('click', () => {
  banner.src =
    'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-xs-img.png';
  springBtn.style.backgroundColor = '';
  summerBtn.style.backgroundColor = '';
  winterBtn.style.backgroundColor = '';
  autumnBtn.style.backgroundColor = 'orange';
});
