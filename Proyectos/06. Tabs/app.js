const btns = document.querySelectorAll('.tab-name')
const tabsContent = document.querySelectorAll('.tab-text')

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    id = e.currentTarget.dataset.id
    tabsContent.forEach((tab) => tab.classList.remove('active'))
    btns.forEach((btn) => btn.classList.remove('active'))
    e.currentTarget.classList.add('active')
    document.getElementById(id).classList.add('active')
  })
})
