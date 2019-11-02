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

//genera un numero casuale non ripetuto


function gioco(maxNumber,punteggioVittoria){
    var gruppoMine = [];
    var numRand;
    
while(gruppoMine.length<16){
    numRand = getRandomInt(1,maxNumber);
    if(gruppoMine.includes(numRand) == false){
        gruppoMine.push(numRand);
    }
    console.log(numRand)
}

console.log("i numeri della morte sono : " + gruppoMine)


var beccato = false;
var gruppoNumeriPlayer = [];
var sceltaPlayer;

var punteggio = 0;
    while (beccato == false && punteggio < punteggioVittoria ){
    sceltaPlayer = parseInt(prompt("Scegli un numero tra 1 e " + (maxNumber - 1)));
    console.log("Il numero scelto dall'utente è :" + sceltaPlayer)
    
        if (sceltaPlayer > 0 && sceltaPlayer < maxNumber && !isNaN(sceltaPlayer)){
        if (gruppoNumeriPlayer.includes(sceltaPlayer) == true){
            alert("Non fare il furbo , hai già inserito questo numero")
        } else if(gruppoMine.includes(sceltaPlayer) == true){
            alert("La mina è esplosa sei morto");
            beccato = true;
            gruppoNumeriPlayer.push(sceltaPlayer);
        } else{
            alert("l'hai mancata per un soffio , puoi continuare...per ora")
            gruppoNumeriPlayer.push(sceltaPlayer);
            punteggio++;
            
        }
    } else{
        alert("inserisci un valore valido")
    }

}
console.log("il gruppo di numeri scelti dal giocatore sono:" + gruppoNumeriPlayer)
if(beccato==true){
    console.log("sei morto facendo " + punteggio + "punti")
    console.log("il numero che l'ha portato alla morte è " + (gruppoNumeriPlayer.slice(-1)[0]))
} else { //condizioni per la vittoria
    console.log("sembra impossibile , ma hai vinto... Porta Simone in tabaccheria")
}

}



document.getElementById("easy").onclick = function () {
    var maxNumber = 101;
    var punteggioVittoria = 30;
    
   
    gioco(maxNumber, punteggioVittoria);
}
document.getElementById("normal").onclick = function () {
    var maxNumber = 81;
    var punteggioVittoria = 40;

   
    gioco(maxNumber, punteggioVittoria);
}
document.getElementById("hard").onclick = function () {
    var maxNumber = 51;
    var punteggioVittoria = 34;

 
    gioco(maxNumber,punteggioVittoria);
}


function getRandomInt(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()* (max-min)) + min; // il max è escluso il min è incluso
}

//Alternativa all'INCLUDES
/* function isIn(valore,array){
var found = false;
var i=0;
while (found == false && i < array.length){
    if(array[i] == valore)
        found= true;
    }
  i++
 }
return found;

}
 */


