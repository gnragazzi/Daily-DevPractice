import './randomColor.js'
import aplyColor from './randomColor.js'

const btn = document.querySelector('.btn')
const preloader = document.querySelector('.preloader')

window.addEventListener('DOMContentLoaded', function () {
  aplyColor()
  setTimeout(() => {
    preloader.classList.add('hide-preloader')
    setTimeout(() => {
      preloader.classList.add('hide-it')
    }, 1500)
  }, 1000)
})

btn.addEventListener('click', function (e) {
  e.preventDefault()
  aplyColor()
})
