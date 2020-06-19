var creaBtn = document.getElementById("btn");
creaBtn.addEventListener("click", function () {
  var nomeCompleto;
  var nome = document.getElementById("nome").value;
  var cognome = document.getElementById("cognome").value;
  nomeCompleto = nome + " " + cognome;

  console.log(nomeCompleto);
})
