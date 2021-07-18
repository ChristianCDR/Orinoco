let recapCommande= JSON.parse(localStorage.getItem("selectedItemTab"));
console.log(recapCommande);
let nomProduit= document.querySelector('.produit');
let lensList=  document.querySelector('.lensList');
let quantite=document.querySelector('.quantite');
let prix=document.querySelector('.prix');
let total=document.querySelector('.total');

let variableNulle={prix:0};
recapCommande.push(variableNulle);

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

let lensTab= JSON.parse(localStorage.getItem("selectedLensesTab"));
let recapTab=document.querySelector('table');

  for(let i=0; i<recapCommande.length; i++){
    let lignesTab= document.createElement('tr');
        lignesTab.innerHTML=`<td>${recapCommande[i].produit}</td>
        <td>${lensTab[i]}</td>
        <td>${recapCommande[i].quantite}</td>
        <td>${recapCommande[i].prix}</td>`;
    recapTab.appendChild(lignesTab);
  }

let request= document.querySelectorAll('input');
let contact={};
for(let i=0 ; i<request.length; i++){
  //console.log(request[i].value);
    contact={
    lastName:`${request[0].value}`,
    firstName:`${request[1].value}`,
    email:`${request[2].value}`,
    address:`${request[3].value}`,
    codePostal:`${request[4].value}`,
    city:`${request[5].value}`
  }
}
/*let codePostalCheck= document.getElementsByName('codePostal');
console.log(codePostalCheck);
    codePostalCheck[0].addEventListener('change',function(value){
      if(/^[0-9]{5}$/.test(value)){
        console.log('ok');
      } 
      else{
        console.log('erreur');
      }
    });*/

/*let submitButton=document.querySelector('.submit');

    let codePostalCheck= document.getElementsByName('codePostal');
    let value= codePostalCheck[0].value;
    submitButton.addEventListener('click',function(value){
      
      if(/^[0-9]{5}$/.test(value)){
        console.log('ok');
      } 
      else{
        console.log('erreur');
      }
    });*/
    console.log(recapCommande);
    console.log(contact);
    fetch('http://localhost:3000/api/cameras/order', {
        method: 'POST',
        headers: { 
      'Accept': 'application/json', 
      'Content-Type': 'application/json' 
      },
        body:JSON.stringify(recapCommande, contact),
      })
      .then(function(response){
        if (response.ok){
          return response.json();
        }
      })
      .then(function(res){
          console.log(res);
      })
      .catch(function(error){
        console.log(error);
      });


 

      