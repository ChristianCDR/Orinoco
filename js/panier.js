/* let lensClassTab=[];
lensClassTab.push=(`lensClass${i}`);*/
let id_produit = (window.location.search).slice(1);
console.log(id_produit);
  fetch(`http://localhost:3000/api/cameras/${id_produit}`)
  .then(function(secondResultat){
    if (secondResultat.ok){
      return secondResultat.json();
    }
  })
  .then(function(secondValeur){
    let recapProduit=document.querySelector('.produit');
    recapProduit.innerHTML=`<h2 class="produit">Produit: ${secondValeur.name}</h2>`;
  })
  .catch(function(secondError){
    console.log(secondError);
  })
