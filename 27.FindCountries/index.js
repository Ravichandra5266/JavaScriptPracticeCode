let input = document.querySelector('input');
let list = document.querySelector('ul');
let apiData = null;
let inputValue = null;

function displayEachData(data) {
  let { name, flag, population } = data;
  let liEl = document.createElement('h1');
  let container = document.createElement('div');
  liEl.className = 'li';
  container.className = 'con';

  let title = document.createElement('h1');
  title.textContent = name;
  title.className = 'title';
  container.appendChild(title);

  let img = document.createElement('img');
  img.src = flag;
  img.alt = name;
  img.className = 'img';
  container.appendChild(img);

  let subtitle = document.createElement('p');
  subtitle.textContent = `population ${population}`;
  subtitle.className = 'subtitle';
  container.appendChild(subtitle);

  liEl.appendChild(container);
  list.appendChild(liEl);
}

function displayData() {
  list.textContent = '';
  for (let country of apiData) {
    let countryName = country.name;
    if (
      countryName.toLowerCase().includes(inputValue) ||
      countryName.toUpperCase().includes(inputValue)
    ) {
      displayEachData(country);
    }
  }
}

function callApi() {
  let url = 'https://apis.ccbp.in/countries-data';
  let options = {
    method: 'GET',
  };
  fetch(url, options).then(async (req) => {
    apiData = await req.json();
    displayData();
  });
}
callApi();
input.addEventListener('keyup', (event) => {
  inputValue = event.target.value;
  displayData();
});
