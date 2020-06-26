// In un array sono contenuti i nomi degli invitati alla festa del
// grande Gatsby, chiedi all’utente il suo nome e comunicagli se
// può partecipare o no alla festa

var nomeUtente = prompt("Qual è il tuo nome?");

 var listaInvitati = ["Marco", "Giulia", "Francesco", "Andrea", "Michela", "Carlotta", "Giovanni", "Elena", "Daniele"];
 var nameFound = false;

 for (var i = 0; i < listaInvitati.length; i++){
   if(nomeUtente == listaInvitati[i]) {
     nameFound = true;
   }
 }

 if (nameFound == true) {
   document.getElementById('invitato').innerHTML = "Benvenuto alla festa!";
 } else{
   document.getElementById('invitato').innerHTML = "Non sei nella lista invitati, mi dispiace.";
 }
