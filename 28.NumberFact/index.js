let result = document.querySelector('p');
let input = document.querySelector('input');
let valueEl = null;
let apiData = null;

function callApi() {
  result.textContent = 'Loading';
  let url = `https://apis.ccbp.in/numbers-fact?number=${parseInt(valueEl)}`;
  let options = {
    method: 'GET',
  };
  fetch(url, options).then(async (req) => {
    let data = await req.json();
    apiData = data.fact;
    result.textContent = apiData;
  });
}

input.addEventListener('keydown', (event) => {
  valueEl = event.target.value;
  if (event.key === 'Enter' && event.target.value !== '') {
    callApi();
  }
});
