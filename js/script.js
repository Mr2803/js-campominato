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
//@ts-check

//Il computer deve generare 16 numeri casuali da 1 a 100.
function numRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Il max è escluso e il min è incluso
}

//creo una variabile che sarà uguale alla mia funzione per generare i numeri casuali
var numRandomUser = numRandom(1,101);
console.log(numRandomUser)

//creo un array dove inserirò i numeri casuali generati (NON DOPPI)
var numVietati = [];
console.log(numVietati.length);
var i = 0;
var numGen;

//imposto un ciclo while per far generare 16 numeri diversi e allo stesso tempo faccio fare un controllo tramite la funzione includes che mi permette di verificare se all'interno dell'array sono già presenti i numeri generati casualmente -->
while (numVietati.length < 16){
     numGen = numRandom(1,101);

     //<-- se il comando includes mi restituisce falso , allora lo pusho all'interno del mio array numeri generati
    if(numVietati.includes(numGen) == false){
        numVietati.push(numGen);
    }
    console.log(numVietati.length);
}

console.log(numVietati)

//In seguito deve chiedere all’utente di inserire un numero da 1 a 100 alla volta,se il numero è presente nella lista dei numeri generati, la partita termina,
//altrimenti continua chiedendo all’utente un altro numero.

var numGiocatore;
var gruppoNumeriGiocatore = [];

while (gruppoNumeriGiocatore.length < 84 && gruppoNumeriGiocatore == numVietati){
    numGiocatore = parseInt(prompt("inserisci un numero"));
    gruppoNumeriGiocatore.push(numGiocatore);

    if(numGiocatore = numVietati){
        console.log("mi dispiace hai perso")
    }else{
        console.log("complimenti hai vinto")
    }

    /* if(gruppoNumeriGiocatore.includes(numGiocatore)==false){
        gruppoNumeriGiocatore.push(numGiocatore);
    }else(
        alert("attenzione hai già inserito questo numero")
    ) */
}
console.log(gruppoNumeriGiocatore)