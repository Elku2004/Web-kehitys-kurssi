"use strict";

const sum = "+";
const subtr = "-";
const multi = "*";
const divis = "/"

const button = document.getElementById("start");

function teeLasku() {
    const lasku = document.querySelector("input[id=calculation]").value
    if (lasku.includes("+")){
        console.log("Includes sum")
    }
}

button.addEventListener("click", teeLasku)