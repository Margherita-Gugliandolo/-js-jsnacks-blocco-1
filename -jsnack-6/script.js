// L'utente inserisce due numeri su richiesta e il computer stampa il numero più alto.

var num1 = prompt("Dammi un numero");
var num2 = prompt("Dammi un altro numero");

 if(num1 > num2){
   console.log(num1);
 } else if(num2 > num1){
   console.log( num2);
 } else{
   console.log("parità");
 }
