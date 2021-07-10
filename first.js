const produits= document.getElementsByClassName('card-img-top');


document.addEventListener('click',function(event){
  event.preventDefault();
  event.stopPropagation();
  console.log(event);
  console.log(event.target.childNodes[0].attributes[1]);
  
 

});