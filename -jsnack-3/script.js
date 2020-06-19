var result = document.getElementById('result');
var btn = document.getElementById('btn');

btn.addEventListener("click", function () {
 var num = prompt("inserisci un numero");
  if (num > 0){
   result.className = "green";
} else if (num < 0){
  result.className = "red";
} else {
  result.className = "blue";
}
})
