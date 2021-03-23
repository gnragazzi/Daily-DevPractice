const main = document.querySelector('main')
const navHeight = document.querySelector('.nav').getBoundingClientRect().height
const dropDownContainer = document.querySelector('.dropdown-container')

window.addEventListener('DOMContentLoaded', () => {
  main.style.marginTop = `${navHeight}px`
  dropDownContainer.style.top = `${navHeight}px`
})
