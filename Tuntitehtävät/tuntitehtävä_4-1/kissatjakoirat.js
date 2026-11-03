'use strict';

//1. Korjaa linkki JavaScriptillä: 
// Koira-linkin pitää viedä oikealle Wikipedia-sivulle.
const koiralinkki = document.getElementById('koiralinkki');
koiralinkki.innerHTML = '<a href="https://fi.wikipedia.org/wiki/Koira">täältä</a>';

//2. Tässä yritetään lisätä kissalistaan uusi elementti.
// Korjaa toimivaksi.

const ol = document.querySelector('ol');
let kissalisays = document.createElement('li');
kissalisays.innerText = 'Kissat pärjäävät mainiosti yksinäänkin.';
ol.appendChild(kissalisays)


//3. Tässä yritetään lisätä koiralistaan uusi elementti. 
// Korjaa toimivaksi.

const ul = document.getElementsByTagName('ul')[0];
const koiralisays = document.createElement('li');
koiralisays.innerText = "Monet koirat palvovat omistajaansa.";
ul.appendChild(koiralisays);


//Event-esimerkki, sama kuin materiaalissa. Toimiiko?
const button = document.querySelector('button');
button.addEventListener('click', function(evt){
  alert('Elementtiä ' + evt.currentTarget.tagName + ' klikattiin');
});

let elementsArray = document.querySelectorAll("a");
elementsArray.forEach(function(elem) {
    elem.addEventListener('mouseover', function(evt){
        evt.target.style.color = "green"
    })

    elem.addEventListener('mouseout', function(evt){
        evt.target.style.color = "purple"
    })
})

//tuntitehtävä 3, esimerkki
addEventListener("keydown", function(evt){
    console.log(evt.key);
    if (evt.key === "k") {
        alert("Painoit salaista nappia!");
    }
});
