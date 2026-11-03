"use strict";

function randomNumero(){
    return Math.floor(Math.random() * 6 + 1);
}

function heitaNoppaa(kerrat) {
    for (let i = 0; i < kerrat; i++) {
        let numero = randomNumero();
        console.log(numero)
        summa += numero;
    }
    return summa
}

let summa = 0
const kerrat = prompt("Monta kertaa");
const lopputulos = heitaNoppaa(kerrat);
document.querySelector("#welcome").innerHTML = `${lopputulos}`