const toggleBtns = document.querySelectorAll('.toggle-btn')
const accordionItems = document.querySelectorAll('.accordion-item')

// toggleBtns.forEach((btn) => {
//   btn.addEventListener('click', (e) => {
//     const element = e.currentTarget.parentElement.parentElement
//     if (!element.classList.contains('active')) {
//       element.classList.add('active')
//     } else {
//       element.classList.remove('active')
//     }
//   })
// })

toggleBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const element = e.currentTarget.parentElement.parentElement
    if (!element.classList.contains('active')) {
      accordionItems.forEach((item) => item.classList.remove('active'))
      element.classList.add('active')
    } else {
      element.classList.remove('active')
    }
  })
})
