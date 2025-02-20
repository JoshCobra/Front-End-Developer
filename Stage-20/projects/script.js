const createPokeCard = (pokemon) => {

    const card = document.createElement("div")
    card.classList.add("pokemon-card")
    
    const infoDiv = document.createElement("div")
    infoDiv.classList.add("pokemon-info")

    const pokeName = document.createElement("h2")
    pokeName.classList.add("pokemon-name")
    pokeName.textContent = pokemon.name

    const typesDiv = document.createElement("div")
    typesDiv.classList.add("pokemon-types")

    pokemon.types.forEach((type) => {
        const typeSpan = document.createElement("span")
        typeSpan.classList.add("pokemon-type", type.type.name)
        typeSpan.textContent = type.type.name
        typesDiv.appendChild(typeSpan)

        if (typeSpan.textContent === "poison") {
            typeSpan.style.backgroundColor = "#7f01fe"

        } else if (typeSpan.textContent === "fire") {
            typeSpan.style.backgroundColor = "#fc6400"

        } else if (typeSpan.textContent === "water") {
            typeSpan.style.backgroundColor = "#0e87cc"

        } else if (typeSpan.textContent === "flying") {
            typeSpan.style.backgroundColor = "#d4f1f9"
        }
    })

    infoDiv.appendChild(pokeName)
    infoDiv.appendChild(typesDiv)

    const imageContainer = document.createElement("div")
    imageContainer.classList.add("pokemon-image-container")

    const image = document.createElement("img")
    image.classList.add("pokemon-image")
    image.src = pokemon.sprites.front_default
    image.alt = pokemon.name

    imageContainer.appendChild(image)

    card.appendChild(infoDiv)
    card.appendChild(imageContainer)

    return card
}

document.addEventListener("DOMContentLoaded", () => {

    axios.get("https://pokeapi.co/api/v2/pokemon", {params: {limit: 20}})
        .then((response) => {
            const pokemonGrid = document.getElementById("pokemon-grid")
            const { data } = response

            data.results.forEach((pokemon) => {
                fetch(pokemon.url)
                    .then((response) => response.json())
                    .then((pokemonData) => {

                        const pokemonCard = createPokeCard(pokemonData)
                        pokemonGrid.appendChild(pokemonCard)
                    })
            })
        })
        .catch((error) => {
            console.log("Error fetch: ", error )
        })
})