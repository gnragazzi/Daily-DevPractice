import data from './data.js'

const imgContainer = document.querySelector('.img-container')
const modalGallery = document.querySelector('.modal-gallery')
const closeBtn = document.querySelector('.close-btn')
const modal = document.querySelector('.modal')
const caption = document.querySelector('.caption')
const bigImg = document.querySelector('.big-img')
const count = document.querySelector('.count')
let counter = 1

const setBigImg = (counter) => {
  const { label, url } = data.find((item) => item.id == counter)
  bigImg.setAttribute('src', url)
  caption.textContent = label
  count.textContent = `${counter}/${data.length}`
  if (!modal.classList.contains('show-modal')) {
    modal.classList.add('show-modal')
  }
  setActiveImg(counter)
}

const setActiveImg = (id) => {
  const modalImgs = [...document.querySelectorAll('.modal-img')]
  modalImgs.forEach((img) => img.classList.remove('active'))
  modalImgs.find((img) => img.dataset.id == id).classList.add('active')
}

window.addEventListener('DOMContentLoaded', () => {
  modalGallery.innerHTML = data
    .map(({ id, url, label }) => {
      return `<img src="${url}" alt="${label}" class='modal-img ${
        id == 1 && 'active'
      }' data-id='${id}' style='max-width: ${100 / data.length}%'/>`
    })
    .join('')

  imgContainer.innerHTML = data
    .map(({ id, url, label }) => {
      return `<img src="${url}" alt="${label}" class='click-img' data-id='${id}' />`
    })
    .join('')
  const clickImg = [
    ...imgContainer.querySelectorAll('.click-img'),
    ...modalGallery.querySelectorAll('.modal-img'),
  ]
  clickImg.forEach((img) => {
    img.addEventListener('click', (e) => {
      counter = parseInt(e.target.dataset.id)
      setBigImg(counter)
    })
  })
})

closeBtn.addEventListener('click', () => modal.classList.remove('show-modal'))

const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')

prevBtn.addEventListener('click', () => {
  counter === 1 ? (counter = data.length) : (counter -= 1)
  setBigImg(counter)
})
nextBtn.addEventListener('click', () => {
  counter === data.length ? (counter = 1) : (counter += 1)
  setBigImg(counter)
})
