# Tehtävä 1
console.log("Printtaan konsoliin!");

# tehtävä 2
let nimi = prompt("Anna nimi:");
console.log(`Hei ${nimi}`)
document.querySelector("#welcome").innerHTML = `Hei ${nimi}`

# Tehtävä 3
let numerotaulukko = []
for (let i = 0; i < 3; i++) {
    let numero = parseInt(prompt("Anna numero:"));
    numerotaulukko.push(numero)
}

let summa = 0
for (let i = 0; i < 3; i++) {
    summa += numerotaulukko[i]
}

let keskiarvo = summa / numerotaulukko.length

let tulo = numerotaulukko[2]
for (let i = 0; i < 2; i++) {
    tulo *= numerotaulukko[i]
}

document.querySelector("#summa").innerHTML = summa
document.querySelector("#keskiarvo").innerHTML = keskiarvo
document.querySelector("#tulo").innerHTML = tulo 

# Tehtävä 4

function randomNumero(max){
    return Math.floor(Math.random() * (max)+1);
}

function valitseTupa(max){
    let luku = randomNumero(max);
    let teksti = "";
    console.log(luku)
    if (luku == 1) {
        teksti = "Rohkelikko";
    } else if (luku == 2) {
        teksti = "Puuskupuh";
    } else if (luku == 3) {
        teksti = "Luihunen";
    } else if (luku == 4) {
        teksti = "Korpinkynsi";
    }   
    console.log(luku)
    console.log(teksti)
    return teksti
}


let nimi = prompt("Anna nimi:");
let tupa = valitseTupa(4);
document.querySelector("#welcome").innerHTML = `Hei ${nimi}. Sinä olet ${tupa}`

# Tehtävä 5

let vuosi = prompt("Anna vuosiluku:");

if (vuosi % 4 == 0) {
    if (vuosi % 100 == 0 && vuosi % 400 == 0) {
        document.querySelector("#welcome").innerHTML = "Vuosi on karkausvuosi";
    } else if (vuosi % 100 != 0) {
        document.querySelector("#welcome").innerHTML = "Vuosi on karkausvuosi";
    } else {
        document.querySelector("#welcome").innerHTML = "Vuosi ei ole karkausvuosi";
    }
} else {
    document.querySelector("#welcome").innerHTML = "Vuosi ei ole karkausvuosi";
}

# Tehtävä 6

let answer = confirm("Lasketaanko neliöjuuri?");
if (answer == true) {
    answer = prompt("Anna luku:")
    if (answer < 0) {
        document.querySelector("#welcome").innerHTML = "Negatiivisen luvun neliöjuurta ei ole määritelty.";
    } else {
        answer = Math.sqrt(answer);
        document.querySelector("#welcome").innerHTML = `${answer}`
    }
} else {
    document.querySelector("#welcome").innerHTML = "Neliöjuurta ei lasketa";
}

# Tehtävä 7

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

# Tehtävä 8

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

# Tehtävä 9

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

# Tehtävä 10

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