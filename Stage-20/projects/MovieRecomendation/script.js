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

    if (response.data.genres) {
        showInfo.textContent = `${response.data.genres[0]} - ${response.data.genres[1]}`
    } else {
        return
    }
    showImg.src = response.data.image.medium
    showRating.textContent = `Rating: ${response.data.rating.average}`
    showSummary.innerHTML = response.data.summary
}

const createSearchCard = (show) => {
    const searchResult = document.getElementById("search-result")

    const showCard = document.createElement("div")
    const showName = document.createElement("h2")
    const showImg = document.createElement("img")
    const showInfo = document.createElement("p")
    const showSummary = document.createElement("div")
    showCard.classList.add("suggested-show")

    searchResult.appendChild(showCard)
    showCard.appendChild(showName)
    showCard.appendChild(showImg)
    showCard.appendChild(showInfo)
    showCard.appendChild(showSummary)

    showSummary.classList.add("img-summary")

    showSummary.style.flexDirection = "column"
    showSummary.style.gap = "2px"

    showName.textContent = show.show.name
    showImg.src = show.show.image.medium
    showInfo.innerHTML = `<b>Type:</b> ${show.show.type} <b>Language:</b> ${show.show.language}`
    showSummary.innerHTML = show.show.summary
}

function getRandomNumber() {
    return Math.floor(Math.random()* 100 )+2
}

async function getSchedule(limit = 6) {
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
    const searchResult = document.getElementById("search-result")
    searchResult.innerHTML = ''

  try {
    const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${input}`);
    
    if (response.data.length > 0) {
        createSearchCard(response.data[0])
    } else {
        searchResult.innerHTML = `<p> No results found</p>`
        console.log("No results found.");
    }

  } catch (error) {
    console.error("Error fetching show:", error);
    searchResult.innerHTML = `<p>Error getting data.</p>`
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