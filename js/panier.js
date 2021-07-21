//récupérer le tableau de produits sélectionnés et leurs prix
let recapCommande= JSON.parse(localStorage.getItem("selectedItemTab"));
let nomProduit= document.querySelector('.produit');
let total=document.querySelector('.total');

let variableNulle={prix:0}; 
recapCommande.push(variableNulle);

let tableauDePrix=[];
for (let i=0; i<recapCommande.length-1; i++){
    tableauDePrix.push(parseFloat(recapCommande[i].prix)); // recuperer uniquement les prix 
}
tableauDePrix.push(variableNulle.prix); //ajouter 0 à la fin du tableau pour permettre le calcul du total
let prixTotal=0;
//parcourir le tableau des prix pour en faire la somme
for (let i=0; i<tableauDePrix.length-1; i++){
    tableauDePrix[i+1]+=tableauDePrix[i];
    total.innerHTML=`<h2 class="total">Total: ${tableauDePrix[i+1]}$</h2> `;
    prixTotal=tableauDePrix[i+1];
}
//envoyer le prix total dans le localStorage
localStorage.setItem("prixTotal", JSON.stringify(prixTotal));

recapCommande.pop(variableNulle); //supprimer la dernière case du tableau de prix

let lensTab= JSON.parse(localStorage.getItem("selectedLensesTab"));
let recapTab=document.querySelector('table');

//générer automatiquement le nombre de lignes pour le tableau affiché dans le panier
  for(let i=0; i<recapCommande.length; i++){
    let lignesTab= document.createElement('tr');
        lignesTab.innerHTML=`<td>${recapCommande[i].produit}</td>
        <td>${lensTab[i]}</td> 
        <td>${recapCommande[i].prix}$</td>`;
    recapTab.appendChild(lignesTab);
  }

let request= document.querySelectorAll('input');
//écouter chaque case du formulaire, et enregistrer sa valeur dans l'objet Contact
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
  //A la fin du formulaire, on enregistre Contact dans le localStorage      
        localStorage.setItem('contact', JSON.stringify(contact));
      }) 
    }
  //Ecoute de la case codePostal et enregistrement de sa valeur dans le localStorage  
let codePostalCheck= document.getElementsByName('codePostal');
    codePostalCheck[0].addEventListener('change',function(value){
       let codePostal= localStorage.setItem('codePostal', JSON.stringify(value.target.value));
    });
//récuperer le tableau d'id et l'objet contact;
    let products= JSON.parse(localStorage.getItem("productIdTab"));
    let contact=JSON.parse(localStorage.getItem("contact"));
    let contenu=0;
//au clic, vérifier la validité du code postal et faire une requête fetch
let submitButton=document.querySelector('.submit');
    submitButton.addEventListener('click',function(event){
      event.preventDefault(); //annihiler le comportement par defaut du submitButton
      let codePostal= JSON.parse(localStorage.getItem("codePostal"));
      if(/^[0-9]{5}$/.test(codePostal)){ //vérification du codePostal par regex
        request[4].value=codePostal;
      } 
      else{
        //envoi d'une alerte lorsque le codePostal ne satisfait pas
        alert('Le code postal doit être composé de 5 chiffres!');
        event.preventDefault();
      }

      fetch('http://localhost:3000/api/cameras/order', {
      method: 'POST',
      headers: { 
        'Accept': 'application/json', 
        'Content-Type': 'application/json' 
      },
        body:JSON.stringify({contact,products}),//passage du tableau d'id et de l'objet contact au serveur
      }).then(response=>{
        if(response.ok){
          return response.json();
        }
      }).then(res=>{
              contenu=res.orderId; //contenu contient l'orderId envoyé par le serveur
              let currentAddress= window.location.search.slice(1);
              window.location= `confirmation.html?${contenu}`; //Modification de l'url à charger lors du clic
      })
      .catch(error=>{
        console.log(error); //récupère et affiche les erreurs
      })      
  });
//plan de test/commentaires
//correction de la mise en page,
//pwp,
//longueur noms/prenoms 
 

      