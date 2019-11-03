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

    document.getElementById("numeriBomba").innerHTML = "I numeri bomba erano : " + "[" + "<span>" + gruppoMine.sort(function (a, b) { return a - b }) + "</span>" + "]"; 



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

    document.getElementById("gruppoNumeriUser").innerHTML = "Il gruppo di numeri che hai scelto sono: " + "[" + "<span>" + gruppoNumeriPlayer + "</span>" + "]";

if(beccato==true){
    document.getElementById("score").innerHTML = "Sei morto totalizzando un punteggio di: " + "<span>" + punteggio + "</span>" + " punti";
    document.getElementById("deathNumber").innerHTML = "Il numero che ti ha portato alla morte è : " + "<span>" + gruppoNumeriPlayer.slice(-1)[0] + "</span>"
} else { //condizioni per la vittoria
    document.getElementById("victory").innerHTML = "Sembra impossibile, ma hai vinto...Porta Simone in tabaccheria";

}

}



document.getElementById("easy").onclick = function () {
    var numMax = 101;
    var victory = 30;
    gioco(numMax, victory);
}
document.getElementById("normal").onclick = function () {
    var numMax = 81;
    var victory = 40;
    gioco(numMax, victory);
}
document.getElementById("hard").onclick = function () {
    var numMax = 51;
    var victory = 34;
    gioco(numMax, victory);
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


