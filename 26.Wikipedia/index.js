let search = document.getElementById('search');
let list = document.getElementById('list');
let apiData = null;

let currentpage = 1;
let limitpages = 5;
let totalpages = null;
let sliceData = null;

function pageIndex(i) {
  currentpage = i;
  displayData();
}

function changePrev() {
  if (currentpage > 1) {
    currentpage -= 1;
    displayData();
  }
}

function changeNxt() {
  if (currentpage < totalpages) {
    currentpage += 1;
    displayData();
  }
}

function pagination() {
  let prevBtn = document.createElement('button');
  let nxtBtn = document.createElement('button');
  let btnCon = document.createElement('div');
  let btnText = document.createElement('p');
  let customBtn = document.createElement('div');
  let pangCon = document.createElement('div');

  prevBtn.textContent = 'Prev';
  prevBtn.className = 'pngBtn';
  prevBtn.addEventListener('click', changePrev);
  btnCon.appendChild(prevBtn);

  btnText.textContent = `${currentpage} of ${totalpages}`;
  btnText.style.textAlign = 'center';
  btnCon.appendChild(btnText);

  nxtBtn.textContent = 'Nxt';
  nxtBtn.className = 'pngBtn';
  nxtBtn.addEventListener('click', changeNxt);
  btnCon.appendChild(nxtBtn);
  btnCon.className = 'pagebtn';

  for (let i = 1; i <= totalpages; i++) {
    let button = document.createElement('button');
    button.textContent = i;
    button.className = 'customBtn';
    button.addEventListener('click', () => {
      pageIndex(i);
    });
    if (currentpage === i) {
      button.className = 'active';
    }
    customBtn.appendChild(button);
    pangCon.appendChild(customBtn);
    pangCon.className = 'customCon';
    list.appendChild(pangCon);
  }

  list.appendChild(btnCon);
}

function displayItems(data) {
  let { title, link, description } = data;

  let liEle = document.createElement('li');
  let ItemContainer = document.createElement('div');
  let headingText = document.createElement('a');
  let linkText = document.createElement('a');
  let paraText = document.createElement('p');
  let breakEl = document.createElement('br');

  headingText.textContent = title;
  headingText.setAttribute('href', link);
  headingText.setAttribute('target', '_blank');
  headingText.className = 'title';
  ItemContainer.appendChild(headingText);

  ItemContainer.appendChild(breakEl);

  linkText.textContent = link;
  linkText.setAttribute('href', link);
  linkText.setAttribute('target', '_blank');
  linkText.className = 'link';
  ItemContainer.appendChild(linkText);

  paraText.textContent = description;
  paraText.className = 'para';
  ItemContainer.appendChild(paraText);

  liEle.appendChild(ItemContainer);
  liEle.className = 'box';
  list.appendChild(liEle);
}

function displayData() {
  totalpages = Math.ceil(apiData.length / limitpages);
  let startIndex = (currentpage - 1) * limitpages;
  let endIndex = currentpage * limitpages;
  sliceData = apiData.slice(startIndex, endIndex);
  list.textContent = '';
  if (sliceData.length > 0) {
    for (let each of sliceData) {
      displayItems(each);
    }
    pagination();
  } else {
    list.textContent = 'Sorry! No Data Match';
  }
}

search.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && search.value === '') {
    alert('Please Enter Value');
  } else if (event.key === 'Enter' && search.value !== '') {
    list.textContent = 'Loading......';
    currentpage = 1;
    let url = `https://apis.ccbp.in/wiki-search?search=${search.value}`;
    let options = {
      method: 'GET',
    };
    fetch(url, options)
      .then(async (req) => {
        let jsonData = await req.json();
        apiData = jsonData.search_results;
        displayData();
      })
      .catch((e) => {
        list.textContent = e;
      });
  }
});
