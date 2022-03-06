      

         let localCart = localStorage.getItem('cart');   //Récupération du localStorage
         let panier = JSON.parse(localCart);  //Création de l'objet Cart avec les valeurs du LocalStorage
         let sum = panier.values(); // Nombre d'éléments que contient l'objet Cart
         console.log (sum)
         let productsID = []//Tableau pour récupérer les ID des sofas commandés
         
         let totalQuantity = 0// quantité total d'article dans le panier et leur ID
          for (const qty of sum) {
            totalQuantity += parseInt(qty.quantity);
            productsID.push(qty.id); 
          }
        
         
         for (let data of panier) { // Afficher les éléments du localStorage
          
            document.getElementById('cart__items').innerHTML +=
            `<article class="cart__item" data-id="${data.id}">
            <div class="cart__item__img">
              <img src="${data.imageSofa}" alt="Photographie d'un canapé">
            </div>
            <div class="cart__item__content">
              <div class="cart__item__content__titlePrice">
                <h2>${data.nameSofa}</h2>
                <p class= SofaPrice>${data.price*data.quantity}</p>
              </div>
              <div class="cart__item__content__color">
                <h3 id="color_sofa">${data.color}</h2>
              </div>

              <div class="cart__item__content__settings">
                <div class="cart__item__content__settings__quantity">
                  <p>Qté: </p>
                  <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${data.quantity}">
                </div>
                <div class="cart__item__content__settings__delete">
                  <p class="deleteItem">Supprimer</p>
                </div>
              </div>
            </div>
          </article> `;}
         
          let totalPrice = 0 // Prix total des éléments commandés.
         Array.from(document.querySelectorAll('p.SofaPrice')).forEach(SofaPrices);
         function SofaPrices (item) {
          totalPrice += parseInt(item.innerHTML);
                             }

          document.getElementById("totalPrice").innerText = totalPrice; //insérer le prix total
          document.getElementById("totalQuantity").innerText = totalQuantity; //insérer la quantité totale

          Array.from(document.querySelectorAll('.itemQuantity')).forEach(item => { // récupération de tous les éléments des champs qté et les insérer dans un tableau.
          item.addEventListener('change', (e) => { // écoute l'évènement du changement de quantité
            let nameOfSofa = e.target.closest('article').querySelector('h2').innerText ; // récupération du nom du canapé dont la valeur a été modifiée
            let colorSofa = e.target.closest('article').querySelector('#color_sofa').innerText ;// récupération de la couleur du canapé dont la valeur a été modifiée
            let newQuantity = e.target.value //récupération de la nouvelle quantité
            let indiceArray = panier.findIndex (elt => elt.nameSofa === nameOfSofa && elt.color === colorSofa); // quel éléments du tableau a été modifié
            panier[indiceArray].quantity = newQuantity;// affecter la nouvelle valeur à l'élément modifié
            localStorage.clear();//vider le local storage
            localStorage.setItem('cart', JSON.stringify(panier));//affecter les nouvelles valeurs au localStorage
          window.location.reload()// recharger la pages
          }) 
        
           })

           Array.from(document.querySelectorAll('.deleteItem')).forEach(item => { // récupérer tous les éléments liés au bouton suppression
            item.addEventListener('click', (e) => { // écoute l'élément "delete"
            let nameOfSofa = e.target.closest('article').querySelector('h2').innerText ;//nom du sofa supprimer
            let indiceArray = list.findIndex (elt => elt.nameSofa === nameOfSofa && elt.color === colorSofa); // quel élément du tableau correspond la suppression du sofa
            list.splice(indiceArray, 1);//suppression de l'élément dans le tableau
            localStorage.setItem('cart', JSON.stringify(list));// insérer le nouveau tableau dans le localStorage
            window.location.reload()// recharger la page
            })         
             })
    
              document.getElementById("firstName").addEventListener("input", function(e) { // fonction regex pour vérifier prénom
               
                if (/^[a-zA-Z]{2,}$/.test(e.target.value)) {
                    document.getElementById("firstName").style.backgroundColor = "green";
                    document.getElementById("firstNameErrorMsg").innerText = "";

                } else {
                    document.getElementById("firstNameErrorMsg").innerText = "Prénom invalide entrez seulemnt des caractères a,b,c...";
                    document.getElementById("firstName").style.backgroundColor = "white";
                }
                
              });

              document.getElementById("lastName").addEventListener("input", function(e) { //fonction regex pour vérifier nom
              
                if (/^[a-zA-Z]{2,}$/.test(e.target.value)) {
                document.getElementById("lastName").style.backgroundColor = "green";
                document.getElementById("lastNameErrorMsg").innerText = "";

                } else {
                    
                document.getElementById("lastNameErrorMsg").innerHTML = "Nom invalide entrez seulemnt des caractères a,b,c...";
                document.getElementById("lastName").style.backgroundColor = "white";
                }
                
              });


                
              document.getElementById("city").addEventListener("input", function(e) { //fonction regex pour vérifier la ville
            
                if (/^[a-zA-Z-]{2,}$/.test(e.target.value)) {
                    document.getElementById("city").style.backgroundColor = "green"
                    document.getElementById("cityErrorMsg").innerText = "";
                } else {
                    document.getElementById("cityErrorMsg").innerHTML = "Ville invalide entrez seulemnt des caractères a,b,c...";
                    document.getElementById("city").style.backgroundColor = "white";
                }
                
              });

              document.getElementById("address").addEventListener("input", function(e) { // fonction regex pour vérifier l'adresse
            
                if (/^\d+\s[A-z]+\s[A-z]+/g.test(e.target.value)) {
                    document.getElementById("address").style.backgroundColor = "green"
                    document.getElementById("addressErrorMsg").innerText = "";
                } else {
                    document.getElementById("addressErrorMsg").innerHTML = "Adresse invalide ex: 22 rue du coding";
                    document.getElementById("address").style.backgroundColor = "white";
                }
                
              });


             document.getElementById("email").addEventListener("input", function(e) { // fonction regex pour vérifier l'adresse mail
              
                if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(e.target.value)) {
                    document.getElementById("email").style.backgroundColor = "green"
                    document.getElementById("emailErrorMsg").innerText = "";
                } else {
                    document.getElementById("emailErrorMsg").innerHTML = "email invalide entrez seulemnt des caractères a,b,c...";
                    document.getElementById("email").style.backgroundColor = "white";

                }
                
              });

     
        document.querySelector(".cart__order__form").addEventListener("submit", (e) => { // Fn envoi des infos de la pers. qui commande + ID des sofas
            e.preventDefault();
               send(e)
           });

        function send(e) {
          
            let contact = {
                firstName: document.getElementById("firstName").value, // récupération des valeurs des champs
                lastName: document.getElementById("lastName").value,
                address: document.getElementById("address").value,
                city: document.getElementById("city").value,
                email: document.getElementById("email").value
              }

              console.log(contact, productsID)


             fetch("http://localhost:3000/api/order", {  //http://localhost:3000/api/products
                method: "POST",
                body: JSON.stringify({contact}),
                headers: {

                  'Accept': 'application/json', 
            'Content-Type': 'application/json'
                
                 
                },
          
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