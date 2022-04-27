import { update as updateSnake, render as renderSnake, snakeSpeed, getSnakeHead, snakeIntersection } from './snake.js'

import { update as updateFood, render as renderFood } from './food.js'

import { outsideGrid } from './grid.js'

let lastRenderTime = 0 
let endGame = false
const gameBoard = document.getElementById('game-board')

function main(currentTime) {
    if (endGame) {
        if (confirm('You Lose. Press ok to try again.')) {
            window.location = '/'
        }
        return
    }

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

