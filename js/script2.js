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
var beccato = false;


var gruppoNumeriPlayer = [];


var sceltaPlayer;


var punteggio = 0;

//Blocco funzioni
function dif1(){
    var gruppoMine = [];
    var numRand;
    var maxNumbPcUser = 101;


    while (gruppoMine.length < 16) {
        numRand = getRandomInt(1, maxNumbPcUser);
        if (gruppoMine.includes(numRand) == false) {
            gruppoMine.push(numRand);
        }
        console.log(numRand)
    }

    console.log("i numeri della morte sono : " + gruppoMine)
 
    while (beccato == false && punteggio < 84) {
   
        sceltaPlayer = parseInt(prompt("Scegli un numero tra 1 e 100"));
        console.log("Il numero scelto dall'utente è :" + sceltaPlayer)
        if (sceltaPlayer > 0 && sceltaPlayer < maxNumbPcUser && !isNaN(sceltaPlayer)) {
            if (gruppoNumeriPlayer.includes(sceltaPlayer) == true) {
                alert("Non fare il furbo , hai già inserito questo numero")
            } else if (gruppoMine.includes(sceltaPlayer) == true) {
                alert("La mina è esplosa sei morto");
                beccato = true;
                gruppoNumeriPlayer.push(sceltaPlayer);
            } else {
                alert("l'hai mancata per un soffio , puoi continuare...per ora")
                gruppoNumeriPlayer.push(sceltaPlayer);
                punteggio++;

            }
        } else {
            alert("inserisci un valore valido")
        }

    }
    console.log("il gruppo di numeri scelti dal giocatore sono:" + gruppoNumeriPlayer)
    if (beccato == true) {
        console.log("sei morto facendo " + punteggio + "punti")
        console.log("il numero che l'ha portato alla morte è " + (gruppoNumeriPlayer.slice(-1)[0]))
    } else { 
        console.log("sembra impossibile , ma hai vinto... Porta Simone in tabaccheria")
    }
}

function dif2(){
    var gruppoMine = [];
    var numRand;
    var maxNumbPcUser = 81;
    
    while (gruppoMine.length < 16) {
        numRand = getRandomInt(1, maxNumbPcUser);
        if (gruppoMine.includes(numRand) == false) {
            gruppoMine.push(numRand);
        }
        console.log(numRand)
    }

    console.log("i numeri della morte sono : " + gruppoMine)

    while (beccato == false && punteggio < 64) {
        sceltaPlayer = parseInt(prompt("Scegli un numero tra 1 e 100"));
        console.log("Il numero scelto dall'utente è :" + sceltaPlayer)

        if (sceltaPlayer > 0 && sceltaPlayer < maxNumbPcUser && !isNaN(sceltaPlayer)) {
            if (gruppoNumeriPlayer.includes(sceltaPlayer) == true) {
                alert("Non fare il furbo , hai già inserito questo numero")
            } else if (gruppoMine.includes(sceltaPlayer) == true) {
                alert("La mina è esplosa sei morto");
                beccato = true;
                gruppoNumeriPlayer.push(sceltaPlayer);
            } else {
                alert("l'hai mancata per un soffio , puoi continuare...per ora")
                gruppoNumeriPlayer.push(sceltaPlayer);
                punteggio++;

            }
        } else {
            alert("inserisci un valore valido")
        }

    }
    console.log("il gruppo di numeri scelti dal giocatore sono:" + gruppoNumeriPlayer)

    if (beccato == true) {
        console.log("sei morto facendo " + punteggio + "punti")
        console.log("il numero che l'ha portato alla morte è " + (gruppoNumeriPlayer.slice(-1)[0]))
    } else {
        console.log("sembra impossibile , ma hai vinto... Porta Simone in tabaccheria")
    }
;
}

function dif3(){
    var gruppoMine = [];
    var numRand;
    var maxNumbPcUser = 51;
    
    while (gruppoMine.length < 16) {
        numRand = getRandomInt(1, maxNumbPcUser);
        if (gruppoMine.includes(numRand) == false) {
            gruppoMine.push(numRand);
        }
        console.log(numRand)
    }

    console.log("i numeri della morte sono : " + gruppoMine)
    
    while (beccato == false && punteggio < 3) {
      
        sceltaPlayer = parseInt(prompt("Scegli un numero tra 1 e 100"));
        console.log("Il numero scelto dall'utente è :" + sceltaPlayer)
        
        if (sceltaPlayer > 0 && sceltaPlayer < maxNumbPcUser && !isNaN(sceltaPlayer)) {
           
            if (gruppoNumeriPlayer.includes(sceltaPlayer) == true) {
                alert("Non fare il furbo , hai già inserito questo numero")
           
            } else if (gruppoMine.includes(sceltaPlayer) == true) {
                alert("La mina è esplosa sei morto");
                beccato = true;
                gruppoNumeriPlayer.push(sceltaPlayer);
            } else {
                alert("l'hai mancata per un soffio , puoi continuare...per ora")
                gruppoNumeriPlayer.push(sceltaPlayer);
                punteggio++;
            }
        } else {
            alert("inserisci un valore valido")
        }

    }
    console.log("il gruppo di numeri scelti dal giocatore sono:" + gruppoNumeriPlayer)
    
    if (beccato == true) {
        console.log("sei morto facendo " + punteggio + "punti")
        console.log("il numero che l'ha portato alla morte è " + (gruppoNumeriPlayer.slice(-1)[0]))
    } else { 
        console.log("sembra impossibile , ma hai vinto... Porta Simone in tabaccheria")
    }
;
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


