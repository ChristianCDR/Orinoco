let id_produit = (window.location.search).slice(1);
let envoyerPanier=document.querySelector('button.btn');

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

    let lens= document.querySelector('#lenses');
        for (let i=0; i<secondValeur.lenses.length; i++){
          let lensName=document.createElement('option');
              lensName.setAttribute('value',`${secondValeur.lenses[i]}`);
              lensName.setAttribute('id',`lentille${i+1}`);
              lensName.innerHTML=`${secondValeur.lenses[i]}`;
          lens.appendChild(lensName);
        }

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
       console.log(selectedLenses); 
        
    let quantite= document.querySelector('#quantite');
        quantite.addEventListener('change', function(event){
          if(/^[0-9]$/.test(event.target.value)){
            localStorage.setItem("quantité", JSON.stringify(event.target.value)) ;
          }
          else{
            alert('La quantité ne peut pas être négative!');
          }   
        });
        
    let selectedItem={
      produit:`${secondValeur.name}`,
      quantite: JSON.parse(localStorage.getItem("quantité")),
      prix:`${secondValeur.price/100}`
    };
      
    envoyerPanier.addEventListener('click', function(){
      
      let selectedLensesTab= JSON.parse(localStorage.getItem("selectedLensesTab"));
      if(selectedLensesTab){
        selectedLensesTab.push(selectedLenses);
        localStorage.setItem("selectedLensesTab", JSON.stringify(selectedLensesTab));
      }
    else{
          selectedLensesTab=[];
          selectedLensesTab.push(selectedLenses);
          localStorage.setItem("selectedLensesTab", JSON.stringify(selectedLensesTab));
    } 

     let selectedItemTab= JSON.parse(localStorage.getItem("selectedItemTab"));
      if(selectedItemTab){
        selectedItemTab.push(selectedItem);
        localStorage.setItem("selectedItemTab",JSON.stringify(selectedItemTab));
      }
      else{
        selectedItemTab=[];
        selectedItemTab.push(selectedItem);
        localStorage.setItem("selectedItemTab",JSON.stringify(selectedItemTab));
      }
    })     
  })
.catch(function(secondError){
  console.log(secondError);
})