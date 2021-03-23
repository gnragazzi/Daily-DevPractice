const closeBtns = document.querySelectorAll('.close-btn')
const navTop = document.querySelector('.nav-top')
const btns = document.querySelectorAll('.btn')

closeBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (btn.dataset.id === 'top') {
      document.getElementById('nav-top').style.height = '0'
    } else {
      document.getElementById('nav-left').style.width = '0'
    }
  })
})

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const id = e.currentTarget.dataset.id
    const element = document.getElementById(`nav-${id}`)
    if (id === 'top') {
      element.style.height = '100%'
    } else {
      element.style.width = '100%'
    }
  })
})
