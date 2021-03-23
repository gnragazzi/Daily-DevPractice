const input = document.querySelector('.menu-input')
const menuItems = [...document.querySelectorAll('.list-items')]
const menu = document.querySelector('.menu')
const container = document.querySelector('.menu-container')

input.addEventListener('keyup', (e) => {
  const filter = e.currentTarget.value.toUpperCase()
  menuItems.forEach((item) => item.classList.remove('hide'))
  menuItems
    .filter((item) => item.textContent.toUpperCase().indexOf(filter) < 0)
    .forEach((item) => item.classList.add('hide'))
})
window.addEventListener('DOMContentLoaded', () => {
  input.value = ''
  const height = menu.getBoundingClientRect().height
  container.style.height = `${height}px`
})
