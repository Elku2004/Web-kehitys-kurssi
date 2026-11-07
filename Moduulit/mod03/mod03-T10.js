"use strict";

function ehdokkaidenNimet(luku) {
    let ehdokas = {}
    let ehdokkaat = []
    let nimi = "";
    for (let i = 1; i <= luku; i++) {
        nimi = prompt(`Ehdokkaan ${i} nimi`)
        ehdokas = {name: nimi, votes: 0}
        ehdokkaat.push(ehdokas);
    }
    return ehdokkaat
}

function vote(taulukko) {
    let annettuAani = prompt("Anna äänestettävän ehdokkaan nimi")
    let voteTotuus = false
    for (let i = 0; i < taulukko.length; i++) {
            if (taulukko[i].name == annettuAani) {
                taulukko[i].votes += 1
                voteTotuus = true
            }
    }
    if (voteTotuus = false) {
        console.log("Tyhjä ääni")
    }
}


let maara = prompt("Anna ehdokkaiden määrä");
let ehdokkaat = ehdokkaidenNimet(maara);
console.log(ehdokkaat);

let aanestysMaara = prompt("Kuinka monta äänestäjää")
for (let i = 0; i < aanestysMaara; i++) {
    vote(ehdokkaat);
}


ehdokkaat.sort((a, b) => {
  console.log(a, b);
  return b.votes - a.votes;
});

console.log(`Voittaja on ${ehdokkaat[0].name} ${ehdokkaat[0].votes} äänellä`)

for (let i = 0; i < ehdokkaat.length; i++) {
    console.log(`${ehdokkaat[i].name}: ${ehdokkaat[i].votes} ääntä`)
}
