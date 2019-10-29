/* NOME REPO:  js-campominato
DESCRIZIONE:
 Il computer deve generare 16 numeri casuali da 1 a 100.
In seguito deve chiedere all’utente di inserire un numero da 1 a 100 alla volta,
se il numero è presente nella lista dei numeri generati, la partita termina,
altrimenti continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
Ci sono 2 controlli che van fatti già di base per dar senso all’ex:
i 16 numeri vietati/mina, devono essere tutti diversi, non possono esserci doppioni;
l’utente non può inserire due volte lo stesso numero, ma sempre numeri diversi.
 */

//Il computer deve generare 16 numeri casuali da 1 a 100.
var numeriPc ; 

for(i=0; i<16 ; i++){
    numeriPc = Math.floor(Math.random() * 100 + 1);
    console.log(numeriPc)
}


//In seguito deve chiedere all’utente di inserire un numero da 1 a 100 alla volta