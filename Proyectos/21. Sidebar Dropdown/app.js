const btn = document.querySelector('.side-btn')
const dropContainer = document.querySelector('.dropdown-container')
const main = document.querySelector('main')
const sideIcon = document.querySelectorAll('.side-icon')

btn.addEventListener('click', () => {
  dropContainer.classList.toggle('show-drop')
  sideIcon.forEach((icon) => icon.classList.toggle('show-side'))
})

window.addEventListener('DOMContentLoaded', () => {
  const sideWidth = document.querySelector('.sidebar').getBoundingClientRect()
    .width
  main.style.marginLeft = `${sideWidth}px`
})
window.addEventListener('resize', () => {
  const sideWidth = document.querySelector('.sidebar').getBoundingClientRect()
    .width
  main.style.marginLeft = `${sideWidth}px`
})
