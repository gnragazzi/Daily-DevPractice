const openBtn = document.querySelector('.open-btn')
const closeBtn = document.querySelector('.close-btn')
const sidebar = document.querySelector('.sidebar')
const main = document.querySelector('main')
const body = document.querySelector('body')
const overlay = document.querySelector('.overlay')

// overlay
// openBtn.addEventListener('click', () => {
//   sidebar.classList.add('show-sidebar')
// })
// closeBtn.addEventListener('click', () => {
//   sidebar.classList.remove('show-sidebar')
// })

// push content
openBtn.addEventListener('click', () => {
  const sidebarWidth = sidebar.getBoundingClientRect().width
  sidebar.classList.add('show-sidebar')
  main.style.marginLeft = `${sidebarWidth}px`
  overlay.classList.add('show-overlay')
})
closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('show-sidebar')
  main.style.marginLeft = `0px`
  overlay.classList.remove('show-overlay')
})
