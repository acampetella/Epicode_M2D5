/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function area(l1, l2) {
    return l1* l2;
}

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum(par1, par2) {
    let num1 = parseInt(par1);
    let num2 = parseInt(par2);

    if (num1 === num2) {
        return (num1 + num2) * 3;
    } else {
        return num1 + num2;
    }
}

/* ESERCIZIO 3
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(num) {
    let result = Math.abs(num - 19);
    if (result > 19) {
        result *= 3;
    }
    return result;
}

/* ESERCIZIO 4
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary(par) {
    let num = parseInt(par);
    if ((num > 20 && num <= 100) || num === 400) {
        return true;
    }
    return false;
}

/* ESERCIZIO 5
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function codify(str) {
    if (str.startsWith("code")) {
        return str;
    }
    return "code".concat(str);
}

/* ESERCIZIO 6
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(num) {
    if (num % 3 === 0 || num % 7 === 0) {
        return true;
    }
    return false;
}

/* ESERCIZIO 7
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reversedString(str) {
    let result = "";
    for(let i = str.length - 1; i >= 0; i--) {
        result += str.substring(i, i+1);
    }
    return result;
}

console.log(reversedString("ciao"));

/* ESERCIZIO 8
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function upperFirst(str) {
    let result = "";
    let arr = str.split(" ");
    for(let i = 0; i < arr.length; i++) {
        let newWord = arr[i].slice(0, 1).toUpperCase().concat(arr[i].slice(1));
        result += newWord;
        if (i !== arr.length - 1) {
            result += " ";
        }
    }
    return result;
}

console.log(upperFirst("ciao io vado a casa"));

/* ESERCIZIO 9
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function cutString(str) {
    return str.slice(1, str.length - 1);
}

console.log(cutString("pasticcio"));

/* ESERCIZIO 10
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom(n) {
    let arr = [];
    for(let i = 0; i < n; i++) {
        arr.push(Math.round(Math.random() * 10));
    }
    return arr;
}

console.log(giveMeRandom(5));
