const navHeight = document.querySelector('.nav').getBoundingClientRect().height
const linksContainer = document.querySelector('.links-container')
const mainSection = document.querySelector('.section-center')
const toggleBtn = document.querySelector('.toggle-btn')

toggleBtn.addEventListener('click', () => {
  linksContainer.classList.toggle('show-links')
  const linksHeight = linksContainer.getBoundingClientRect().height
  mainSection.style.marginTop = `${navHeight + linksHeight}px`
})

window.addEventListener('DOMContentLoaded', () => {
  mainSection.style.marginTop = `${navHeight}px`
  linksContainer.style.marginTop = `${navHeight}px`
})
