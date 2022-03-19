      

    /*
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


             fetch("http://localhost:3000/api/products/order", {  
            
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

*/
let panier = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];   //Récupération du localStorage
let totalQuantity = calculateTotalQuantity(panier);
displayCartInfo(panier, totalQuantity);
addListeners();
let productsID = getProductsId(panier);



//CheckFirstName () 
CheckLastName () 
CheckCity () 
CheckAdress ()
CheckMail ()




 document.getElementById("order").addEventListener("submit", (e) => { // Fn envoi des infos de la pers. qui commande + ID des sofas 
  let lastNamee =  document.getElementById("lastName").value;//valeur champ prénom
  let regexlastName = /^[a-zA-Z]{2,}$/; //  forme du prénom
  let test = regexlastName.test(lastNamee);//respect de la forme du prénom
  console.log(test);
  console.log(lastNamee);

 if (!test) // si la valeur du champ ne respect pas la règle alors
 {
  console.log(test);
  document.getElementById("firstNameErrorMsg").innerText = "Prénom invalide entrez seulemnt des caractères a,b,c...";
  document.getElementById("firstName").style.backgroundColor = "red";
 //e.preventDefault

 }
 else{
  document.getElementById("firstName").style.backgroundColor = "green";
  document.getElementById("firstNameErrorMsg").innerText = "";

 }

    
  e.preventDefault;
     //send(e)
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


	fetch("http://localhost:3000/api/products/order", { 
		method: "POST", 
		body: JSON.stringify({contact, products:productsID}),
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},

	})
		.then(function (res) {
			if (res.ok) {
				return res.json();
			}
		})
		.then(function (value) {
			console.log(value)
		});

}

function calculateTotalQuantity(panier){
	console.log(panier)
	let total = 0
	for (const product of panier) {
		total += parseInt(product.quantity);
	}
	return total
}

function getProductsId(panier) {

  console.log(panier)
	let productId = [];
	for (const product of panier) {
		productId += parseInt(product.id);
	}
	return productId

}

function displayCartLine(data){
	document.getElementById('cart__items').innerHTML +=
		`<article class="cart__item" data-id="${data.id}">
            <div class="cart__item__img">
              <img src="${data.imageSofa}" alt="Photographie d'un canapé">
            </div>
            <div class="cart__item__content">
              <div class="cart__item__content__titlePrice">
                <h2>${data.nameSofa}</h2>
                <p class= SofaPrice>${data.price * data.quantity}</p>
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
          </article> `;
}

async function displayCartInfo(panier) { 
	for (let data of panier) { // Afficher les éléments du localStorage
		displayCartLine(data);
	}
	let totalPrice = getSofaPrices()
	document.getElementById("totalPrice").innerText = totalPrice; //insérer le prix total
	document.getElementById("totalQuantity").innerText = totalQuantity; //insérer la quantité totale
}
function getSofaPrices() {
	let price = 0
	Array.from(document.querySelectorAll('p.SofaPrice')).forEach(item => { //récupération éléments prix sofa
		price += parseInt(item.textContent); //somme de l'ensemble des sofas
	})
	return price
}

function addListeners(){  // écoute évènement changement valeur des champs
  changeValueOnItemsQuantity()
  removeSofa()
}


function changeValueOnItemsQuantity(){
	Array.from(document.querySelectorAll('.itemQuantity')).forEach(item => { // récupération de tous les éléments des champs qté et les insérer dans un tableau.
		item.addEventListener('change', (e) => { // écoute l'évènement du changement de quantité
			let nameOfSofa = e.target.closest('article').querySelector('h2').innerText; // récupération du nom du canapé dont la valeur a été modifiée
			let colorSofa = e.target.closest('article').querySelector('#color_sofa').innerText;// récupération de la couleur du canapé dont la valeur a été modifiée
			let newQuantity = e.target.value //récupération de la nouvelle quantité
			let indiceArray = panier.findIndex(elt => elt.nameSofa === nameOfSofa && elt.color === colorSofa); // quel éléments du tableau a été modifié
			panier[indiceArray].quantity = newQuantity;// affecter la nouvelle valeur à l'élément modifié
			localStorage.setItem('cart', JSON.stringify(panier));//affecter les nouvelles valeurs au localStorage
			let content = e.target.closest('.cart__item__content')
			const priceElt = content.querySelector('.SofaPrice') // récupération du prix sofa sur lequel l'évènement se passe
			priceElt.textContent = panier[indiceArray].price * newQuantity // affectation du nouveau prix suite au changement
			document.getElementById("totalPrice").innerText = getSofaPrices(); //insérer le prix total
			document.getElementById("totalQuantity").innerText = calculateTotalQuantity(panier); //insérer la quantité totale
		})

	})
}

