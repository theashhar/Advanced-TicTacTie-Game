const cellElements = document.querySelectorAll('[cellData]')
const boardElement = document.getElementById('board')
console.log(cellElements[0])
const X_CLASS = 'x'
const CIRCLE_CLASS = 'circle'
let xTurn

// console.log(boardElement)
cellElements.forEach(cell => {     
    // cell.classList.add('circle')
    cell.addEventListener('click', clickMark, { once : true })
})
// setHoverBoardClass()


function clickMark(e) {
    cellClicked = e.target
    currentClass = xTurn ? X_CLASS : CIRCLE_CLASS
    placeMark(cellClicked, currentClass)
    switchTurns()
    setHoverBoardClass()

}

function placeMark(eachCell, newCurrentClass) {
    eachCell.classList.add(newCurrentClass)
}
function switchTurns() {
    xTurn = !xTurn 
}
function setHoverBoardClass() {
    boardElement.classList.remove(X_CLASS)
    boardElement.classList.remove(CIRCLE_CLASS)
    if (xTurn) 
    boardElement.classList.add(X_CLASS)
    else
    boardElement.classList.add(CIRCLE_CLASS)
}
console.log(boardElement)
