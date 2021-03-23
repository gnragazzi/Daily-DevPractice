const openBtn = document.querySelector('.thumbnail')
const closeBtn = document.querySelector('.modal-icon')
const modal = document.querySelector('.modal')

openBtn.addEventListener('click', () => modal.classList.add('show'))
closeBtn.addEventListener('click', () => modal.classList.remove('show'))
