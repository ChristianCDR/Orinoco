let recapCommande= JSON.parse(localStorage.getItem("selectedItemTab"));
let nomProduit= document.querySelector('.produit');
let lensList=  document.querySelector('.lensList');
let quantite=document.querySelector('.quantite');
let prix=document.querySelector('.prix');
let total=document.querySelector('.total');

let variableNulle={prix:0};
recapCommande.push(variableNulle);

// let x= parseFloat(recapCommande[0].prix);
// let y= parseFloat(recapCommande[i+1].prix);
let tableauDePrix=[];
for (let i=0; i<recapCommande.length-1; i++){
    tableauDePrix.push(parseFloat(recapCommande[i].prix));
}
tableauDePrix.push(variableNulle.prix);

for (let i=0; i<tableauDePrix.length-1; i++){
    tableauDePrix[i+1]+=tableauDePrix[i];
    total.innerHTML=`<h2 class="total">Total: ${tableauDePrix[i+1]}$</h2> `;
}

recapCommande.pop(variableNulle);

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
  recapPrix.innerHTML=` ${recapCommande[i].prix}$,`;
  prix.appendChild(recapPrix);
}
