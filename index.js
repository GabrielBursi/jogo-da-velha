const boardRegions = document.querySelectorAll("#gameBoard span");
let vBoard = []
let turnPlayer = ''

function updateTitle(){
    const playerInput = document.getElementById(turnPlayer)
    if(playerInput.value === '' || playerInput.value === undefined || playerInput.value === null){
        alert('Insira um nome')
    }else{
        document.getElementById("turnPlayer").innerText = playerInput.value
    }
}

function initializeGame(){
    vBoard = [['','',''],['','',''],['','','']]
    turnPlayer = 'player1'
    document.querySelector('h2').innerHTML = 'Vez de : <span id="turnPlayer"></span>'
    updateTitle()
    boardRegions.forEach(e => {
        e.classList.remove('win')
        e.innerText = ''
        e.classList.add('cursor-pointer')
        e.addEventListener("click", handleBoardClick);
    })
}

document.getElementById('start').addEventListener("click", initializeGame);