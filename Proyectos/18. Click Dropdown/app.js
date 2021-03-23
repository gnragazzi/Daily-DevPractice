const btn = document.querySelector('.drop-btn')
const content = document.querySelector('.dropdown-content')

window.addEventListener('click', (e) => {
  e.target.classList.contains('drop-btn')
    ? content.classList.toggle('show-drop')
    : content.classList.remove('show-drop')
})
