const meowSound = new Audio("meow.mp3");

const startScreen = document.getElementById("startScreen");
const gameScreen = document.getElementById("gameScreen");
const gameOverScreen = document.getElementById("gameOverScreen");

const startButton = document.getElementById("startButton");
const restartButton = document.getElementById("restartButton");

const cat = document.getElementById("cat");
const gameArea = document.getElementById("gameArea");

const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");

const finalScore = document.getElementById("finalScore");
const gameMessage = document.getElementById("gameMessage");
const finalMessage = document.getElementById("finalMessage");


let score = 0;
let timeLeft = 30;
let timer;


/* =========================
   START GAME
========================= */

startButton.addEventListener("click", startGame);

restartButton.addEventListener("click", startGame);


function startGame() {

    score = 0;
    timeLeft = 30;

    scoreDisplay.textContent = score;
    timerDisplay.textContent = timeLeft;

    startScreen.classList.add("hidden");
    gameOverScreen.classList.add("hidden");

    gameScreen.classList.remove("hidden");

    moveCat();

    clearInterval(timer);

    timer = setInterval(() => {

        timeLeft--;

        timerDisplay.textContent = timeLeft;

        if (timeLeft <= 0) {
            endGame();
        }

    }, 1000);
}


/* =========================
   CATCH CAT
========================= */

cat.addEventListener("click", catchCat);


function catchCat() {

    score++;

    scoreDisplay.textContent = score;

    // Play the real cat sound
    meowSound.currentTime = 0;
    meowSound.play();

    changeMessage();

    moveCat();
}


/* =========================
   MOVE CAT
========================= */

function moveCat() {

    const areaWidth = gameArea.clientWidth;
    const areaHeight = gameArea.clientHeight;

    const catSize = 90;

    const maxX = areaWidth - catSize;
    const maxY = areaHeight - catSize;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    cat.style.left = `${randomX}px`;
    cat.style.top = `${randomY}px`;
}


/* =========================
   FUNNY MESSAGES
========================= */

function changeMessage() {

    if (score === 1) {

        gameMessage.textContent =
            "HEY! 😾";

    } else if (score === 3) {

        gameMessage.textContent =
            "STOP CHASING ME 😭";

    } else if (score === 5) {

        gameMessage.textContent =
            "Okay... you're getting lucky.";

    } else if (score === 8) {

        gameMessage.textContent =
            "WHY ARE YOU SO GOOD?! 😭";

    } else if (score === 10) {

        gameMessage.textContent =
            "I HAVE HAD ENOUGH.";

    } else if (score >= 15) {

        gameMessage.textContent =
            "THIS IS PERSONAL NOW. 😾";
    }
}


/* =========================
   GAME OVER
========================= */

function endGame() {

    clearInterval(timer);

    gameScreen.classList.add("hidden");

    gameOverScreen.classList.remove("hidden");

    finalScore.textContent = score;

    if (score === 0) {

        finalMessage.textContent =
            "The cat wasn't even worried. 😭";

    } else if (score < 5) {

        finalMessage.textContent =
            "The cat absolutely destroyed you. 🐈";

    } else if (score < 10) {

        finalMessage.textContent =
            "Okay... not bad. 😼";

    } else if (score < 15) {

        finalMessage.textContent =
            "THE CAT IS IMPRESSED. 🐈✨";

    } else {

        finalMessage.textContent =
            "HOW DID YOU CATCH ME THAT MANY TIMES?! 😭";
    }
}