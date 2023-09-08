let stopBtn = document.getElementById('stop');
let readyBtn = document.getElementById('ready');
let goBtn = document.getElementById('go');

let stopBtnColor = document.getElementById('stop-color');
let readyBtnColor = document.getElementById('ready-color');
let goBtnColor = document.getElementById('go-color');

stopBtn.addEventListener('click', () => {
  stopBtnColor.style.backgroundColor = '#cf1124';
  readyBtnColor.style.backgroundColor = '#4b5069';
  goBtnColor.style.backgroundColor = '#4b5069';
  stopBtn.style.backgroundColor = '#cf1124';
  goBtn.style.backgroundColor = '';
  readyBtn.style.backgroundColor = '';
});

readyBtn.addEventListener('click', () => {
  readyBtnColor.style.backgroundColor = '#f7c948';
  stopBtnColor.style.backgroundColor = '#4b5069';
  goBtnColor.style.backgroundColor = '#4b5069';
  readyBtn.style.backgroundColor = '#f7c948';
  stopBtn.style.backgroundColor = '';
  goBtn.style.backgroundColor = '';
});

goBtn.addEventListener('click', () => {
  goBtnColor.style.backgroundColor = '#199473';
  stopBtnColor.style.backgroundColor = '#4b5069';
  readyBtnColor.style.backgroundColor = '#4b5069';
  goBtn.style.backgroundColor = '#199473';
  readyBtn.style.backgroundColor = '';
  stopBtn.style.backgroundColor = '';
});
