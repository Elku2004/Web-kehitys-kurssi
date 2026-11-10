"use strict";

const ul = document.querySelector("#target")
ul.classList.add("my-list")
let lista1 = document.createElement('li');
lista1.innerHTML = "<li>First item</li>"
let lista2 = document.createElement('li');
lista2.innerHTML = "<li>Second item</li>"
lista2.classList.add("my-item");
let lista3 = document.createElement('li');
lista3.innerHTML = "<li>Third item</li>"

ul.appendChild(lista1)
ul.appendChild(lista2)
ul.appendChild(lista3)