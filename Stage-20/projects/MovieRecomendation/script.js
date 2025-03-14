const createShowCard = (show) => {
    const nowLive = document.getElementById("now-live")

    const showCard = document.createElement("div")
    const showName = document.createElement("h2")
    const showInfo = document.createElement("p")
    const showImg = document.createElement("img")
    showCard.classList.add("show-card")

    nowLive.appendChild(showCard)
    showCard.appendChild(showName)
    showCard.appendChild(showInfo)
    showCard.appendChild(showImg)

    showName.textContent = show.show.name
    showInfo.textContent = `${show.name} - Airtime: ${show.airtime}`
    showImg.src = show.show.image.medium
}

const createSuggestionCard = (response) => {
    const recommendation = document.getElementById("todays-selection")

    const showCard = document.createElement("div")
    const showName = document.createElement("h2")
    const showInfo = document.createElement("p")
    const showImg = document.createElement("img")
    const showRating = document.createElement("p")
    const showSummary = document.createElement("div")
    showCard.classList.add("show-card")

    recommendation.appendChild(showCard)
    recommendation.appendChild(showName)
    recommendation.appendChild(showInfo)
    recommendation.appendChild(showImg)
    recommendation.appendChild(showRating)
    recommendation.appendChild(showSummary)

    showName.textContent = response.data.name
    showInfo.textContent = `${response.data.genres[0]} - ${response.data.genres[1]}`
    showImg.src = response.data.image.medium
    showRating.textContent = `Rating: ${response.data.rating.average}`
    showSummary.innerHTML = response.data.summary
}

function getRandomNumber() {
    return Math.floor(Math.random()* 100 )+2
}

async function getSchedule(limit = 10) {
    try {
        const response = await axios.get("https://api.tvmaze.com/schedule");
        const limitedShows = response.data.slice(0, limit); // Limit to 10 shows

        limitedShows.forEach((show) => {
            createShowCard(show)
        });

    } catch (error) {
        console.error("Error fetching schedule: ", error);
    }
}

async function getRandomShow(id) {
    try {
        const response = await axios.get(`https://api.tvmaze.com/shows/${id}`)
        createSuggestionCard(response)
        console.log(response)

    } catch (error) {
        console.log("Error getting a random show: ", error)
    }
}

const randomShowBtn = document.getElementById("get-suggestion")

randomShowBtn.addEventListener('click', () => {
    getRandomShow(getRandomNumber())
})

getSchedule();