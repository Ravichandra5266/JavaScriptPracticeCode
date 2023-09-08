let btn = document.getElementById('btn');
let text = document.getElementById('text');

btn.addEventListener('click', () => {
  let url = 'https://apis.ccbp.in/jokes/random';
  let options = {
    method: 'GET',
  };
  fetch(url, options)
    .then(async (res) => {
      let data = await res.json();
      text.textContent = data.value;
      text.classList = 'text';
    })
    .catch((e) => {
      text.textContent = e;
    });
});
