export function update() {

}

export function render(gameBoard) {
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = segment.y 
    foodElement.style.gridColumnStart = segment.x
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement) 
    
}