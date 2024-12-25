// Elementos del DOM
const team1Score = document.getElementById("team1-score")
const team2Score = document.getElementById("team2-score")
const timerDisplay = document.getElementById("timer-el")

// Variables de puntuación
let team1Counter = 0
let team2Counter = 0

// Variables del temporizador
let timerMinutes = 10; // Minutos iniciales
let timerSeconds = 0; // Segundos iniciales
let timerInterval;

// Inicialización de los puntajes y el temporizador
team1Score.textContent = team1Counter;
team2Score.textContent = team2Counter;

updateTimerDisplay();

// Funciones para actualizar los puntajes
const team1Sub1Points = () => { team1Counter -=1; updateScore(); }
const team1Add1Points = () => { team1Counter +=1; updateScore(); }
const team1Add2Points = () => { team1Counter +=2; updateScore(); }
const team1Add3Points = () => { team1Counter +=3; updateScore(); }


const team2Sub1Points = () => { team2Counter -=1; updateScore(); }
const team2Add1Points = () => { team2Counter +=1; updateScore(); }
const team2Add2Points = () => { team2Counter +=2; updateScore(); }
const team2Add3Points = () => { team2Counter +=3; updateScore(); }



function updateScore() {
    team1Score.textContent = team1Counter;
    team2Score.textContent = team2Counter;
    verifyScore();
}

function highlight(team) {
    team.classList = "highlight";
}

function unHighlight(team) {
    team.classList = "unhighlight";
}

function verifyScore() {
    if (team1Counter > team2Counter) {
        unHighlight(team2Score);
        highlight(team1Score);

    } else if (team2Counter > team1Counter) {
        unHighlight(team1Score);
        highlight(team2Score);

    } else {
        unHighlight(team1Score);
        unHighlight(team2Score);
    }
}

function reset() {
    team1Counter = 0;
    team2Counter = 0;

    team1Score.textContent = team1Counter;
    team2Score.textContent = team2Counter;

    unHighlight(team1Score);
    unHighlight(team2Score);

    stopTimer();
    timerMinutes = 10;
    timerSeconds = 0;
    updateTimerDisplay();
}

function updateTimerDisplay() {
    timerDisplay.value = `${String(timerMinutes).padStart(2, '0')}:${String(timerSeconds).padStart(2, '0')}`;
}

function setTimerInput() {
    const input = timerDisplay.value;
    const [minutes, seconds] = input.split(":").map(Number); // Divide el input y convierte a number value

    if (!isNaN(minutes) && minutes >= 0 && !isNaN(seconds) && seconds >= 0 && seconds < 60) {
        timerMinutes = minutes;
        timerSeconds = seconds;
    } else {
        alert("Por favor, ingresa un tiempo válido en el formato MM:SS.");
        updateTimerDisplay(); // Restaura el valor anterior si la entrada no es válida
    }
}

function startTimer() {
    setTimerInput();

    if (timerInterval) return; // Evita múltiples temporizadores

    timerInterval = setInterval(() => {
        if (timerSeconds === 0) {
            if (timerMinutes === 0) {
                clearInterval(timerInterval); // Detén el temporizador
                alert("¡Tiempo terminado!");
                return;
            } else {
                timerMinutes -= 1;
                timerSeconds = 59;
            }
        } else {
            timerSeconds -= 1;
        }
        updateTimerDisplay();
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function resetTimer() {
    stopTimer();
    timerMinutes = 10;
    timerSeconds = 0;
    updateTimerDisplay();
}

// Actualizar el tiempo cuando el usuario lo modifica
timerDisplay.addEventListener("change", setTimerInput);