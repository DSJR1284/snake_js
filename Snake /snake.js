import { getInputDirection } from "./input.js"

export const snakeSpeed = 2 
const snakeBody = [{x: 11, y: 11}] 
let newSegment = 0 

export function update() {
    addSegments()
    const inputDirection = getInputDirection()
    for (let i = snakeBody.length -2; i >= 0; i--) {
        snakeBody[i + 1 ] = { ...snakeBody[i] }
    }
    snakeBody[0].y += inputDirection.y
    snakeBody[0].x += inputDirection.x
}

export function render(gameBoard) {
    snakeBody.forEach(segment => {
    const snakeElement = document.createElement('div')
    snakeElement.style.gridRowStart = segment.y 
    snakeElement.style.gridColumnStart = segment.x
    snakeElement.classList.add('snake')
    gameBoard.appendChild(snakeElement) 
    })
}

export function expandSnake(amount) {
    newSegment += amount 
}

export function onSnake(postion) {
    return snakeBody.some(segment => {
        return equalPostions(segment, postion)
    })
}

function equalPostions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y
}

function addSegments() {
    for (let i = 0; i < newSegment; i++) {
        snakeBody.push({ ... snakeBody[snakeBody.length - 1]})
    }
    newSegment = 0
}

