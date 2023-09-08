let result = document.getElementById('result');
let ClearBtn = document.getElementById('ClearBtn');

let ClearId;
let count = 0;

function clearFunction() {
  ClearId = setInterval(() => {
    count += 1;
    result.textContent = count;
  }, 1000);
}
clearFunction();

ClearBtn.addEventListener('click', () => {
  clearInterval(ClearId);
});
