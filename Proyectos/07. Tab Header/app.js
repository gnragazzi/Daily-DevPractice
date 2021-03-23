const contents = document.querySelectorAll('.content')
const btns = document.querySelectorAll('.tab-btn')

btns.forEach((btn) => {
  btn.addEventListener('mouseover', (e) => {
    const id = e.currentTarget.dataset.id
    contents.forEach((content) => content.classList.remove('active'))
    btns.forEach((btn) => {
      btn.classList.remove('active')
      btn.style.background = `whitesmoke`
    })
    document.getElementById(id).classList.add('active')
    e.currentTarget.classList.add('active')
    document.querySelectorAll('.active').forEach((item) => {
      item.style.background = `#${id}`
    })
  })
})
