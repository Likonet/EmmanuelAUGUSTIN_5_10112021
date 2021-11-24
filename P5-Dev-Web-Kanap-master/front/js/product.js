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
            let hello =  document.querySelector('.item__img');
            console.log(hello);
            document.querySelector('.item__img').innerHTML= `<img src="${products.imageUrl}" alt="${products.altTxt}"></img>`
            console.log(products.colors[1]);
            let toto =  document.getElementById('colors');
            console.log(toto);
            document.getElementById('colors').innerHTML=`
            <option value="">--SVP, choisissez une couleur --</option>
            <option value="blue">${products.colors[1]}</option>
            <option value="${products[1].colors}">${products[1].colors}</option>
            <option value="${products[2].colors}">${products[2].colors}</option>
            <option value="${products[3].colors}">${products[3].colors}</option>
            `
    })
    .catch(function(err) {
      
    });

