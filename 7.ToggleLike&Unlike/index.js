let puppy = document.getElementById('puppy');
let btn = document.getElementById('btn');

let isLike = false;

btn.addEventListener('click', () => {
  if (isLike) {
    puppy.src =
      'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png';
    btn.style.backgroundColor = 'orange';
    isLike = false;
  } else {
    puppy.src =
      'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png';
    btn.style.backgroundColor = '';
    isLike = true;
  }
});
