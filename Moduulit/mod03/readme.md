## Moduuli 03 tehtävät

# Tehtävä 1
const numerot = [];
const numerot2 = [];
let i = 1;
do {
    let num = prompt(`Anna numero ${i} :`);
    numerot.push(num)
    i++
} while (i < 6);

console.log(numerot);
console.log(numerot.length);

let j = 1;
do {
    numerot2.push(numerot[numerot.length - 1]);
    numerot.pop();
    j++;
} while (j < 6)

console.log(numerot2);

# Tehtävä 2

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

# Tehtävä 3

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