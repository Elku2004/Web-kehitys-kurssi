"use strict";

function noppaHeitto() {
    return Math.floor(Math.random() * 6 + 1)
}

const ul = document.querySelector("ul");
let num = "";

do {
    num = noppaHeitto();
    let numPaikka = document.createElement('li');
    numPaikka.innerText = num;
    ul.appendChild(numPaikka)
} while (num != 6);