'use strict'

const onBallClick = () => {
    const maxDiameter = 400
    const elBall = document.querySelector('.ball')
    const currWidth = elBall.clientWidth
    elBall.style.width = currWidth + getRandomIntInclusive(20, 60) + 'px'
    const currHeight = elBall.clientHeight
    elBall.style.height = currHeight + getRandomIntInclusive(20, 60) + 'px'
    elBall.style.backgroundColor = getRandomColor()
    elBall.innerHTML = currWidth + currHeight
    if (currWidth + currHeight > maxDiameter) {
        elBall.style.width = 100 + 'px'
        elBall.style.height = 100 + 'px'
        elBall.innerText = 100
        elBall.style.backgroundColor = 'green'
    }
}

const onBallClick2 = () => {
    const maxDiameter = 600
    const elBall = document.querySelector('.ball2')
    const currWidth = elBall.clientWidth
    elBall.style.width = currWidth + getRandomIntInclusive(20, 60) + 'px'
    const currHeight = elBall.clientHeight
    elBall.style.height = currHeight + getRandomIntInclusive(20, 60) + 'px'
    elBall.style.backgroundColor = getRandomColor()
    elBall.innerHTML = currWidth + currHeight
    if (currWidth + currHeight > maxDiameter) {
        elBall.style.width = 100 + 'px'
        elBall.style.height = 100 + 'px'
        elBall.innerText = 100
        elBall.style.backgroundColor = 'yellow'
    }
}

const onFifthBall = () => {
    const elBody = document.querySelector('body')
    elBody.style.backgroundColor = getRandomColor()
}

const onSixBall = () => {
    const elBody = document.querySelector('body')
    const elBall = document.querySelector('.ball')
    const elBall2 = document.querySelector('.ball2')
    elBody.style.backgroundColor = 'black'

    elBall.style.width = 100 + 'px'
    elBall.style.height = 100 + 'px'
    elBall.innerText = 100
    elBall.style.backgroundColor = 'green'
    
    
    elBall2.style.width = 100 + 'px'
    elBall2.style.height = 100 + 'px'
    elBall2.innerText = 100
    elBall2.style.backgroundColor = 'yellow'
}


