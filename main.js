// main api
fetch('https://fakestoreapi.com/products')
.then(data =>  data.json())
.then(data => htmlRenderer(data));
const slider = document.getElementById('slider');
let scrollAmount = 0;

function autoScroll() {
  scrollAmount += 1;
  if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
    scrollAmount = 0;
  }
  slider.scrollTo({
    left: scrollAmount,
    behavior: 'smooth'
  });
}

setInterval(autoScroll, 50);