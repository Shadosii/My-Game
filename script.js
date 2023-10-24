let score = 0;
let scoreBoard = document.getElementById("scoreBoard");
let message = document.getElementById("message");
let timer;
let timeLeft = 15;
let balloonsClicked = 0; 

document.addEventListener('DOMContentLoaded', startGame);

document.getElementById("restart").addEventListener('click', restartGame);

function startGame() {
    startTimer(); 
    const balloons = document.querySelectorAll(".yellowBalloon, .redBalloon");

    balloons.forEach((balloon) => {
        balloon.addEventListener('click', () => {
            if (balloon.classList.contains("yellowBalloon")) {
                score++;
            } else if (balloon.classList.contains("redBalloon")) {
                score--;
            }

            balloon.style.visibility = "hidden";
            scoreBoard.textContent = score; // Uppdatera poängen på sidan
            balloonsClicked++;

            if (balloonsClicked === balloons.length) {
                endGame();
            }
        });
    });
}


function startTimer() {
    timer = setInterval(function () {
        timeLeft--;

        if (timeLeft < 0) {
            clearInterval(timer);
            endGame();
        } else {
            document.getElementById('timer').textContent = `Time left: ${timeLeft} seconds`;
        }
    }, 1000);
}

function endGame() {
    if (score === 23 && balloonsClicked === 23) {
        message.style.backgroundColor = "Yellow";
        gameResult.textContent = "Well Done! You Won";
    } else {
        message.style.backgroundColor = "Red";
        gameResult.textContent = "Game Over";
    }
    message.style.display = "block"; 
}

function restartGame() {
    clearInterval(timer);
    timeLeft = 15;
    document.getElementById('timer').textContent = `Time left: ${timeLeft} seconds`;
    balloonsClicked = 0;
    score = 0;
    scoreBoard.textContent = score;
    const allBalloons = document.querySelectorAll(".yellowBalloon, .redBalloon");
    allBalloons.forEach((balloon) => {
        balloon.style.visibility = "visible";
    });
    message.textContent = "";
}




