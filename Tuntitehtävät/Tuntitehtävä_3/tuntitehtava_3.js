"use strict";

let taulukko = [];

console.log("Moi2")
for (let i = 1; i <= 5; i++) {
    let nimi = prompt("Anna nimi");
    taulukko.push(nimi)
}

document.querySelector("#kaikki").innerHTML = taulukko
document.querySelector("#vika").innerHTML = taulukko[taulukko.length-1]
taulukko.sort();
document.querySelector("#sort").innerHTML = taulukko[0]
taulukko.shift();
document.querySelector("#muokattu").innerHTML = taulukko



