let productsID = []
fetch("http://localhost:3000/api/products")
    .then(function(res) {
      if (res.ok) {
        return res.json();
      }
    })
    .then(function(value) {
    
         let toto = localStorage.getItem('cart');   
         let list = JSON.parse(toto);
         console.log(toto);
         console.log(list);
       
         console.log (list.length)
         console.log (list[3].quantity)
          let totalQuantity = 0
          
      
          let sum = list.values();
          for (const tees of sum) {
            totalQuantity += parseInt(tees.quantity);
            productsID.push(tees.id);
            
          }
         console.log (productsID)
         
         for (let hello of list) {
             console.log(hello)
            document.getElementById('cart__items').innerHTML +=
            `<article class="cart__item" data-id="${hello.id}">
            <div class="cart__item__img">
              <img src="${hello.imageSofa}" alt="Photographie d'un canapé">
            </div>
            <div class="cart__item__content">
              <div class="cart__item__content__titlePrice">
                <h2>${hello.nameSofa}</h2>
                <p class= toto>${hello.price*hello.quantity}</p>
              </div>
              <div class="cart__item__content__color">
                <h3 id="color_sofa">${hello.color}</h2>
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
         
        let totalPrice = 0
         Array.from(document.querySelectorAll('p.toto')).forEach(roro);
         function roro(item) {
          totalPrice += parseInt(item.innerHTML);
          console.log(totalPrice)
                             }
        console.log(totalPrice)
          document.getElementById("totalPrice").innerText = totalPrice; 
        
        

        document.getElementById("totalQuantity").innerText = totalQuantity;

          Array.from(document.querySelectorAll('.itemQuantity')).forEach(item => { // récupération de tous les éléments et les insérer dans un tableau.
          item.addEventListener('change', (e) => {
            let nameOfSofa = e.target.closest('article').querySelector('h2').innerText ; // récupération du 
            let colorSofa = e.target.closest('article').querySelector('#color_sofa').innerText ;
            let newQuantity = e.target.value
            console.log(e.target.value) 
            console.log(colorSofa);
            console.log (list);
            console.log (nameOfSofa);


            let tesst = list.find (elt => elt.nameSofa === nameOfSofa);
           let indiceArray = list.findIndex (elt => elt.nameSofa === nameOfSofa && elt.color === colorSofa);
           console.log (indiceArray);
            list[indiceArray].quantity = newQuantity;
            localStorage.clear();
            localStorage.setItem('cart', JSON.stringify(list));
          window.location.reload()
          }) 
        
           })

           Array.from(document.querySelectorAll('.deleteItem')).forEach(item => { // for each chaque élément du tableau
            item.addEventListener('click', (e) => {
            let nameOfSofa = e.target.closest('article').querySelector('h2').innerText ;
            let indiceArray = list.findIndex(elt => elt.nameSofa === nameOfSofa);
            list.splice(indiceArray, 1);
            localStorage.setItem('cart', JSON.stringify(list));
            window.location.reload()
  
            }) 
         
             })
    

             document.querySelector(".cart__order__form").addEventListener("submit", (e) => {
                 e.preventDefault();
                send(e)
                });
             
                // 2. Je viens verifier les donnees du formulaire

    

              document.getElementById("firstName").addEventListener("input", function(e) {
               
                if (/^[a-zA-Z]{2,}$/.test(e.target.value)) {
                    document.getElementById("firstName").style.backgroundColor = "green";
                    document.getElementById("firstNameErrorMsg").innerText = "";

                } else {
                    document.getElementById("firstNameErrorMsg").innerText = "Prénom invalide entrez seulemnt des caractères a,b,c...";
                    document.getElementById("firstName").style.backgroundColor = "white";
                }
                
              });

              document.getElementById("lastName").addEventListener("input", function(e) {
                e.stopPropagation()
                if (/^[a-zA-Z]/.test(e.target.value)) {
                    document.getElementById("lastName").style.borderColor = "bleu";;
                 console.log(document.getElementById("lastNameErrorMsg"))
                } else {
                    document.getElementById("lastNameErrorMsg").innerHTML = "Nom invalide entrez seulemnt des caractères a,b,c...";
                }
                
              });

              document.getElementById("city").addEventListener("input", function(e) {
                e.stopPropagation()
                if (/^[a-zA-Z]/.test(e.target.value)) {
                    //document.getElementById("firstNameErrorMsg").innerHTML = "Code valide";
                    //console.log(document.getElementById("firstName"))
                    document.getElementById("city").style.backgroundColor = "bleu"
                } else {
                    document.getElementById("cityNameErrorMsg").innerHTML = "Ville invalide entrez seulemnt des caractères a,b,c...";
                    
                }
                
              });

             document.getElementById("email").addEventListener("input", function(e) {
              
                if (/^[a-z0-9\-_\.]+@[a-z0-9]+\.[a-z]{2,5}$/i.test(e.target.value)) {
                    document.getElementById("email").style.backgroundColor = "bleu"
                } else {
                    document.getElementById("emailErrorMsg").innerHTML = "email invalide entrez seulemnt des caractères a,b,c...";
                    
                }
                
              });


                // 3. je fais un tableau avec les productsId
                // a completer => productID
                // 3. J'envoie au serveur
               /* fetch("http://localhost:3000/api/products", {
                  method: "POST",
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({contact, productID})

                })
                .then(function(res) {
                  if (res.ok) {
                    return res.json();
                  }
                })
                .then(function(value) {
                    console.log(value)
                });
              */

        }
        })
        .catch(function() {
              
        });  

        function send(e) {
            //e.preventDefault();
            // 1. Je viens récupérer les donnnées du formulaire
            let contact = {
                firstName: document.getElementById("firstName").value,
                lastName: document.getElementById("lastName").value,
                address: document.getElementById("address").value,
                city: document.getElementById("city").value,
                email: document.getElementById("email").value
              }
              
             fetch("http://localhost:3000/api/product/order", {
                method: "POST",
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({contact, productsID})

              })
              .then(function(res) {
                if (res.ok) {
                  return res.json();
                }
              })
              .then(function(value) {
                  console.log(value)
              });
            
            }