import sublinks from './data.js'
const main = document.querySelector('main')
const nav = document.querySelector('.nav')
const subCont = document.querySelector('.sublinks-container')
const submenu = document.querySelectorAll('.submenu')

window.addEventListener('DOMContentLoaded', () => {
  const navHeigth = nav.getBoundingClientRect().height
  main.style.marginTop = `${navHeigth}px`
  subCont.style.marginTop = `${navHeigth}px`
})

submenu.forEach((sub) => {
  sub.addEventListener('mouseover', function (e) {
    const text = e.currentTarget.dataset.id
    const tempPage = sublinks.find((item) => item.name === text)
    subCont.innerHTML = tempPage['links']
      .map((link) => `<a href="" class="sublink">${link}</a>`)
      .join('')
    submenu.forEach((item) => item.classList.remove('red'))
    e.currentTarget.classList.add('red')
  })
})
main.addEventListener('mouseover', function () {
  subCont.innerHTML = ''
  submenu.forEach((item) => item.classList.remove('red'))
})
nav.addEventListener('mouseover', function (e) {
  if (
    e.target.classList.contains('nav-link') &&
    !e.target.classList.contains('submenu')
  ) {
    subCont.innerHTML = ''
    submenu.forEach((item) => item.classList.remove('red'))
  }
})
