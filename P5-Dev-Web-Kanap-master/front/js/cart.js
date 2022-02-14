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
            `<article class="cart__item" data-id="${hello.id}">
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
          </article> `;
          
          let ar = Array.from(document.querySelectorAll('.itemQuantity'));
          console.log(ar)
          console.log(ar.length)
          Array.from(document.querySelectorAll('.itemQuantity')).forEach(item => { // for each chaque élément du tableau
          item.addEventListener('change', (e) => {
            let nameOfSofa = e.target.closest('article').querySelector('h2').innerText ;
            let number = e.target.value
            console.log(e.target.value) 
            list[0].quantity = e.target.value;
            console.log(nameOfSofa);
            console.log (number);

            let tesst = list.find (elt => elt.nameSofa === nameOfSofa);
            console.log (tesst)
            tesst.quantity = number;
            console.log (testt)

          }) 
       
           })
          
          
          // Array.from(document.getElementsByClassName('deleteItem')).forEach(item => {
          
           // item.addEventListener('click', (e) => {
           
              //  var link = e.target.closest('a');
          //  })})




        }
        })
        .catch(function() {
              
        });  