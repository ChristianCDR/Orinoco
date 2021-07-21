let orderId= window.location.search.slice(1);
let orderIdAffichage= document.querySelector('.orderId');
    orderIdAffichage.textContent=orderId;

let prixTotal= JSON.parse(localStorage.getItem("prixTotal"));
let prixTotalAffichage= document.querySelector('.prixTotal');
    prixTotalAffichage.textContent=prixTotal+'$';

    //localStorage.clear();