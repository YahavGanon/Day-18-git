'use strict'

const onBallClick = () => {
    const elBall = document.querySelector('.ball')
    const currWidth = elBall.clientWidth
    elBall.style.width = currWidth + getRandomIntInclusive(20, 60) + 'px'
    const currHeight = elBall.clientHeight
    elBall.style.height = currHeight + getRandomIntInclusive(20, 60) + 'px'
    elBall.style.backgroundColor = getRandomColor() 
    elBall.innerHTML = currWidth + currHeight
    if (currWidth + currHeight > 400) {
        elBall.style.width = 100 + 'px'
        elBall.style.height = 100 + 'px'
        elBall.innerText = 100
        elBall.style.backgroundColor = 'aquamarine'
    }
}


