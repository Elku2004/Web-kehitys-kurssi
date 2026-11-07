"use strict";

function even(taulukko) {
    let tulos = [];
    for (let i = 0; i < taulukko.length; i++) {
        if (taulukko[i] % 2 == 0) {
            tulos.push(taulukko[i])
        }
    }
    return tulos;
}

const kolmeNum = [2, 3, 4]
console.log(kolmeNum);
const vainTasaluvut = even(kolmeNum);
console.log(vainTasaluvut);