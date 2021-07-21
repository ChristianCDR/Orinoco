fetch("http://localhost:3000/api/cameras")
  .then(function(resultat){ //un .then pour récuperer le résultat
    if (resultat.ok){
      return resultat.json(); //on récupère le resultat que l'on convertit au format json
    }
  })
  .then (function(valeur){ //un 2e .then pour récuperer le résultat au format json
    let element = document.querySelector('.big-row'); 
    for(let i=0; i< valeur.length; i++ ){
      let camera_actuelle = valeur[i]; // camera_actuelle contiendra tour à tour les attributs de chaque caméra
      let price=camera_actuelle.price/100; // conversion des centimes en dollars

//création d'une nouvelle div à chaque boucle pour contenir chaque image envoyée par le backend
//la balise 'a' contient un lien dynamique qui charge la bonne page grâce à l'id
      let newItem= document.createElement('div');
         newItem.classList.add("col-12", "col-md-6","col-lg-4");
         newItem.innerHTML=`<div class="card bg-secondary div__img">
         <div>
           <a class="stretched-link" href="html/page-produit.html?${camera_actuelle._id}">
            <img class="card-img-top" src="${camera_actuelle.imageUrl}" alt="Image de l'appareil photo ">
           </a>
         </div>
         <div class="description-items">
           <span class="text-white">${camera_actuelle.name}</span> 
           <i class="fas fa-thumbs-up text-white">  4.5</i>
           <p class="text-warning">${price+"$"}</p>
         </div>
         <p>${camera_actuelle.description}</p>
       </div>`;
       element.appendChild(newItem); // nouvel enfant à .big-row à chaque boucle
    }

  })
  .catch(function(error){
    console.log(error); //fonction qui récupère et affiche l'erreur dans la console s'il y en a une.
  })

