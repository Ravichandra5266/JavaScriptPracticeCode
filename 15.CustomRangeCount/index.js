let startBtn = document.getElementById('startBtn');
let countID = document.getElementById('countID');
let count1 = document.getElementById('startCount');
let count2 = document.getElementById('endCount');

function getFullDetails(val1, val2) {
  let count = val1;
  let id = setInterval(() => {
    if (count < val2) {
      count += 1;
      countID.textContent = count;
    } else {
      clearInterval(id);
    }
  }, 1000);
}

startBtn.addEventListener('click', () => {
  if (count1.value !== '' && count2.value !== '') {
    let val1 = parseInt(count1.value);
    let val2 = parseInt(count2.value);
    getFullDetails(val1, val2);
  } else if (count1.value === '') {
    alert('Please Enter Start Value Range Number');
  } else {
    alert('Please Enter End Value Range Number');
  }
});
