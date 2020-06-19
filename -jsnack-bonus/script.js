var btn = document.getElementById("btn");

var scommessa = prompt("Scommetti: testa o croce?")

btn.addEventListener("click", function () {
 var min = 0;
 var max = 9;
 var testa = document.getElementById("fronte");
 var croce = document.getElementById("retro");
 var output = document.getElementById("output").innerHTML;

 var numeroCasuale = Math.floor(Math.random()*(max - min + 1)) + min;
 console.log(numeroCasuale);

 if (!(numeroCasuale % 2)) {
  testa.className = "show";
  croce.className = "hide";
} else{
   croce.className = "show";
   testa.className = "hide";
 }
})
