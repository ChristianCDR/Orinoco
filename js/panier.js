let recapCommande= JSON.parse(localStorage.getItem("selectedItemTab"));
console.log(recapCommande);
let nomProduit= document.querySelector('.produit');
let lensList=  document.querySelector('.lensList');
let quantite=document.querySelector('.quantite');
let prix=document.querySelector('.prix');
let total=document.querySelector('.total');

for (let i=0; i<recapCommande.length; i++){
  let recapNomProduit= document.createElement('span');
  recapNomProduit.innerHTML=` ${recapCommande[i].produit},`;
  nomProduit.appendChild(recapNomProduit);

  let recapLensList= document.createElement('span');
  recapLensList.innerHTML=` ${recapCommande[i].lentilles},`;
  lensList.appendChild(recapLensList);

  let recapQuantite= document.createElement('span');
  recapQuantite.innerHTML=` ${recapCommande[i].quantite},`;
  quantite.appendChild(recapQuantite);

  let recapPrix= document.createElement('span');
  recapPrix.innerHTML=` ${recapCommande[i].prix}, `;
  prix.appendChild(recapPrix);
}
/*let calcultotal=()=>{
  recapTotal= total.innerHTML+= `<h2 class="total">Total:${recapCommande[i].prix}</h2>`;
  total.appendChild(recapTotal);
   console.log('ok');
   return recapTotal;
}
let recapTotal=calcultotal();*/