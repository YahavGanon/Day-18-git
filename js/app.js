'use strict'

const onBallClick = () => {
    const elBall = document.querySelector('.ball')
    const currWidth = elBall.clientWidth
    elBall.style.width = currWidth + 50 + 'px'
    const currHeight = elBall.clientHeight
    elBall.style.height = currHeight + 50 + 'px'
    elBall.innerHTML = currWidth + currHeight
    if (currWidth + currHeight > 400) {
        elBall.style.width = 100 + 'px'
        elBall.style.height = 100 + 'px'
        elBall.innerText = 100
    }
}


