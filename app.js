import { data } from './data.js'

const projectsContainer = document.querySelector('.projects-container')
const navHeigth = document.querySelector('.nav').getBoundingClientRect().height

projectsContainer.style.marginTop = `${navHeigth}px`

// dinamic content
let newData = data.filter((item) => item.name !== 'sunday')
window.addEventListener('DOMContentLoaded', () => {
  projectsContainer.innerHTML = newData
    .map(({ id, date, name, link }) => {
      return `<article class="project">
          <h1 class="project-title">${date}</h1>
          <h4 class="project-number">${id}${
        id === 1 ? 'st' : id === 2 ? 'nd' : id === 3 ? 'rd' : 'th'
      } Project</h4>
          <p class="project-text">${name}</p>
          <a href="${link}"
            target="_blank" >go to the project</a
          >
        </article>`
    })
    .join('')
})
