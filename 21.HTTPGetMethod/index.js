let statusCode = document.getElementById('statusCode');
let statusBody = document.getElementById('statusBody');
let getBtn = document.getElementById('getBtn');

getBtn.addEventListener('click', async () => {
  statusCode.textContent = 'Loading';
  statusBody.textContent = 'Loading';
  let url = 'https://gorest.co.in/public-api/users';
  let options = {
    method: 'GET',
  };
  let fetchMethod = await fetch(url, options);
  let fetchData = await fetchMethod.json();
  statusCode.textContent = fetchData.code;
  statusBody.textContent = JSON.stringify(fetchData);
});
