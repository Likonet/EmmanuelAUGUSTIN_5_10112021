function askHello() {
    fetch("http://localhost:3000/api/products")
    .then(function(res) {
      if (res.ok) {
        return res.json();
      }
    })
    .then(function(value) {
      document
          .getElementById("items")
          .innerText = value.name;
    })
    .catch(function(err) {
      // Une erreur est survenue
    });
  }
  
  