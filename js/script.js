/* Consegna L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata,
in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro (o simili, l’importante è dare all’utente il feedbaseconda

/* seconda consegna Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
I numeri nella lista delle bombe non possono essere duplicati.
In seguito l’utente clicca su ogni cella:
se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina,
altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.
(come detto sull’effetiva interfaccia fate voi, non ci son specifiche vincolanti, ma partite semplici)
La partita termina quando il giocatore clicca su una bomba
o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve scoprire tutte le bombe e comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato un quadratino con un numero consentito. (quindi se ci pensate dovrete tenere traccia del punteggio). */


//una volta creata una struttura base sull'html provando le dimensioni.
//1.creo tre varianti di gioco Facile,Medio,Difficile
    //1.1 Creo una funzione generale che mi faciliti la creazione dei contenitori
    //1.2 la variante Facile sara un contenitore con griglia a 100
    //1.3 la variante Media sara un  contenitore con griglia a 81
    //1.4 la variante Difficile sara un  contenitore con griglia a 49


//2.chiedo all'utente a che difficolta vuole giocare
    //2.2 se l'utente sceglie Facile 
// apparira la griglia a 100
    //2.3 se l'utente sceglie Medio
// apparira la griglia a 81
    //2.4 se l'utente scleglie Difficile
// apparira la griglia a 49

//3.faccio si che i quadrati siano cambiati di colore tramite il click


//1.creiamo una funzione che genera 16 numeri random
    //1.1in base alla griglia in cui ci troviamo
        //2.i numeri rando varieranno da 1-100, 1-81, 1-49
        //2.1.i numeri non potranno essere doppioni
    //3.quando l'utente clicca sui riquadri
        //3.1se il numero e presente tra quelli generati random
            //ha trovato una bomba
                //la casella diventa rossa
                    //e tutte le bombe vengono svelate(sempre rosse)
            //il gioco termina
        //3.2se non e presente va avanti il gioco
            //tenendo traccia delle caselle vuote trovate
                //il gioco termina se l'utente svela tutte le caselle senza bomba




const difficoltaScelta = prompt("scegli tra FACILE,MEDIO,DIFFICILE");
const numeroDiquadrati = document.getElementById("campominato");
var punteggio =



let livello;
if (difficoltaScelta === "facile") {
    livello = 49;
} else if (difficoltaScelta === "medio") {
    livello = 81;
} else if (difficoltaScelta === "difficile") {
    livello = 100;
};

let RisultatoLiv;
if (livello === 49) {
    RisultatoLiv = "facile"
} else if (livello === 81) {
    RisultatoLiv = "medio"
} else if (livello === 100) {
    RisultatoLiv = "difficile"
};

let mina = creaBombe (livello);

for (let i = 1; i <= livello; i++) {
    let creaQuadrati = generaElemento("div", RisultatoLiv,);
    creaQuadrati.setAttribute("id",i);
    creaQuadrati.addEventListener("click",

        function () {
            let id = parseInt(creaQuadrati.id);
            creaQuadrati.classList.add("active");
            creaQuadrati.innerText = i;
            if(mina.includes(id)) {
                creaQuadrati.classList.add("bomba");
                
            }
        });
    numeroDiquadrati.append(creaQuadrati);

};




//FUNZIONI


function generaElemento(elementoGen, classAD) {
    let node = document.createElement(elementoGen);
    node.classList.add(classAD);
    return node
}

function creaBombe(somma1){
    const bomba =[];
    while(bomba.length < 16){
        let RandomBomba = Math.floor(Math.random()*somma1) + 1;
        console.log("numero generato = " + RandomBomba);
        let controllo = bomba.includes(RandomBomba)
            if(controllo == false){
                bomba.push(RandomBomba);
            }
    }
    return bomba;
}



