"use strict";

const luku = prompt("Anna luku")
let i = 1
do {
    console.log(i)
    if (i == luku) {
        document.querySelector("#welcome").innerHTML = `Luku ${luku} on alkuluku`;
    } else if (luku % i == 0 && i != 1) {
        document.querySelector("#welcome").innerHTML = `Luku ${luku} ei ole alkuluku`;
        break;
    }
    i++
} while (i <= luku);
