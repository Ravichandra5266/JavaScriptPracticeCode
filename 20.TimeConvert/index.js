let hrs = document.getElementById('hours');
let min = document.getElementById('minutes');
let war = document.getElementById('warning');
let form = document.getElementById('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (hrs.value === '' && min.value === '') {
    war.textContent = 'Please Fill Input';
  } else if (hrs.value === '') {
    war.textContent = 'Please Enter Hours';
  } else if (min.value === '') {
    war.textContent = 'Please Enter Minutes';
  } else {
    let hoursVal = parseInt(hrs.value);
    let minVal = parseInt(min.value);
    let sum = hoursVal * 3600 + minVal * 60;
    war.textContent = `${sum} Seconds`;
    war.style.fontSize = '25px';
  }
});
