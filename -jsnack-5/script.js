var btn = document.getElementById('btn');
btn.addEventListener("click", function () {
  var num1 = parseInt(document.getElementById('num1').value);
  var num2 = parseInt(document.getElementById('num2').value);
  var operazione = document.getElementById('operazione').value;
  var result = document.getElementById('result');

if (!operazione) {
  result.innerHTML = "non hai selezionato nessuna operazione";
} else if (operazione == "1"){
  result.innerHTML = num1 + num2;
} else if (operazione == "2"){
  result.innerHTML = num1 - num2;
} else if (operazione == "3"){
  result.innerHTML = num1 * num2;
} else if (operazione == "4"){
       if (num2 == 0) {
         result.innerHTML = "non so come si fa";
       } else{
         result.innerHTML = num1 / num2;
       }
}

})
