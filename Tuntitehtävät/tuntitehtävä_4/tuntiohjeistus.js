"use strict";

let timerID = null;

function startMakingBoxes(){
    console.log("Starting making boxes...");
    timerID = setInterval(timedAction, 499);
}

function stopMakingBoxes(){
    console.log("Stopping making boxes...");
    clearInterval(timerID);
}

function deleteBox(evt) {
    let parentDiv = evt.currentTarget.parentElement
    parentDiv.removeChild(evt.currentTarget)
}

function endGame(){
    stopMakingBoxes();
    document.querySelector("#endscreen").innerHTML = "PELI LOPPUI";
    document.querySelector(".box").innerHTML = "";
}

function checkEnd(){
    let boxDiv = document.querySelector(".box");
    let pageHeight = document.documentElement.clientHeight;
    let boxHeight = boxDiv.offsetTop + boxDiv.offsetHeight
    if (pageHeight <= boxHeight)
        endGame();
}

function timedAction() {
    let boxDiv = document.querySelector(".box");

    //tee uusi tekstielementti
    let newPara = document.createElement("p");
    newPara.textContent = "I am a box!!!";
    newPara.setAttribute("class", "div-green");
    newPara.addEventListener("click", deleteBox)
    
    //lisää uusi elementti div:in lapseksi
    boxDiv.appendChild(newPara);
    console.log("Aika");
    checkEnd();
}

let startButton = document.getElementById("start");
startButton.addEventListener("click", startMakingBoxes);


let stopButton = document.getElementById("end");
stopButton.addEventListener("click", stopMakingBoxes);

let heading = document.getElementById("main-heading");
console.log(heading)

let paragraphs = document.getElementById("p");
console.log(paragraphs)