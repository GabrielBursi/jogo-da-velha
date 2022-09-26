const nameP1 = document.getElementById('player1')
const nameP2 = document.getElementById("player2");
const playerTurn = document.getElementById("turnPlayer");

const div = document.querySelector(".none")
div.style.display = "none"

const btnStart = document.getElementById("start");
btnStart.addEventListener("click", () => {
    div.style.display = "";
    playerTurn.innerHTML = nameP1.value
})