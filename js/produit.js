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
    let lens_class=0;
    for (let i=0; i<secondValeur.lenses.length; i++){
          let lens_image=document.createElement('div');
          lens_image.innerHTML=`<img class="lentille${i}" src="../images/Lens_35mm_1.4.jpg" alt="Lentille">`;
          lens.appendChild(lens_image);
                
          let listenLensClass =document.querySelector(`.lentille${i}`);
          console.log(listenLensClass);
          listenLensClass.addEventListener('click', function(){
          listenLensClass.style.border="medium solid blue";
          console.log(secondValeur.lenses[i]);
          });
    }
    let lien =document.querySelector('.link')
    .innerHTML=`<a role="button" class="btn rounded bg-info text-white" href="panier.html?${id_produit}&${secondValeur.lenses.length}"> Ajout au panier </a>`;
  })
.catch(function(secondError){
  console.log(secondError);
})