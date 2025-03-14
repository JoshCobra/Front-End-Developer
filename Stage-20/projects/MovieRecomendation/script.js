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
    const imgSummaryDiv = document.createElement("div")
    const showInfo = document.createElement("p")
    const showImg = document.createElement("img")
    const showRating = document.createElement("p")
    const showSummary = document.createElement("div")
    showCard.classList.add("suggested-show")
    imgSummaryDiv.classList.add("img-summary")

    recommendation.appendChild(showCard)
    showCard.appendChild(showName)
    showCard.appendChild(showInfo)
    showCard.appendChild(imgSummaryDiv)
    imgSummaryDiv.appendChild(showImg)
    showCard.appendChild(showRating)
    imgSummaryDiv.appendChild(showSummary)

    showSummary.id = "summary"
    showRating.id = "rating"

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
getSchedule();

async function getRandomShow(id) {
    try {
        const response = await axios.get(`https://api.tvmaze.com/shows/${id}`)
        createSuggestionCard(response)

    } catch (error) {
        console.error("Error getting a random show: ", error)
    }
}

const randomShowBtn = document.getElementById("get-suggestion")
randomShowBtn.addEventListener('click', () => {
    const recommendation = document.getElementById("todays-selection");
    recommendation.innerHTML = "";
    getRandomShow(getRandomNumber());
})

async function searchShow(input) {
  try {
    const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${input}`);
    
    if (response.data.length > 0) {
        console.log("Show Name:", response.data[0].show.name, response.data[0].show.image.medium);
    } else {
        console.log("No results found.");
    }

  } catch (error) {
    console.error("Error fetching show:", error);
  }
}

const searchBtn = document.getElementById("search-btn")
searchBtn.addEventListener('click', () => {
    const input = document.getElementById("movie-search").value

    if (input) {
        searchShow(input)
    } else {
        return
    }
})