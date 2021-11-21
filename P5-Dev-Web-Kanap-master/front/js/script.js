

    fetch("http://localhost:3000/api/products")
    .then(function(res) {
      if (res.ok) {
        return res.json();
      }
    })
    .then(function(value) {
    
        let products = value; 
        for (let product of products) {
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
         // var url = new URL(test);
           // var idCanap = url.searchParams.get("id");
         // console.log(url);
          


          // récupérer la liste des liens
          // récupérer les id
          //comment faire le liens entre l'id et les éléments du canapé




        // var str = ./product.html?id=+${product._id};
           //  console.log(str);
          //   var url = new URL(str);
           //  var idCanap = url.searchParams.get("id");
          //   console.log(idCanap);

    }})
    .catch(function(err) {
      
    });
  //  var str = "./product.html?id"=product[2]._id;"