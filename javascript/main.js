/*
1. Mail
Chiedi all'utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull'esito del controllo.
*/

// Get data
// var userEmail = prompt('Inserisci il tuo indirizzo email').toLowerCase();
// console.log(userEmail);
//
// var accountsList = ['mariorossi@libero.it', 'pippo@libero.it', 'pluto@libero.it', 'pincopallino@libero.it'];
// console.log(accountsList);
//
// var emailCheck = false;
//
// // ciclo
// for (var i = 0; i < accountsList.length; i++) {
//   var item = accountsList[i];
//   console.log(item);
//
//   if (userEmail == item) {
//       emailCheck = true;
//   }
// }    /*fine ciclo*/
//
// if (emailCheck == true) {
//   console.log('Ciao! Puoi proseguire con in login');
// }
// else {
//   console.log('Errore! Non puoi procedere');
// }

// ********************************************************************************************************

/*
2. Gioco dei dadi
Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/
var user = Math.floor(Math.random() * 6) + 1;
console.log('Numero casuale da 1 a 6 (user): ' + user);

var computer = Math.floor(Math.random() * 6) + 1;
console.log('Numero casuale da 1 a 6 (pc): ' + computer);

var winner;

if (user > computer) {
  winner = user;
  console.log( 'Chi vince? ' + 'User con: ' + winner);
}

else if (user < computer) {
  winner = computer;
  console.log( 'Chi vince? ' + 'Computer con: ' + winner);
}
else {
  console.log( 'Pareggio' );
}
