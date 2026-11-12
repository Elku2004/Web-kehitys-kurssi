"use strict";
const hoverable = document.querySelector("#trigger")
let image = document.querySelector("#target")
hoverable.addEventListener("mouseover", function(evt) {
    image.setAttribute("src", "img/picB.jpg");
});

hoverable.addEventListener("mouseout", function(evt) {
    image.setAttribute("src", "img/picA.jpg");
});