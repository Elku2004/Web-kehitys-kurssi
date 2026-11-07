"use strict";

let numerotaulukko = []
for (let i = 0; i < 3; i++) {
    let numero = parseInt(prompt("Anna numero:"));
    numerotaulukko.push(numero)
}

let summa = 0
for (let i = 0; i < 3; i++) {
    summa += numerotaulukko[i]
}

let keskiarvo = summa / numerotaulukko.length

let tulo = numerotaulukko[2]
for (let i = 0; i < 2; i++) {
    tulo *= numerotaulukko[i]
}

document.querySelector("#summa").innerHTML = summa
document.querySelector("#keskiarvo").innerHTML = keskiarvo
document.querySelector("#tulo").innerHTML = tulo 
