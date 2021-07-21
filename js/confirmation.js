let orderId= window.location.search.slice(1); //récuperer l'orderId contenu dans l'url
let orderIdAffichage= document.querySelector('.orderId');
    orderIdAffichage.textContent=orderId; //affichage de l'orderId

let prixTotal= JSON.parse(localStorage.getItem("prixTotal"));//récupérer le prix total depuis le localStorage
let prixTotalAffichage= document.querySelector('.prixTotal');
    prixTotalAffichage.textContent=prixTotal+'$'; //affichage du prix total

    //localStorage.clear();