const createMovieCard = (show) => {

    const card = document.createElement("div")
    card.classList.add("movie-card")

    const infoDiv = document.createElement("div")
    infoDiv.classList.add("movie-info")

    const movieName = document.createElement("div")
    movieName.classList.add("movie.name")
    movieName.textContent = show.show.name

}

const scheduleURL = "https://api.tvmaze.com/schedule/"

const loadMovies = async () => {
    
    
}

async function getSchedule(limit = 10) {

    const nowLive = document.getElementById("now-live")

    try {
        const response = await axios.get("https://api.tvmaze.com/schedule");
        const limitedShows = response.data.slice(0, limit); // Limit to 10 shows

        limitedShows.forEach((show) => {
            const showCard = document.createElement("div")
            const showName = document.createElement("h2")
            const showInfo = document.createElement("p")
            showCard.classList.add("show-card")
        
            nowLive.appendChild(showCard)
            showCard.appendChild(showName)
            showCard.appendChild(showInfo)

            showName.textContent = show.show.name
            showInfo.textContent = show.name

        });

    } catch (error) {
        console.error("Error fetching schedule:", error);
    }
}

getSchedule();



