// Il computer deve generare 16 numeri casuali da 1 a 100.
// In seguito deve chiedere all’utente di inserire un numero da 1 a
// 100 alla volta, se il numero è presente nella lista dei numeri
// generati, la partita termina, altrimenti continua chiedendo
// all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero
// “vietato” o raggiunge il numero massimo possibile di numeri
// consentiti.
// Al termine della partita il software deve comunicare il punteggio,
//   cioè il numero di volte che l’utente ha inserito un numero
// consentito.

//genera un numero casuale fra 1 e max
var gruppoMine = [];
var numRand;

while(gruppoMine.length<16){
    numRand = getRandomInt(1,101);
    if(gruppoMine.includes(numRand) == false){
        gruppoMine.push(numRand);
    }
}
console.log("i numeri della morte sono : " + gruppoMine)

var beccato = false;
var gruppoNumeriPlayer = [];
var sceltaPlayer;
var punteggio = 0;

while (beccato == false){
    sceltaPlayer = parseInt(prompt("Scegli un numero tra 1 e 100"));
    console.log("Il numero scelto dall'utente è :" + sceltaPlayer)
    if(sceltaPlayer > 0 && sceltaPlayer < 101 && beccato == false && !isNaN(sceltaPlayer)){
        if (gruppoNumeriPlayer.includes(sceltaPlayer) == true){
            alert("Non fare il furbo , hai già inserito questo numero")
        }else if(gruppoMine.includes(sceltaPlayer) == true){
            alert("La mina è esplosa sei morto");
            beccato = true;
        }else{
            alert("l'hai mancata per un soffio , puoi continuare...per ora")
            gruppoNumeriPlayer.push(sceltaPlayer);
            punteggio++;
        }
    }else{
        alert("inserisci un valore valido")
    }

}

if(beccato==true){
    console.log("sei morto facendo " + punteggio + "punti")
}

if(punteggio == 84 && beccato == false){
    console.log("sembra impossibile , ma hai vinto... Porta simone in tabaccheria")
}

//Blocco funzioni

function getRandomInt(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()* (max-min)) + min; // il max è escluso il min è incluso
}




