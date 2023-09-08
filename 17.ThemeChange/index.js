let h1Text = document.querySelector('h1');
let inputEl = document.querySelector('input');
let divEl = document.getElementById('bg');

function check() {
  let inputElValue = inputEl.value;
  if (event.key === 'Enter') {
    if (inputElValue === 'Light') {
      divEl.style.backgroundImage =
        "url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-light-bg.png')";
      h1Text.style.color = 'black';
    } else if (inputElValue === 'Dark') {
      divEl.style.backgroundImage =
        "url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-dark-bg.png')";
      h1Text.style.color = 'white';
    } else {
      alert('Please Enter Valid Text');
    }
  }
}

inputEl.addEventListener('keydown', () => {
  check();
});
