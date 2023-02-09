// Esercizi aggiuntivi

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray", che riceve come parametro un array di numeri random (creati con giveMeRandom)
 e stampa in console, per ogni oggetto, true/false a seconda che il numero sia più grande di 5 o no.
 La funzione deve infine tornare la somma di solamente i numeri che sono risultati maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom(n) {
    let arr = [];
    for(let i = 0; i < n; i++) {
        arr.push(Math.round(Math.random() * 10));
    }
    return arr;
}

function checkArray(arr) {
    let somma = 0;
    for(let element of arr) {
        if (element > 5) {
            console.log(true);
            somma += element;
        }
        else {
            console.log(false);
        }
    }
    return somma;
}

let arr = giveMeRandom(10);
console.log(arr);
console.log(checkArray(arr));

/* EXTRA 2
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const shoppingCart = [
    {
      id: 321,
      name: 'Bluetooth Headphones',
      price: 100,
      quantity: 2,
    },
    {
      id: 123,
      name: 'Laptop',
      price: 1000,
      quantity: 1,
    },
    {
      id: 213,
      name: 'USB Drive',
      price: 20,
      quantity: 5,
    },
  ];

function shoppingCartTotal() {
    let totale = 0;
    for(let element of shoppingCart) {
        totale += element.price * element.quantity;
    }
    return totale;
}

console.log(shoppingCartTotal());

/* EXTRA 3
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto, lo aggiunge allo shoppingCart e ritorna il numero totale degli oggetti in esso contenuti.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const newItem = {
    id: 132,
    name: 'Wireless Keyboard',
    price: 30,
    quantity: 2,
  };

function addToShoppingCart(item) {
    shoppingCart.push(item);
    return shoppingCart.length;
}

console.log(addToShoppingCart(newItem));

/* EXTRA 4
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array shoppingCart e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function maxShoppingCart(shoppingCart) {
    let object = shoppingCart[0];
    for(let i = 1; i < shoppingCart.length; i++) {
        if (shoppingCart[i].price > object.price) {
            object = shoppingCart[i];
        }
    }
    return object;
}

console.log(maxShoppingCart(shoppingCart));

/* EXTRA 5
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array shoppingCart e ritorna l'ultimo oggetto in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function latestShoppingCart(shoppingCart) {
    return shoppingCart[shoppingCart.length - 1];
}

console.log(latestShoppingCart(shoppingCart));

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve come parametro un intero "x" compreso tra 0 e 9.
 La funzione mostra in console un numero casuale tra 0 e 9 finchè il numero estratto è maggiore di x per 3 volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function loopUntil(x) {
    let counter = 0;
    while (counter !== 3){
       let random = Math.floor(Math.random() * 10)
       console.log(random);
       if(random > x){
        counter++;
       } else {
        counter === 0;
       }
    }
}

/* EXTRA 7
 Crea una funzione chiamata "average" che riceve un array come parametro e ritorna la media aritmetica dei numeri in esso contenuti.
 La funzione salta automaticamente qualsiasi valore non numerico all'interno dell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function average(arr) {
    let somma = 0;
    let count = 0;
    for(let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            somma += arr[i];
            count++;
        }
    }
    let media = somma / count;
    return media;
}

console.log(average([2, 5, 8, "ciao", "miao", 9]));

/* EXTRA 8
 Scrivi una funzione chiamata "longest" che ricerca la stringa più lunga all'interno del parametro ricevuto (un array di stringhe).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function longest(arr) {
    let str = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if (arr[i].length > str.length) {
            str = arr[i];
        }
    }
    return str;
}

/* EXTRA 9
 Scrivi una funzione per creare un filtro anti spam molto semplice per una casella email. La funzione riceve una stringa come parametro, "emailContent", e ritorna un boolean.
 La funzione deve tornare true se emailContent NON contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function antiSpamFilter(emailContent) {
    if (emailContent.toUpperCase().includes("SPAM") || emailContent.toUpperCase().includes("SCAM")) {
        return false;
    }
    return true;
}

/* EXTRA 10
 Scrivi una funzione che riceve come parametro una data e ritorna il numero di giorni passati ad oggi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function getDays(date) {
    let now = Date.now();
    let d = Date.parse(date);
    let diff = now - d;
    let days = parseInt(diff / 86400000);
    return days;
}

console.log(getDays("2022-02-09"));

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due interi, "x" e "y".
 La funzione deve tornare una matrice di x volte y, e ogni valore deve rappresentare l'indice dell'elemento.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function matrixGenerator(x, y) {
    let matrix = [];
    for(let row = 0; row < x; row++) {
        let rowArr = []
        for(let column = 0; column < y; column++) {
            rowArr.push(row + "" + column);
        }
        matrix.push(rowArr);
    }
    return matrix;
}

console.log(matrixGenerator(4, 3));
