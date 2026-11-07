"use strict";

let numerot = [];
let numero = "";

do {
    numero = prompt("Anna numero :D");
    numerot.push(numero);
} while (numero != 0);

numerot.sort((a, b) => a - b);
numerot.reverse();


for (let i = 0; i <= numerot.length; i++) {
    console.log(numerot[i])
}
