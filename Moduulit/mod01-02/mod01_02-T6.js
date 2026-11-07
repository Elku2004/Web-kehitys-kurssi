"use strict";

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
