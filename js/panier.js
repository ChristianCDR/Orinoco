let recapCommande= JSON.parse(localStorage.getItem("selectedItemTab"));
let nomProduit= document.querySelector('.produit');
let total=document.querySelector('.total');

let variableNulle={prix:0};
recapCommande.push(variableNulle);

let tableauDePrix=[];
for (let i=0; i<recapCommande.length-1; i++){
    tableauDePrix.push(parseFloat(recapCommande[i].prix));
}
tableauDePrix.push(variableNulle.prix);
let prixTotal=0;
for (let i=0; i<tableauDePrix.length-1; i++){
    tableauDePrix[i+1]+=tableauDePrix[i];
    total.innerHTML=`<h2 class="total">Total: ${tableauDePrix[i+1]}$</h2> `;
    prixTotal=tableauDePrix[i+1];
}
localStorage.setItem("prixTotal", JSON.stringify(prixTotal));

recapCommande.pop(variableNulle);

let lensTab= JSON.parse(localStorage.getItem("selectedLensesTab"));
let recapTab=document.querySelector('table');

  for(let i=0; i<recapCommande.length; i++){
    let lignesTab= document.createElement('tr');
        lignesTab.innerHTML=`<td>${recapCommande[i].produit}</td>
        <td>${lensTab[i]}</td>
        <td>${recapCommande[i].prix}$</td>`;
    recapTab.appendChild(lignesTab);
  }

let request= document.querySelectorAll('input');
    for(let i=0; i<request.length; i++){
      request[i].addEventListener('change', (event)=>{
        contact={
          lastName:`${request[0].value}`,
          firstName:`${request[1].value}`,
          email:`${request[2].value}`,
          address:`${request[3].value}`,
          codePostal:`${request[4].value}`,
          city:`${request[5].value}`
        }
        localStorage.setItem('contact', JSON.stringify(contact));
      }) 
    }
    
let codePostalCheck= document.getElementsByName('codePostal');
    codePostalCheck[0].addEventListener('change',function(value){
       let codePostal= localStorage.setItem('codePostal', JSON.stringify(value.target.value));
    });

    let products= JSON.parse(localStorage.getItem("productIdTab"));
    let contact=JSON.parse(localStorage.getItem("contact"));
    let contenu=0;

let submitButton=document.querySelector('.submit');
    submitButton.addEventListener('click',function(event){
      event.preventDefault();
      let codePostal= JSON.parse(localStorage.getItem("codePostal"));
      if(/^[0-9]{5}$/.test(codePostal)){
        request[4].value=codePostal;
      } 
      else{
        alert('Le code postal doit être composé de 5 chiffres!');
        event.preventDefault();
      }

      fetch('http://localhost:3000/api/cameras/order', {
      method: 'POST',
      headers: { 
        'Accept': 'application/json', 
        'Content-Type': 'application/json' 
      },
        body:JSON.stringify({contact,products}),
      }).then(response=>{
        if(response.ok){
          return response.json();
        }
      }).then(res=>{
              contenu=res.orderId;
              let currentAddress= window.location.search.slice(1);
              window.location= `confirmation.html?${contenu}`;
      })
      .catch(error=>{
        console.log(error);
      })
        
  });
//correction de la mise de la mise en page, 
//pwp, 
//plan de test/commentaires
//longueur noms/prenoms 
 

      