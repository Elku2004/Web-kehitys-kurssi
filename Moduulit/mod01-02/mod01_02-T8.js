"use strict";

const alku = prompt("Anna alkuvuosi")
const loppu = prompt("Anna loppuvuosi")
const ul = document.querySelector('ul');
let karkausvuosi = "";
let i = alku

for (i; i <= loppu; i++) {
    if (i % 4 == 0) {
        if (i % 100 == 0 && i % 400 == 0) {
            karkausvuosi = document.createElement('li');
            karkausvuosi.innerText = `${i}`;
            ul.appendChild(karkausvuosi);
        } else if (i % 100 != 0) {
            karkausvuosi = document.createElement('li');
            karkausvuosi.innerText = `${i}`;
            ul.appendChild(karkausvuosi);
        }
    }
}
