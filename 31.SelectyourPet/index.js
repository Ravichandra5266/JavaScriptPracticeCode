let petsImageUrls = {
  dog: 'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-dog-img.png',
  cat: 'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-cat-img.png',
  parrot:
    'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-parrot-img.png',
  spider:
    'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-spider-img.png',
  rabbit:
    'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-rabbit-img.png',
};

let select = document.getElementById('select');
let img = document.querySelector('img');
let value = null;
let imageIndex = petsImageUrls.rabbit;
img.src = imageIndex;

select.addEventListener('change', (event) => {
  value = event.target.value;
  imageIndex = petsImageUrls[value];
  img.src = imageIndex;
  img.className = 'img';
});
