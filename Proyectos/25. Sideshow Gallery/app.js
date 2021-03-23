import data from './data.js'

const imgCount = document.querySelector('.img-count')
const imgName = document.querySelector('.img-name')
const bigImg = document.querySelector('.big-img')
const galleryContainer = document.querySelector('.gallery-container')
let index = 0
const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')

const displayBigImage = (index) => {
  const { id, url, label } = data[index]
  imgCount.textContent = `${id}/${data.length}`
  imgName.textContent = label
  bigImg.setAttribute('src', url)
  showActive()
}
const showActive = () => {
  const galleryImgs = galleryContainer.querySelectorAll('.gallery-img')
  galleryImgs.forEach((img) => {
    img.classList.remove('active')
    if (img.dataset.id == index) {
      img.classList.add('active')
    }
  })
}
window.addEventListener('DOMContentLoaded', () => {
  displayBigImage(index)
  galleryContainer.innerHTML = data
    .map(({ id, url, label }) => {
      return `<img class="gallery-img ${
        id === index + 1 ? 'active' : ''
      }" src="${url}" alt="${label}" data-id=${id - 1} />`
    })
    .join('')
  const galleryImgs = galleryContainer.querySelectorAll('.gallery-img')
  galleryImgs.forEach((img) => {
    img.addEventListener('click', (e) => {
      index = e.target.dataset.id
      displayBigImage(index)
      galleryImgs.forEach((img) => img.classList.remove('active'))
      e.target.classList.add('active')
    })
  })
})
prevBtn.addEventListener('click', () => {
  if (index > 0) {
    index -= 1
  } else {
    index = data.length - 1
  }
  displayBigImage(index)
})
nextBtn.addEventListener('click', () => {
  if (index < data.length - 1) {
    index += 1
  } else {
    index = 0
  }
  displayBigImage(index)
})
