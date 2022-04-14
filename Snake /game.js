import { update as updateSnake, render as renderSnake, snakeSpeed } from './snake.js'

let lastRenderTime = 0 
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
}

function render() {
    gameBoard.innerHTML = ''
    renderSnake(gameBoard)
}

