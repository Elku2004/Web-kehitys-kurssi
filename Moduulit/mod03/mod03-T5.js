"use strict";

let numerot = [];
do {
    let numero = prompt("Anna luku")
    if (numero in numerot) {
        alert("Numero on jo syötetty")
        break;
    }
    numerot.push(numero);
} while (true)

numerot.sort((a, b) => a - b);
console.log(numerot);

