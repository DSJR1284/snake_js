let lastRenderTime = 0 
const snakeSpeed = 2

function main(currentTime) {
    window.requestAnimationFrame(main)
    const secSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secSinceLastRender < 1 / snakeSpeed)
    return lastRenderTime = currentTime
    // console.log(secSinceLastRender) 
}

window.requestAnimationFrame(main)

