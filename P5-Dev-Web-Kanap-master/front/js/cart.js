fetch("http://localhost:3000/api/products")
    .then(function(res) {
      if (res.ok) {
        return res.json();
      }
    })
    .then(function(value) {
    
         let toto = localStorage.getItem('cart');   
         let list = JSON.parse(toto);
         console.log(toto)
         console.log(list)
         for (let hello of list) {
            console.log (hello.id)
            document.getElementById('cart__items').innerHTML +=
            `<article class="cart__item" data-id="{product-ID}">
            <div class="cart__item__img">
              <img src="${hello.imageSofa}" alt="Photographie d'un canapé">
            </div>
            <div class="cart__item__content">
              <div class="cart__item__content__titlePrice">
                <h2>${hello.nameSofa}</h2>
                <p>${hello.price}</p>
              </div>
              <div class="cart__item__content__settings">
                <div class="cart__item__content__settings__quantity">
                  <p>Qté: </p>
                  <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${hello.quantity}">
                </div>
                <div class="cart__item__content__settings__delete">
                  <p class="deleteItem">Supprimer</p>
                </div>
              </div>
            </div>
          </article> `
    }})
    .catch(function(err) {
      
    });