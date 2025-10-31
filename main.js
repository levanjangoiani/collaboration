// main api
fetch('https://fakestoreapi.com/products')
.then(data =>  data.json())
.then(data => htmlRenderer(data));

function htmlRenderer(products){
    console.log(products);
}

<<<<<<< Updated upstream
let carousel = document.getElementById('carousel');
=======
>>>>>>> Stashed changes
// Make images inside the carousel non-draggable and non-selectable
if (carousel){
  let imgs = carousel.querySelectorAll('img');
  imgs.forEach(img => {
    // Prevent default dragging behavior and selection
    try {
      img.setAttribute('draggable', 'false');
    } catch (e) {
      // ignore
    }
    img.addEventListener('dragstart', (ev) => ev.preventDefault());
    // Also explicitly disable selection via inline style for older browsers
    img.style.userSelect = 'none';
    img.style.webkitUserSelect = 'none';
    // webkit-specific: prevent image being dragged as a resource
    img.style.webkitUserDrag = 'none';
  });
}

// ---- მაუსის მხარდაჭერა (დასტოპი) ----
let isDown = false;
let startX;
let scrollLeft;
let scrollStep = 1000; // რამდენი პიქსელით გადავიდეს ერთ ჯერზე
let autoScrollSpeed = 3000; // ყოველ რამდენ წამში გადავიდეს (3 წამი)

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
    let x = e.pageX - carousel.offsetLeft;
    let walk = (x - startX) * 1.5; // სისწრაფე
    carousel.scrollLeft = scrollLeft - walk;
});

setInterval(() => {
if (!isDown) { // თუ მომხმარებელი არ აჭერს მაუსს ან თითს
    // გადავა მომდევნო პოზიციაზე
    carousel.scrollLeft += scrollStep;
    // თუ ბოლო სლაიდამდე მივიდა, დაბრუნდეს დასაწყისში
if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 10) {
    carousel.scrollLeft = 0;
}
}}, autoScrollSpeed);

// ---- ტაჩის მხარდაჭერა (მობილური) ----
let startTouchX = 0;
carousel.addEventListener('touchstart', (e) => {
    startTouchX = e.touches[0].pageX;
    scrollLeft = carousel.scrollLeft;
});
carousel.addEventListener('touchmove', (e) => {
    let x = e.touches[0].pageX;
    let walk = (x - startTouchX) * 1.5;
    carousel.scrollLeft = scrollLeft - walk;
});

