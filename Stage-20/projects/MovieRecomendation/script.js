
async function getSchedule(limit = 10) {
    const nowLive = document.getElementById("now-live")

    try {
        const response = await axios.get("https://api.tvmaze.com/schedule");
        const limitedShows = response.data.slice(0, limit); // Limit to 10 shows

        limitedShows.forEach((show) => {
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

        });

    } catch (error) {
        console.error("Error fetching schedule:", error);
    }
}

getSchedule();


function getRandomNumber() {
    return Math.floor(Math.random()* 100 )+2
}

async function getRandomShow(id) {
    const recommendation = document.getElementById("todays-selection")

    try {
        const response = await axios.get(`https://api.tvmaze.com/shows/${id}`)

        const randomShow = document.createElement("div")
        recommendation.appendChild(randomShow)

        randomShow.appendChild(showName)
        randomShow.appendChild(showInfo)
        randomShow.appendChild(showImg)
        
        showName.textContent = response.show.name

    } catch (error) {
        console.log("Error getting a random show")
    }
}

const randomShowBtn = document.getElementById("get-suggestion")

randomShowBtn.addEventListener('click', () => {
    getRandomShow(getRandomNumber())
})
