"use strict";

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
