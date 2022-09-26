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

function disableRegion(element){
    element.style.cursor = 'default'
    element.removeAddListener("click", handleBoardClick)
}

function handleBoardClick(e){
    const span = e.currentTarget
    const region = span.dataset.region 
    const rowColumnPair = region.split('.') 
    const row = rowColumnPair[0]
    const column = rowColumnPair[1]

    if(turnPlayer === 'player1'){
        span.innerText = "X"
        vBoard[row][column] = "X"
    }else{
        span.innerText = "O";
        vBoard[row][column] = "O"
    }
    disableRegion(span)
}

document.getElementById('start').addEventListener("click", initializeGame);