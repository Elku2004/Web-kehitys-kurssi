async function fetchData(){
    console.log("Funktio alkaa, tehdään kutsu")
    const response = await fetch("https://pokeapi.co/api/v2/pokemon")
    console.log("kutsu on valmis")
    if(response.ok){
        console.log("Haetaan vastauksen data")
        const response_data = await response.json
        console.log("Vastauksen data haettu")
    }
}

console.log("Pääohjelma alkaa")
fetchData()
for (let i = 1; i != 0; i++) {
    console.log(`${i} rivi funktiokutsun jälkeen`)
}