'use strict'

document.querySelector('.btn1').addEventListener('click', () => {
    window.setTimeout(function() {
        document.querySelector('.img').src = '../img/love2.png'
    }, 2000)
    window.setTimeout(function() {
        document.querySelector('.img').src = '../img/love3.png'
    }, 6000)
})

document.querySelector('.btn2').addEventListener('click', () => {
    window.setTimeout(function() {
        document.querySelector('.img').src = '../img/money2.png'
    }, 2000)
    window.setTimeout(function() {
        document.querySelector('.img').src = '../img/money3.png'
    }, 6000)
})

document.querySelector('.btn3').addEventListener('click', () => {
    window.setTimeout(function() {
        document.querySelector('.img').src = '../img/do2.png'
    }, 2000)
    window.setTimeout(function() {
        document.querySelector('.img').src = '../img/do3.png'
    }, 6000)
})