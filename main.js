// main api
// fetch('https://fakestoreapi.com/products')
// .then(data =>  data.json())
// .then(data => htmlRenderer(data));
const carousel = document.getElementById('carousel');

    let isDown = false;
    let startX;
    let scrollLeft;

    carousel.addEventListener('mousedown', (e) => {
      isDown = true;
      carousel.classList.add('active');
      startX = e.pageX - carousel.offsetLeft;
      scrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener('mouseleave', () => {
      isDown = false;
      carousel.classList.remove('active');
    });

    carousel.addEventListener('mouseup', () => {
      isDown = false;
      carousel.classList.remove('active');
    });

    carousel.addEventListener('mousemove', (e) => {
      if(!isDown) return;
      e.preventDefault();
      const x = e.pageX - carousel.offsetLeft;
      const walk = (x - startX) * 1.3; // სისწრაფე
      carousel.scrollLeft = scrollLeft - walk;
    });

    // ---- ტაჩის მხარდაჭერა (მობილური) ----
    let startTouchX = 0;
    carousel.addEventListener('touchstart', (e) => {
      startTouchX = e.touches[0].pageX;
      scrollLeft = carousel.scrollLeft;
    });
    carousel.addEventListener('touchmove', (e) => {
      const x = e.touches[0].pageX;
      const walk = (x - startTouchX) * 1.5;
      carousel.scrollLeft = scrollLeft - walk;
    });