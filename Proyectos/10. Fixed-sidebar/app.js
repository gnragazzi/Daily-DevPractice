const content = document.querySelector('.content')
const sidebar = document.querySelector('.sidebar')

window.addEventListener('DOMContentLoaded', () => {
  content.style.marginLeft = `${sidebar.getBoundingClientRect().width}px`
})
