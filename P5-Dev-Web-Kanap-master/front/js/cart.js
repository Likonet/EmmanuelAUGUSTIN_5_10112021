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
          
          Array.from(document.querySelectorAll('.itemQuantity')).forEach(item => { // for each chaque élément du tableau
          item.addEventListener('change', (e) => {
            let nameOfSofa = e.target.closest('article').querySelector('h2').innerText ;
            let newQuantity = e.target.value
            console.log(e.target.value) 
            console.log(nameOfSofa);
            //console.log (number);

            let tesst = list.find (elt => elt.nameSofa === nameOfSofa);
            let indiceArray = list.findIndex(elt => elt.nameSofa === nameOfSofa);
            console.log (tesst)
            console.log (tesst)
            list[indiceArray].quantity = newQuantity;
            console.log(list);
            localStorage.clear();
            
            localStorage.setItem('cart', JSON.stringify(list));


          }) 
       
           })

           Array.from(document.querySelectorAll('.deleteItem')).forEach(item => { // for each chaque élément du tableau
            item.addEventListener('click', (e) => {
              let nameOfSofa = e.target.closest('article').querySelector('h2').innerText ;
              let indiceArray = list.findIndex(elt => elt.nameSofa === nameOfSofa);
                if (indiceArray > -1) {
             list.splice(indiceArray, 1);
                }
              console.log(list)
              
              localStorage.setItem('cart', JSON.stringify(list));
             window.location.reload()
  
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