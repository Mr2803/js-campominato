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

//imposto la mia variabile che sarà la condizione primaria del mio ciclo while
var beccato = false;

//creo un array vuoto che conterrà i numeri inseriti dall'utente fino alla sua "morte"
var gruppoNumeriPlayer = [];

//creo una variabile per far scegliere i numeri all'utente
var sceltaPlayer;

//creo una variabile per il punteggio che inizialmente sarà uguale a 0 , poi verrà incrementata ad ogni numero inserito dall'utente SE ha evitato la mina
var punteggio = 0;

// apro un ciclo while la cui condizione primaria è che BECCATO sia false , dovesse diventare vera il ciclo avrebbe fine
while (beccato == false){
    //faccio un prompt per far inserire all'utente i numeri tra 1 e 100 -->
    sceltaPlayer = parseInt(prompt("Scegli un numero tra 1 e 100"));
    console.log("Il numero scelto dall'utente è :" + sceltaPlayer)
    //<-- e impongo le condizioni dell IF di base con i controlli , dove impongo all'utente di inserire un numero maggiore di 0 e inferiore a 101 e gli impongo di inserire un valore numerico 
    
    if (sceltaPlayer > 0 && sceltaPlayer < 101 && !isNaN(sceltaPlayer)){
        //passo ai successivi controlli dove dico IF il numero del giocatore è gia incluso all'interno dell'array dei numeri inseriti dal giocatore tramite la funzione INCLUDES allora rilascio un prompt di avviso
        if (gruppoNumeriPlayer.includes(sceltaPlayer) == true){
            alert("Non fare il furbo , hai già inserito questo numero")
        //ELSE IF il numero inserito dal giocatore è incluso nell'array gruppoMine allora il giocatore ha perso ed è morto. In questa condizione per far interrompere il ciclo porto la variabile beccato a valore true
        }else if(gruppoMine.includes(sceltaPlayer) == true){
            alert("La mina è esplosa sei morto");
            beccato = true;
            gruppoNumeriPlayer.push(sceltaPlayer);
        // se MIRACOLOSAMENTE il giocatore ha passato tutti i miei controlli può continuare a giocare, aggiungo 1 punto alla var punteggio e pusho il numero da lui inserito all'interno dell'array gruppoNumeriPlayer
        }else{
            alert("l'hai mancata per un soffio , puoi continuare...per ora")
            gruppoNumeriPlayer.push(sceltaPlayer);
            punteggio++;
            
        }
    //(else riferito ai controlli preliminari dei valori inseriti dall'utente) invito l'utente ad inserire un valore valido
    }else{
        alert("inserisci un valore valido")
    }

}
console.log(gruppoNumeriPlayer)
//condizione che si verifica alla "morte" del giocatore , stampa il punteggio ottenuto
if(beccato==true){
    console.log("sei morto facendo " + punteggio + "punti")
}

//condizioni per la vittoria
if(punteggio == 84 && beccato == false){
    console.log("sembra impossibile , ma hai vinto... Porta simone in tabaccheria")
}

//Blocco funzioni

function getRandomInt(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()* (max-min)) + min; // il max è escluso il min è incluso
}




