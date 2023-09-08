let form = document.getElementById('form');
let billAmount = document.getElementById('bill-amount');
let billPercentage = document.getElementById('bill-percentage');
let tipAmount = document.getElementById('tip-amount');
let totalAmount = document.getElementById('total-amount');
let billPercentageError = document.getElementById('bill-per');
let billAmtError = document.getElementById('bill-amt');
let reset = document.getElementById('reset');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (billAmount.value === '') {
    billAmtError.textContent = 'Bill Amount Required';
  } else if (billPercentage.value === '') {
    billPercentageError.textContent = 'Bill Percentage Required';
  } else {
    let billAmountValue = parseInt(billAmount.value);
    let billPercentageValue = parseInt(billPercentage.value);
    let tipAmountBill = (billPercentageValue / 100) * billAmountValue;
    let totalAmountBill = billAmountValue + tipAmountBill;
    tipAmount.value = tipAmountBill;
    totalAmount.value = totalAmountBill;
  }
});

reset.addEventListener('click', () => {
  billAmount.value = '';
  billPercentage.value = '';
  tipAmount.value = '';
  totalAmount.value = '';
  billAmtError.textContent = '';
  billPercentageError.textContent = '';
});
