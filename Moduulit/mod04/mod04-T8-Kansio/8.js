"use strict";


function teeLasku() {
    let lasku = document.getElementById("operation").value
    const num1 = parseInt(document.querySelector("input[id=num1]").value)
    const num2 = parseInt(document.querySelector("input[id=num2").value)
    if (lasku == "add") {
        vastaus = num1 + num2
        document.getElementById("result").innerHTML = vastaus
    } else if (lasku == "sub") {
        document.getElementById("result").innerHTML = num1 - num2
    } else if (lasku == "multi") {
        document.getElementById("result").innerHTML = num1 * num2
    } else {
        document.getElementById("result").innerHTML = num1 / num2
    }
}
let vastaus = "";
const button = document.querySelector("#start")
button.addEventListener("click", (event) => teeLasku(event))