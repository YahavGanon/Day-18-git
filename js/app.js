'use strict'

const onBallClick = () => {
    const elBall = document.querySelector('.ball')
    const currWidth = elBall.clientWidth
    elBall.style.width = currWidth + 50 + 'px'
    const currHeight = elBall.clientHeight
    elBall.style.height = currHeight + 50 + 'px'
    elBall.innerHTML = currWidth + currHeight
}


