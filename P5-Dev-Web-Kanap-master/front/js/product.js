var url = new URL(document.location);
const idSofa = url.searchParams.get("id");
fetch("http://localhost:3000/api/products/"+idSofa)
    .then(function(res) {
      if (res.ok) {
        return res.json();
      }
    })
    .then(function(value) {
        let products = value;    
        document.getElementById('title').textContent= products.name;
        document.getElementById('price').textContent= products.price;
        document.getElementById('description').textContent= products.description;   
        document.querySelector('.item__img').innerHTML= `<img src="${products.imageUrl}" alt="${products.altTxt}"></img>`
        document.getElementById('colors').innerHTML=  ` <option value="">--SVP, choisissez une couleur --</option>`
        for(let i = 0 ; i< products.colors.length ; i++){
              document.getElementById('colors').innerHTML +=`<option value="${products.colors[i]}">${products.colors[i]}</option>`
            }
  

      document.getElementById('addToCart').addEventListener('click', (e) => { //Ecoute de l'évènement "click"
      const productToOrder= getProductFromForm(idSofa); 
      addProductToLocalStorage(productToOrder);
      
    })
    

    function getProductFromForm(idSofa){ // fonction récupérant les infos du canapé à partir du formulaire
      const imageSofa = products.imageUrl;
      const descriptionSofa = products.description;
      const price = products.price;
      const nameSofa = products.name;
      const color = document.getElementById('colors').value;
      const quantity= document.getElementById('quantity').value;
      const productToOrder = { 
        id: idSofa,
        color,
        quantity,
        nameSofa,
        imageSofa,
        descriptionSofa,
        price
      };
      return productToOrder;  
    }

    function addProductToLocalStorage(productToOrder) //produit à rajouter dans le localStorage’’
    
    {
  //condition ternaire : "Est-ce que " ? "oui" : "non"
  let panier = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
  // Est ce que le produit que j'ajoute il a le meme id et la meme couleur que un produit qui est deja dans le panier ?
  let findProduct = panier.find(elt => elt.id === productToOrder.id && elt.color === productToOrder.color)  
  if(findProduct){
    findProduct.quantity = parseInt(findProduct.quantity) + parseInt(productToOrder.quantity); // conversion chaine de caractère en valeur numérique
  }else{
    panier.push(productToOrder);
  }
  localStorage.setItem('cart', JSON.stringify(panier));
}
})
.catch(function() {
      
});  

   