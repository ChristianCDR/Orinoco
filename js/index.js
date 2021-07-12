fetch("http://localhost:3000/api/cameras")
  .then(function(resultat){
    if (resultat.ok){
      return resultat.json();
    }
  })
  .then (function(valeur){
    let element = document.querySelector('.big-row');
    for(let i=0; i< valeur.length; i++ ){
      let camera_actuelle = valeur[i];
      let price=camera_actuelle.price/100;
      //console.log(camera_actuelle);
      let newItem= document.createElement('div');
         newItem.classList.add("col-12", "col-md-6","col-lg-4");
         newItem.innerHTML=`<div class="card bg-secondary div__img">
         <div>
           <a class="stretched-link" href="html/page-produit.html">
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
       element.appendChild(newItem);
    }

  })
  .catch(function(error){
    console.log(error);
  })
  