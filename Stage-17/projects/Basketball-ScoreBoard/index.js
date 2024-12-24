const team1Score = document.getElementById("team1-score")
const team2Score = document.getElementById("team2-score")

let team1Counter = 0
let team2Counter = 0

team1Score.textContent = team1Counter;
team2Score.textContent = team2Counter;



const team1Add1Points = () => {
    team1Counter +=1;
    team1Score.textContent = team1Counter;
    verifyScore();
}

const team1Add2Points = () => {
    team1Counter +=2;
    team1Score.textContent = team1Counter;
    verifyScore();
}

const team1Add3Points = () => {
    team1Counter +=3;
    team1Score.textContent = team1Counter;
    verifyScore();
}



const team2Add1Points = () => {
    team2Counter +=1;
    team2Score.textContent = team2Counter;
    verifyScore();
}

const team2Add2Points = () => {
    team2Counter +=2;
    team2Score.textContent = team2Counter;
    verifyScore();
}

const team2Add3Points = () => {
    team2Counter +=3;
    team2Score.textContent = team2Counter;
    verifyScore();
}



function highlight(team) {
    team.style.borderTop = "solid";
    team.style.borderColor = "red";
    team.style.borderWidth = "15px";
}

function unHighlight(team) {
    team.style = "none"
}

function verifyScore() {
    if (team1Counter > team2Counter) {
        unHighlight(team2Score);
        highlight(team1Score);

    } else if (team2Counter > team1Counter) {
        unHighlight(team1Score);
        highlight(team2Score);

    } else {
        console.log("Equipos Empatados")
    }
}



const resetScore = () => {
    team1Counter = 0;
    team2Counter = 0;

    team1Score.textContent = team1Counter;
    team2Score.textContent = team2Counter;

    unHighlight(team1Score);
    unHighlight(team2Score);
}