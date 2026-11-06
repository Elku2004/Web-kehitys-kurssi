"use strict";

let maara = prompt("Kuinka monta osallistujaa: ");
let i = 1
let henkilo = "";
const ol = document.querySelector('ol');
let osallistuja = "";

do {
    let nimi = prompt("Osallistujan nimi: ")
    if (henkilo = "") { null
    } else {
        osallistuja = document.createElement('li');
        osallistuja.innerText = `${nimi}`;
        ol.appendChild(osallistuja);
    }
    i++
} while (i <= maara)