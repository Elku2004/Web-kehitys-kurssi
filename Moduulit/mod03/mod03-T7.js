"use strict";

function noppaHeitto(max) {
    return Math.floor(Math.random() * max + 1)
}

const ul = document.querySelector("ul");
let num = "";

let tahkot = prompt("Kuinka monta tahkoa nopassa?")
do {
    num = noppaHeitto(tahkot);
    let numPaikka = document.createElement('li');
    numPaikka.innerText = num;
    ul.appendChild(numPaikka)
} while (num != tahkot);