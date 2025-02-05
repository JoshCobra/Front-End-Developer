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

    fetch
})