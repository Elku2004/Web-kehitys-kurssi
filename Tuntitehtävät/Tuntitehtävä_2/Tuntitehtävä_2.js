"use strict";

console.log("Hello World")

let teksti = document.querySelector("#result");
teksti.textContent = "Hi World!!!"

document.getElementById("calc").addEventListener("click", () => {
    let priceInput = document.querySelector("#price");
    let qtyInput = document.querySelector("#qty");
    let promoInput = document.querySelector("#promo");

    const price = parseInt(priceInput.value);
    const qty = parseInt(qtyInput.value)
    const promoCode = promoInput.value;

    let total_price = price * qty

    if (promoCode == "ale") {
        total_price = total_price * 0.7
    } else if (promoCode == "Elias") {
        total_price *= 0.5
    }

    switch(promoCode) {
        case "ale": 
            total_price *= 0.7
            break;
        case "Elias":
            total_price *= 0.1
            break;
        default:
            console.log("Ei alennusta");
    }

    let tekstikappale = document.querySelector("#result");
    tekstikappale.textContent = `Hinta: ${total_price}`;

})