function removeSofa() {

  Array.from(document.querySelectorAll('.deleteItem')).forEach(item => { // récupérer tous les éléments liés au bouton suppression
    item.addEventListener('click', (e) => { // écoute l'élément "delete"
    let nameOfSofa = e.target.closest('article').querySelector('h2').innerText ;//nom du sofa supprimer
    let colorSofa = e.target.closest('article').querySelector('#color_sofa').innerText;// récupération de la couleur du canapé dont la valeur a été modifiée
    let indiceArray = panier.findIndex (elt => elt.nameSofa === nameOfSofa && elt.color === colorSofa); // quel élément du tableau correspond la suppression du sofa
    panier.splice(indiceArray, 1);//suppression de l'élément dans le tableau
    localStorage.setItem('cart', JSON.stringify(panier));// insérer le nouveau tableau dans le localStorage
    console.log(indiceArray)
    })         
     })

}
/*
function CheckFirstName () {

  document.getElementById("firstName").addEventListener("input", function (e) { // fonction regex pour vérifier prénom
  
    console.log(e.target.value); 
    
    if (/^[a-zA-Z]{2,}$/.test(e.target.value)) {
      document.getElementById("firstName").style.backgroundColor = "green";
      document.getElementById("firstNameErrorMsg").innerText = "";
     
    } else {
      document.getElementById("firstNameErrorMsg").innerText = "Prénom invalide entrez seulemnt des caractères a,b,c...";
      document.getElementById("firstName").style.backgroundColor = "white";
     // document.querySelector(".cart__order__form").disable = true;
     // document.getElementById("order").disable = true;
     console.log(document.getElementById("order"));   
    }
  
  })};*/

function CheckLastName () {
  document.getElementById("lastName").addEventListener("input", function (e) { //fonction regex pour vérifier nom
  
    if (/^[a-zA-Z]{2,}$/.test(e.target.value)) {
      document.getElementById("lastName").style.backgroundColor = "green";
      document.getElementById("lastNameErrorMsg").innerText = "";
  
    } else {
  
      document.getElementById("lastNameErrorMsg").innerHTML = "Nom invalide entrez seulemnt des caractères a,b,c...";
      document.getElementById("lastName").style.backgroundColor = "white";
    
    }
  
  })};

  function CheckCity () {
    document.getElementById("city").addEventListener("input", function (e) { //fonction regex pour vérifier la ville
    
      if (/^[a-zA-Z-]{2,}$/.test(e.target.value)) {
        document.getElementById("city").style.backgroundColor = "green"
        document.getElementById("cityErrorMsg").innerText = "";
      } else {
        document.getElementById("cityErrorMsg").innerHTML = "Ville invalide entrez seulemnt des caractères a,b,c...";
        document.getElementById("city").style.backgroundColor = "white";
      }
    
    })};

    function CheckAdress () {
      document.getElementById("address").addEventListener("input", function (e) { // fonction regex pour vérifier l'adresse
      
        if (/^\d+\s[A-z]+\s[A-z]+/g.test(e.target.value)) {
          document.getElementById("address").style.backgroundColor = "green"
          document.getElementById("addressErrorMsg").innerText = "";
        } else {
          document.getElementById("addressErrorMsg").innerHTML = "Adresse invalide ex: 22 rue du coding";
          document.getElementById("address").style.backgroundColor = "white";
        }
      
      })};

      function CheckMail () {
        document.getElementById("email").addEventListener("input", function (e) { // fonction regex pour vérifier l'adresse mail
        
          if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(e.target.value)) {
            document.getElementById("email").style.backgroundColor = "green"
            document.getElementById("emailErrorMsg").innerText = "";
          } else {
            document.getElementById("emailErrorMsg").innerHTML = "email invalide entrez seulemnt des caractères a,b,c...";
            document.getElementById("email").style.backgroundColor = "white";
        
          }
        
        })};
      