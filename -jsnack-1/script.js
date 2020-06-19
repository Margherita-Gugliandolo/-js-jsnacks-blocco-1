//chiedere numeri all'utente

var num1 = prompt("inserisci un numero");
var num2 = prompt("inserisci un altro numero");

if (!isNaN(num1) && !isNaN(num2)){

if (num1 > num2){
  console.log(num1);
} else if (num1 < num2){
  console.log(num2);
} else { console.log("sono uguali");
 }
}
