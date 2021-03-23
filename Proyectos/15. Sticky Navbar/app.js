const navbar = document.querySelector('.navbar')
const navPos = navbar.offsetTop
const main = document.querySelector('main')

window.addEventListener('scroll', () => {
  if (window.pageYOffset >= navPos) {
    navbar.classList.add('sticky-nav')
    main.style.paddingTop = `${navbar.getBoundingClientRect().height}px`
  } else {
    navbar.classList.remove('sticky-nav')
    main.style.paddingTop = 0
  }
})
