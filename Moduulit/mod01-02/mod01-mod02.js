"use strict";

function randomNumero(){
    return Math.floor(Math.random() * 6 + 1);
}

function heitaNoppaa(kerrat) {
    summa = 0
    for (let i = 0; i < kerrat; i++) {
        let numero = randomNumero();
        summa += numero;
    }
    return summa
}

function laskeProsentti(nopat, tavoiteSumma) {
    let goal = 0;
    for (let i = 0; i < 10000; i++) {
        let summa = heitaNoppaa(nopat);
        if (summa == tavoiteSumma) {
            goal = goal + 1;
        }
    }
    goal = goal / 100;
    return goal
}
let summa = 0
const nopat = prompt("Monta noppaa?");
const tavoiteSumma = prompt("Mikä summa?");
const prosentti = laskeProsentti(nopat, tavoiteSumma)



document.querySelector("#welcome").innerHTML = `Todennäköisyys saada summa ${tavoiteSumma} on ${prosentti.toFixed(3)} ${`&percnt;`}`;