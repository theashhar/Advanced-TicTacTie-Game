const cellElements = document.querySelectorAll('[cellData]')
const winningMsgTextElement = document.getElementById('winningMsgText')
const boardElement = document.getElementById('board')
const resetBtnElement = document.getElementById('resetBtn')
const X_CLASS = 'x';
const CIRCLE_CLASS = 'circle';
WINNING_COMBINATIONS = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [2, 4, 6], [0, 4, 8],
]
let circleTurn

resetBtnElement.addEventListener('click', startGame)

startGame ()
function startGame () {
    winningMsgTextElement.innerText = ' '
    
    circleTurn = false
    cellElements.forEach(cell => {
        cell.classList.remove(X_CLASS)
        cell.classList.remove(CIRCLE_CLASS)
        cell.removeEventListener('click', cellClick)
        cell.addEventListener('click', cellClick, { once : true })
    })
setBoardHoverClass()
}

function cellClick(e) {
    if (winningMsgTextElement.innerText !== '' || isDraw()) {
        return; // Game has ended, prevent further moves 
        // When return is used without a value, it means "exit the function at this point."
    }
    const cell = e.target
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS 
    placeMark(cell, currentClass) //adds currentClass(x/circle) to e.target
    document.getElementById('clickSound').play()
    if (checkWin(currentClass)){
        endGame(false)
        setTimeout(() => {
            document.getElementById('victorySound').play()
        }, 500);

    }
    else if (isDraw()) {
        endGame(true)
    }
    switchTurns() 
    setBoardHoverClass()   
}    

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass)
}
function switchTurns() {
    circleTurn = !circleTurn
}
function setBoardHoverClass() {
    boardElement.classList.remove(X_CLASS)
    boardElement.classList.remove(CIRCLE_CLASS)
    if (circleTurn){
     boardElement.classList.add(CIRCLE_CLASS)
    } else {
     boardElement.classList.add(X_CLASS)
   }
}

function checkWin (currentClass) {
    return win = WINNING_COMBINATIONS.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentClass)
        })
    }) 
}

function endGame(draw) {
    if (draw) {
        winningMsgTextElement.innerText = 'Draw!'
    }
    else {
        console.log(`${circleTurn ? 'O' : 'X'}-Wins!`)
        winningMsgTextElement.innerText = `${circleTurn ? 'O' : 'X'}-Wins!`

    }
    
}
function isDraw() {
    return [...cellElements].every(cell => { //destructuring it to make an array
        return cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
    })
}
// resetBtnElement.addEventListener('click', reset)

// function reset() {
//     // winningMsgTextElement.innerText.remove('O-Wins!')
    
//     resetBtnElement.addEventListener('click', startGame)
// }

// console.log(cellElements.classList[0])