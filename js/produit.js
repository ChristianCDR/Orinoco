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

    let lens= document.querySelector('#lenses');
        for (let i=0; i<secondValeur.lenses.length; i++){
          let lensName=document.createElement('option');
              lensName.setAttribute('value',`${secondValeur.lenses[i]}`);
              lensName.setAttribute('id',`lentille${i+1}`);
              lensName.innerHTML=`${secondValeur.lenses[i]}`;
          lens.appendChild(lensName);
        }
    
    /*let selectedLens=[{cul:'bite'}];    
    
          let listenLensClass =document.querySelector(`#lentille${i+1}`);
          listenLensClass.addEventListener('click', function(){
          selectedLens.push(secondValeur.lenses[i]);
          return selectedLens;
          });*/
    let selectedItem={
      produit:`${secondValeur.name}`,
      quantite: 1,
      prix:`${secondValeur.price/100}`
    };
    console.log(secondValeur.lenses);
    let envoyerPanier=document.querySelector('button.btn');  
    envoyerPanier.addEventListener('click', function(){
      
     let selectedItemTab= JSON.parse(localStorage.getItem("selectedItemTab"));
      if(selectedItemTab){
        selectedItemTab.push(selectedItem);
        localStorage.setItem("selectedItemTab",JSON.stringify(selectedItemTab));
        //localStorage.setItem("selectedLenses",JSON.stringify(selectedLenses));
      }
      else{
        selectedItemTab=[];
        selectedItemTab.push(selectedItem);
        localStorage.setItem("selectedItemTab",JSON.stringify(selectedItemTab));
        //localStorage.setItem("selectedLenses",JSON.stringify(selectedLenses));
      }
    })     
  })
.catch(function(secondError){
  console.log(secondError);
})