const sideWidth = document.querySelector('.sidebar').getBoundingClientRect()
  .width
const sectionCenter = document.querySelector('.section-center')

const addMargin = () => {
  sectionCenter.style.marginLeft = `${sideWidth}px`
  sectionCenter.style.maxWidth = `${
    window.innerWidth - sideWidth - (window.innerWidth - sideWidth) / 10
  }px`
}

window.addEventListener('DOMContentLoaded', addMargin)
