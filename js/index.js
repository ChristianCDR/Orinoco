fetch("http://localhost:3000/api/cameras") //requête à l'api
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
      //console.log(camera_actuelle);
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
    console.log(error);
  })

  let id_produit = (window.location.search).slice(1);

  fetch(`http://localhost:3000/api/cameras/${id_produit}`)
  .then(function(secondResultat){
    if (secondResultat.ok){
      return secondResultat.json();
    }
  })
  .then(function(secondValeur){
    let image_parent = document.querySelector('.img-parent');
    let image= document.createElement('div');
        image.innerHTML=
        `<img class="card-img-top rounded" src="${secondValeur.imageUrl}" alt="photo de la caméra" >`;
        image_parent.prepend(image);
    let image_title = document.querySelector('.card-title');
        image_title.innerHTML=`${secondValeur.name}`;

    let lens= document.querySelector('.lens');
    let firstlens = document.createElement('div');
    let secondlens= document.createElement('div');
    let lens_class1=0;
    let lens_class2=0;

switch(id_produit){
  case "5be1ed3f1c9d44000030b061":
        firstlens.innerHTML=`<img class="lentille1" src="../images/Lens_35mm_1.4.jpg" alt="Lentille">`;
        secondlens.innerHTML=`<img class="lentille2" src="../images/Lens_50mm_1.6.jpg" alt="Lentille">`;
        lens.appendChild(firstlens);
        lens.appendChild(secondlens);

        lens_class1= document.querySelector(".lentille1");
        lens_class1.addEventListener('click', function(){
        lens_class1.style.border="medium solid blue";
        console.log(secondValeur.lenses[0]);
        });

        lens_class2= document.querySelector(".lentille2");
        lens_class2.addEventListener('click', function(){
        lens_class2.style.border="medium solid blue";
        console.log(secondValeur.lenses[1]);
        })
  break;
  case "5be1ef211c9d44000030b062":
        firstlens.innerHTML=`<img class="lentille1" src="../images/Lens_35mm_1.4.jpg" alt="Lentille">`;
        secondlens.innerHTML=`<img class="lentille2" src="../images/Lens_50mm_1.6.jpg" alt="Lentille">`;
        lens.appendChild(firstlens);
        lens.appendChild(secondlens);

        lens_class1= document.querySelector(".lentille1");
        lens_class1.addEventListener('click', function(){
        lens_class1.style.border="medium solid blue";
        console.log(secondValeur.lenses[0]);
        });

        lens_class2= document.querySelector(".lentille2");
        lens_class2.addEventListener('click', function(){
        lens_class2.style.border="medium solid blue";
        console.log(secondValeur.lenses[1]);
        })
  break;
  case "5be9bc241c9d440000a730e7":
        firstlens.innerHTML=`<img class="lentille1" src="../images/Lens_35mm_1.4.jpg" alt="Lentille">`;
        secondlens.innerHTML=`<img class="lentille2" src="../images/Lens_50mm_1.6.jpg" alt="Lentille">`;
        lens.appendChild(firstlens);
        lens.appendChild(secondlens);

        lens_class1= document.querySelector(".lentille1");
        lens_class1.addEventListener('click', function(){
        lens_class1.style.border="medium solid blue";
        console.log(secondValeur.lenses[0]);
        });

        lens_class2= document.querySelector(".lentille2");
        lens_class2.addEventListener('click', function(){
        lens_class2.style.border="medium solid blue";
        console.log(secondValeur.lenses[1]);
        })
  break;
  case "5be9c4471c9d440000a730e8":
        firstlens.innerHTML=`<img class="lentille1" src="../images/Lens_35mm_1.4.jpg" alt="Lentille">`;
        secondlens.innerHTML=`<img class="lentille2" src="../images/Lens_50mm_1.6.jpg" alt="Lentille">`;
        lens.appendChild(firstlens);
        lens.appendChild(secondlens);

        lens_class1= document.querySelector(".lentille1");
        lens_class1.addEventListener('click', function(){
        lens_class1.style.border="medium solid blue";
        console.log(secondValeur.lenses[0]);
        });

        lens_class2= document.querySelector(".lentille2");
        lens_class2.addEventListener('click', function(){
        lens_class2.style.border="medium solid blue";
        console.log(secondValeur.lenses[1]);
        })
  break;
  case "5be9c4c71c9d440000a730e9":
        firstlens.innerHTML=`<img class="lentille1" src="../images/Lens_35mm_1.4.jpg" alt="Lentille">`;
        secondlens.innerHTML=`<img class="lentille2" src="../images/Lens_50mm_1.6.jpg" alt="Lentille">`;
        lens.appendChild(firstlens);
        lens.appendChild(secondlens);

        lens_class1= document.querySelector(".lentille1");
        lens_class1.addEventListener('click', function(){
        lens_class1.style.border="medium solid blue";
        console.log(secondValeur.lenses[0]);
        });

        lens_class2= document.querySelector(".lentille2");
        lens_class2.addEventListener('click', function(){
        lens_class2.style.border="medium solid blue";
        console.log(secondValeur.lenses[1]);
        })
  
  default: console.log("Pas de lentilles disponibles");
}
let link= document.querySelector('a.btn');
    link.innerHTML=`<a role="button" class="btn rounded bg-info text-white" href="panier.html?${id_produit}&${secondValeur.lenses[0]}"> Ajouter au panier </a>`;
})
.catch(function(secondError){
  console.log(secondError);
})
