import { snakeSpeed } from './snake.js'

//Game Loop and Setup file.
let lastRenderTime = 0 



function main(currentTime) {
    window.requestAnimationFrame(main) //Tell me when I can render my next frame.
    const secSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secSinceLastRender < 1 / snakeSpeed)
    return 
    console.log('Render')
    lastRenderTime = currentTime //updating or last render time.     
    
    update() //update logic of the game.
    render() //dispaly current state of the game based on update.
}

window.requestAnimationFrame(main)

function update() {

}

function render() {

}

