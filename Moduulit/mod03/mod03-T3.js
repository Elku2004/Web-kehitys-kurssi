"use strict";

let koira = "";
const koirat = [];
const ul = document.querySelector("ul");
let koiraElement = "";

for (let i = 1; i <= 6; i++) {
    koira = prompt("Anna koiran nimi");
    koirat.push(koira);
}
koirat.sort();
koirat.reverse();

for (let i = 0; i < koirat.length; i++) {
    koiraElement = document.createElement("li")
    koiraElement.innerText = `${koirat[i]}`;
    ul.appendChild(koiraElement);
}
