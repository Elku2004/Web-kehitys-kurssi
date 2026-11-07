"use strict";

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
