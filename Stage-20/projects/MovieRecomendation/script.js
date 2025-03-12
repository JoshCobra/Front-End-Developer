const createMovieCard = (show) => {

    const card = document.createElement("div")
    card.classList.add("movie-card")

    const infoDiv = document.createElement("div")
    infoDiv.classList.add("movie-info")

    const movieName = document.createElement("div")
    movieName.classList.add("movie.name")
    movieName.textContent = show.name

}

const url = "https://api.tvmaze.com/schedule/"

const loadMovies = async () => {
    
    
}

