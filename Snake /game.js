let lastRenderTime = 0 


function main(currentTime) {
    const secSinceLastRender = (currentTime - lastRenderTime) / 1000
    window.requestAnimationFrame(main)
    lastRenderTime = currentTime
    console.log(secSinceLastRender) 
}

window.requestAnimationFrame(main)

