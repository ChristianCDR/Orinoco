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
    let selectedLens=[];
    for (let i=0; i<secondValeur.lenses.length; i++){
          let lens_image=document.createElement('div');
          lens_image.innerHTML=`<img class="lentille${i}" src="../images/Lens_35mm_1.4.jpg" alt="Lentille">`;
          lens.appendChild(lens_image);
                
          let listenLensClass =document.querySelector(`.lentille${i}`);
          listenLensClass.addEventListener('click', function(){
          listenLensClass.style.border="medium solid blue";
          selectedLens.push(secondValeur.lenses[i]);
          return selectedLens;
          });
    }

    let selectedItem={
      produit:`${secondValeur.name}`,
      lentilles: selectedLens,
      quantite: 1,
      prix:`${secondValeur.price/100}`
    };
    let envoyerPanier=document.querySelector('button.btn');  
    envoyerPanier.addEventListener('click', function(){
      
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