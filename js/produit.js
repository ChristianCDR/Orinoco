let id_produit = (window.location.search).slice(1); //récupere l'id de l'article contenu dans l'url
let envoyerPanier=document.querySelector('button.btn');

  fetch(`http://localhost:3000/api/cameras/${id_produit}`)//Récupérer des données sur le bon produit via l'id
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
        image_parent.prepend(image); //'prepend' ajoute le nouvel élement avant les autres
    let image_title = document.querySelector('.card-title');
        image_title.innerHTML=`${secondValeur.name}`;

    //generation automatique du bon nombre d'option disponible
    let lens= document.querySelector('#lenses');
        for (let i=0; i<secondValeur.lenses.length; i++){
          let lensName=document.createElement('option');
              lensName.setAttribute('value',`${secondValeur.lenses[i]}`);
              lensName.setAttribute('id',`lentille${i+1}`);
              lensName.innerHTML=`${secondValeur.lenses[i]}`;
          lens.appendChild(lensName);
        }
//Demander confirmation avant d'ajouter l'option choisie au tableau des options
    let listenOptions =document.querySelector('#lenses');
    let selectedLenses=[];
          listenOptions.addEventListener('change', function(event){
          confirm('Ajouter cette option?');
          if(confirm){
            selectedLenses.push(event.target.value);
          }
          else{
            alert('Option non ajoutée');
          }
        });
  //objet contenant le produit sélectionné et son prix          
        let selectedItem={
          produit:`${secondValeur.name}`,
          prix:`${secondValeur.price/100}`
        };
//au click, on mettra plusieurs élements dans le localStorage
    envoyerPanier.addEventListener('click', function(){
      
      let selectedLensesTab= JSON.parse(localStorage.getItem("selectedLensesTab"));
      if(selectedLensesTab){
        selectedLensesTab.push(selectedLenses);//tableau des options
        localStorage.setItem("selectedLensesTab", JSON.stringify(selectedLensesTab));
      }
    else{
          selectedLensesTab=[];
          selectedLensesTab.push(selectedLenses);
          localStorage.setItem("selectedLensesTab", JSON.stringify(selectedLensesTab));
    } 

     let selectedItemTab= JSON.parse(localStorage.getItem("selectedItemTab"));
      if(selectedItemTab){
        selectedItemTab.push(selectedItem); //produit sélectionné et son prix
        localStorage.setItem("selectedItemTab",JSON.stringify(selectedItemTab));
      }
      else{
        selectedItemTab=[];
        selectedItemTab.push(selectedItem);
        localStorage.setItem("selectedItemTab",JSON.stringify(selectedItemTab));
      }

      let productIdTab= JSON.parse(localStorage.getItem("productIdTab"));
      if(productIdTab){
        productIdTab.push(id_produit);//tableau de l'id des produits sélectionnés
        localStorage.setItem("productIdTab", JSON.stringify(productIdTab));
      }
    else{
        productIdTab=[];
        productIdTab.push(id_produit);
        localStorage.setItem("productIdTab", JSON.stringify(productIdTab));
    } 
    })     
    
  })
.catch(function(secondError){
  console.log(secondError); //récupère et affiche une éventuelle erreur
})