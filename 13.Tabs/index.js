let aboutBtn = document.getElementById('aboutBtn');
let visitBtn = document.getElementById('visitBtn');
let attractionBtn = document.getElementById('attractionBtn');

let about = document.getElementById('about');
let visit = document.getElementById('visit');
let attraction = document.getElementById('attraction');

aboutBtn.addEventListener('click', () => {
  about.classList = 'show';
  visit.classList = 'visit';
  attraction.classList = 'attraction';

  aboutBtn.className = 'active';
  visitBtn.classList.remove('active');
  attractionBtn.classList.remove('active');
});

visitBtn.addEventListener('click', () => {
  visit.classList = 'show';
  about.classList = 'about';
  attraction.classList = 'attraction';

  aboutBtn.classList.remove('active');
  visitBtn.className = 'active';
  attractionBtn.classList.remove('active');
});

attractionBtn.addEventListener('click', () => {
  about.classList = 'about';
  visit.classList = 'visit';
  attraction.className = 'show';
  aboutBtn.classList.remove('active');
  visitBtn.classList.remove('active');
  attractionBtn.className = 'active';
});
