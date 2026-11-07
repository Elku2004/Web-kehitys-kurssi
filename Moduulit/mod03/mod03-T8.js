"use strict";

function concat(taulukko) {
    let paluuArvo = "";
    for (let i = 0; i < taulukko.length; i++) {
        paluuArvo += taulukko[i];
    }
    console.log(paluuArvo);
}

var taulukko = ["Johnny", "DeeDee", "Joey", "Marky"]
console.log(taulukko);
concat(taulukko);