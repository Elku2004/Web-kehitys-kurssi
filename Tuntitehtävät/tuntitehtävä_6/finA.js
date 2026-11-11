async function fetchData(url){
    try {
        const response = await fetch(url)
        if(response.ok){
            const response_data = await response.json();
            return response_data
        } else {
            throw new Error
        }
    } catch (error) {
        console.log(`Virhe! Virhe! Virhe! Virhe! Virhe! Virhe! Virhe! Virhe! Virhe! Virhe! Virhe! Virhe! Tilannekoodi ${response.status}`)
    }
}

async function showPokemonTypes(event, url) {
    const pokemonData = await(fetchData(url))
    let types = (pokemonData.types)
    console.log(types)
    for (pokemonType of types) {
        console.log(pokemonType.type.name)
    }
    console.dir(event)
}

async function createPokemonView(url) {
    const pokemonData = await fetchData(url)
    const pokemonDiv = document.querySelector("#poke-content")
    for (let pokemon of pokemonData.results){
        let pokemonText = document.createElement("p");

        pokemonText.textContent = `${pokemon.name}`;

        pokemonText.addEventListener("click", (event) =>  showPokemonTypes(event, pokemon.url));

        pokemonDiv.appendChild(pokemonText);
    }
}

createPokemonView("https://pokeapi.co/api/v2/pokemon");