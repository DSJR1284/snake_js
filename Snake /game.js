import { update as updateSnake, render as renderSnake, snakeSpeed } from './snake.js'

import { update as updateFood, render as renderFood } from './food.js'

let lastRenderTime = 0 
let endgame = false
const gameBoard = document.getElementById('game-board')

function main(currentTime) {
    window.requestAnimationFrame(main)
    const secSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secSinceLastRender < 1 / snakeSpeed)
    return lastRenderTime = currentTime     
    update() 
    render() 
}

window.requestAnimationFrame(main)

function update() {
    updateSnake()
    updateFood()
    endGame()
}

function render() {
    gameBoard.innerHTML = ''
    renderSnake(gameBoard)
    renderFood(gameBoard)
}

function endGame( {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
})

