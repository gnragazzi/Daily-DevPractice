const options = {
  'Select Subject': { 'Please, select a Subject': ['Please, select a Topic'] },
  'Front-End': {
    HTML: ['Links', 'Images', 'Tables', 'Lists'],
    CSS: ['Borders', 'Margins', 'Backgrounds', 'Float'],
    JavaScript: ['Variables', 'Operators', 'Functions', 'Conditions'],
  },
  'Back-End': {
    PHP: ['Variables', 'Strings', 'Arrays'],
    SQL: ['SELECT', 'UPDATE', 'DELETE'],
  },
}

const defaultSubject = document.getElementById('default-subject')
const subject = document.getElementById('subject')
let subjectOptions = []
for (const property in options) {
  subjectOptions.push(`${property}`)
}
subject.innerHTML = [
  `${defaultSubject}`,
  subjectOptions
    .map((item) => {
      return `<option value="${item}" class="subjects-options">
            ${item}
          </option>`
    })
    .join(''),
]
const optionsList = document.querySelectorAll('.subjects-options')

optionsList.forEach((option) => {
  option.addEventListener('click', (e) => {
    const topic = document.getElementById('topic')
    const topicOptions = []
    const currentTopic = e.target.value
    for (const topic in options[currentTopic]) {
      topicOptions.push(topic)
    }
    topic.innerHTML = topicOptions
      .map((item) => {
        return `<option value="${item}" class="topic-options">
            ${item}
          </option>`
      })
      .join('')
    const topicOptionsList = document.querySelectorAll('.topic-options')
    const chapter = document.getElementById('chapter')
    const chapterOptions = options[option.value][topic.value]
    chapter.innerHTML = chapterOptions.map((item) => {
      return `<option value="${item}" class="chapter-options">
       ${item}
     </option>`
    })
    topicOptionsList.forEach((topic) => {
      topic.addEventListener('click', (e) => {
        const chapter = document.getElementById('chapter')
        const chapterOptions = options[option.value][topic.value]
        chapter.innerHTML = chapterOptions.map((item) => {
          return `<option value="${item}" class="chapter-options">
            ${item}
          </option>`
        })
      })
    })
  })
})
