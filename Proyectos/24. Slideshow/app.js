import data from './data.js'

const imgContainer = document.querySelector('.img-container')
const dotContainer = document.querySelector('.dots-container')
const nextBtn = document.querySelector('.next-btn')
const prevBtn = document.querySelector('.prev-btn')
let interval

// functions
const dotLogic = (slide) => {
  const dots = [...document.querySelectorAll('.dot')]
  dots.forEach((dot) => dot.classList.remove('active-dot'))
  const activeDot = dots.find((dot) => dot.dataset.id === slide.dataset.id)
  activeDot.classList.add('active-dot')
}
const getNextSlide = () => {
  if (interval) {
    clearInterval(interval)
  }
  const currSlide = document.querySelector('.active')
  const nextSlide = document.querySelector('.next')
  const otherNextSlide =
    nextSlide.nextElementSibling || imgContainer.firstElementChild

  currSlide.classList.remove('active')
  currSlide.classList.add('last')
  nextSlide.classList.remove('next')
  nextSlide.classList.add('active')
  otherNextSlide.classList.remove('last')
  otherNextSlide.classList.add('next')

  // dot logic
  dotLogic(nextSlide)

  interval = setInterval(() => {
    getNextSlide()
  }, 3000)
}
const getPrevSlide = () => {
  if (interval) {
    clearInterval(interval)
  }
  const currSlide = document.querySelector('.active')
  const lastSlide =
    currSlide.previousElementSibling || imgContainer.lastElementChild
  const prevSlide =
    lastSlide.previousElementSibling || imgContainer.lastElementChild
  currSlide.classList.remove('active')
  currSlide.classList.add('next')
  lastSlide.classList.remove('last')
  lastSlide.classList.add('active')
  prevSlide.classList.remove('next')
  prevSlide.classList.add('last')
  dotLogic(lastSlide)
  interval = setInterval(() => {
    getNextSlide()
  }, 3000)
}

window.addEventListener('DOMContentLoaded', () => {
  imgContainer.innerHTML = data
    .map(({ id, url }) => {
      return `<img class="img ${
        id === 1 ? 'active' : id === data.length ? 'last' : 'next'
      }" src="${url}" alt="slide ${id}" data-id='${id}' />`
    })
    .join('')
  dotContainer.innerHTML = data
    .map(({ id }) => {
      return `<span class='dot ${
        id === 1 ? 'active-dot' : ''
      }' title='Slide ${id}' data-id='${id}'></span>`
    })
    .join('')
  // dot functionality

  const dots = [...document.querySelectorAll('.dot')]
  const slides = [...document.querySelectorAll('.img')]

  dots.forEach((dot) => {
    dot.addEventListener('click', (e) => {
      clearInterval(interval)
      slides.forEach((slide) => {
        slide.classList.remove('active', 'next', 'last')
      })
      const currSlide = slides.find((slide) => {
        return slide.dataset.id === e.target.dataset.id
      })
      const prevSlide =
        currSlide.previousElementSibling || imgContainer.lastElementChild
      const nextSlide =
        currSlide.nextElementSibling || imgContainer.firstElementChild
      currSlide.classList.add('active')
      prevSlide.classList.add('last')
      nextSlide.classList.add('next')
      dotLogic(currSlide)
      interval = setInterval(() => {
        getNextSlide()
      }, 3000)
    })
  })
})

interval = setInterval(() => {
  getNextSlide()
}, 3000)

nextBtn.addEventListener('click', getNextSlide)
prevBtn.addEventListener('click', getPrevSlide)
