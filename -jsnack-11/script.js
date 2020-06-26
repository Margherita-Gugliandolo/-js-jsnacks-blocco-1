// Stampa il cubo dei primi N numeri, dove N è un numero
// indicato dall’utente.
var btn = document.getElementById('btn');
var numero = document.getElementById('input');

btn.addEventListener("click", function(){
  var cuboN = Math.pow(numero.value, 3);
 console.log(cuboN);
})
