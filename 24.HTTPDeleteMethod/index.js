let statusCode = document.getElementById('statusCode');
let statusBody = document.getElementById('statusBody');
let getBtn = document.getElementById('getBtn');
let textarea = document.getElementById('textarea');
let putId = document.getElementById('putId');

getBtn.addEventListener('click', async () => {
  statusCode.textContent = 'Loading';
  statusBody.textContent = 'Loading';

  let url = 'https://gorest.co.in/public-api/users/' + putId.value;
  let options = {
    method: 'Delete',
    // headers: {
    //   'content-Type': 'application/json',
    //   Accept: 'application/json',
    //   Authorization:
    //     'Bearer 6d78b895e218f6b868c5dfdb05a29f00dc9c8edaa572abd812a1a12ad4e8cdc5',
    // },
    // body: textarea.value,
  };

  let fetchMethod = await fetch(url, options);
  let fetchData = await fetchMethod.json();

  statusCode.textContent = fetchData.code;
  statusBody.textContent = JSON.stringify(fetchData);
});
