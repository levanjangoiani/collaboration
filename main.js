// main api
fetch('https://fakestoreapi.com/products')
.then(data =>  data.json())
.then(data => htmlRenderer(data));