var url = new URL(document.location);
console.log(url);
const idSofa = url.searchParams.get("id");
console.log(idSofa);
fetch("http://localhost:3000/api/products/"+idSofa)
    .then(function(res) {
      if (res.ok) {
        return res.json();
      }
    })
    .then(function(value) {
    console.log(value);

        let products = value;    
            document.getElementById('title').textContent= products.name;
            document.getElementById('price').textContent= products.price;
            document.getElementById('description').textContent= products.description;
            document.querySelector('.item__img').innerHTML= `<img src="${products.imageUrl}" alt="${products.altTxt}"></img>`
         

           
      

    })
    .catch(function(err) {
      
    });

