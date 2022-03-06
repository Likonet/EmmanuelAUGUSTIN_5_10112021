

    fetch("http://localhost:3000/api/products")
    .then(function(res) {
      if (res.ok) {
        return res.json();
      }
    })
    .then(function(value) {
    
        let products = value; 
        for (let product of products) {                 // Récupération des éléments de l'API & affectation au éléments
            document.getElementById('items').innerHTML += `
            <a href="./product.html?id=${product._id}"> 
            <article>
              <img src="${product.imageUrl}" alt="${product.altTxt}">
              <h3 class="productName">${product.name}</h3>
              <p class="productDescription">${product.description}</p>
            </article>
          </a>`;
          var test = `/product.html?id=${product._id}`;
          console.log(test);
        

    }})
    .catch(function(err) {
      
    });
