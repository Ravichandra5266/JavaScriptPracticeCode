let statusCode = document.getElementById('statusCode');
let statusBody = document.getElementById('statusBody');
let getBtn = document.getElementById('getBtn');
let textarea = document.getElementById('textarea');

getBtn.addEventListener('click', async () => {
  statusCode.textContent = 'Loading';
  statusBody.textContent = 'Loading';
  // let inputText = {
  //   name: 'RaviChandra',
  //   eamil: 'krc@gmail.com',
  //   status: 'Active',
  //   gender: 'Male',
  // };
  let url = 'https://gorest.co.in/public-api/users';
  let options = {
    method: 'POST',
    headers: {
      'content-Type': 'application/json',
      Accept: 'application/json',
      Authorization:
        'Bearer 6d78b895e218f6b868c5dfdb05a29f00dc9c8edaa572abd812a1a12ad4e8cdc5',
    },
    body: textarea.value,
  };
  let fetchMethod = await fetch(url, options);
  console.log(fetchMethod);
  let fetchData = await fetchMethod.json();
  console.log(fetchData);

  statusCode.textContent = fetchData.code;
  statusBody.textContent = JSON.stringify(fetchData);
});
