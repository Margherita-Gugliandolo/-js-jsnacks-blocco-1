var btn = document.getElementById('btn');
 btn.addEventListener("click", function () {
  var max = 10;
  var min = 1;
  var elem = document.getElementById('numero');

   var num = Math.floor(Math.random() * (max - min + 1) + min);

   elem.classList.add("pari","dispari");

   if (!(num % 2)){
     elem.classList.remove("pari");
   } else {
     elem.classList.remove("dispari");
   }
})
