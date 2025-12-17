/*
todo   Consegna:
    Scrivi un programma che stampi i numeri da 1 a 100,
    ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
    Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

    Prima di partire a scrivere codice poniamoci qualche domanda:
    Come faccio a sapere se un numero è divisibile per?
    Abbiamo visto qualcosa di particolare che possiamo usare?

?   Consigli del giorno:
 
    scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
    proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

!   Buon lavoro e buon divertimento! 🙂
*/

// DATI GENERALI

/*
const firstReplacerName = "Fizz";
let FizzMultiplier = 3;
const secondReplacerName = "Buzz";
let BuzzMultiplier = 5;
const comboReplacerName = "Fizz" + "Buzz";
let FizzBuzzMultiplierCombo = (3, 5); //non mi serve

//Todo
//*  programma che stampa i numeri da 1 a 100

for(let i = 0; i <= 100; i++) {
    // se il numero è multiplo sia di 3 che 5:
    if (i % FizzMultiplier === 0 && i % BuzzMultiplier === 0 ) {
        console.log(comboReplacerName)
        
    }
    // se il numero è multiplo di 3:
    else if (i % FizzMultiplier === 0) {
        console.log(firstReplacerName)
        
    }
    // se il numero è multiplo di 5:
    else if (i % BuzzMultiplier === 0) {
        console.log(secondReplacerName)
        
    }
    // se il numero non è multiplo di entrambi (già escluso dalle precedenti condizioni)
    else {
        console.log(i)
        
    }
}
*/

const firstReplacerName = "Fizz";
let FizzMultiplier = 3;
const secondReplacerName = "Buzz";
let BuzzMultiplier = 5;

//! definizione degli stili per ogni output
const styleFizz =
  "background: #f79e19ff; color: black; padding: 2px 5px; font-weight: bold;";
const styleBuzz =
  "background: #46b5ffff; color: black; padding: 2px 5px; font-weight: bold;";
const styleFizzBuzz =
  "background: #b9f247ff; color: black; padding: 2px 5px; font-weight: bold;";

for (let i = 0; i <= 100; i++) {
  // dichiaro una variabile vuota:
  let BosseswishedOutput = "";

  // se il numero è multiplo di 3:
  if (i % FizzMultiplier === 0) {
    BosseswishedOutput += firstReplacerName;
  }

  // se il numero è multiplo di 5:
  if (i % BuzzMultiplier === 0) {
    BosseswishedOutput += secondReplacerName;
  }

  if (BosseswishedOutput !== "") {
    //! -> inizio di formattazione CSS <-
    let currentStyle = "";
    if (BosseswishedOutput === "Fizz") {
      currentStyle = styleFizz;
    } else if (BosseswishedOutput === "Buzz") {
      currentStyle = styleBuzz;
    } else if (BosseswishedOutput === "FizzBuzz") {
      currentStyle = styleFizzBuzz;
    }
    //! aggiungo segnaposto per applicare lo stile CSS definito sopra
    console.log(`%c${BosseswishedOutput}`, currentStyle);
  } else {
    console.log(i);
//  => console.log(BosseswishedOutput || i); era un altra possibile soluzione  
}
}


