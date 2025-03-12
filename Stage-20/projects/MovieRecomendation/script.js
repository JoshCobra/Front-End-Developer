const createMovieCard = (show) => {

    const card = document.createElement("div")
    card.classList.add("movie-card")

    const infoDiv = document.createElement("div")
    infoDiv.classList.add("movie-info")

    const movieName = document.createElement("div")
    movieName.classList.add("movie.name")
    movieName.textContent = show.show.name

}

const url = "https://api.tvmaze.com/schedule/"

const loadMovies = async () => {
    
    
}

async function getLimitedSchedule(limit = 10) {
  try {
    const response = await axios.get("https://api.tvmaze.com/schedule");

    const limitedShows = response.data.slice(0, limit); // Limit to 10 shows

    limitedShows.forEach((show, index) => {
      console.log(`${index + 1}. 📺 ${show.show.name} | ${show.name} | 🕒 ${show.airtime} | 📡 ${show.network?.name || "Streaming"}`);
    });

  } catch (error) {
    console.error("Error fetching schedule:", error);
  }
}

getLimitedSchedule();

