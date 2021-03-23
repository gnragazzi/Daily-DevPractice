const btnContainer = document.querySelector('.btn-container')
const toggleBtn = document.querySelectorAll('.toggle-btn')

btnContainer.addEventListener('click', (e) => {
  toggleBtn.forEach((btn) => {
    if (btn.classList.contains('hide-icon')) {
      btn.classList.remove('hide-icon')
    } else {
      btn.classList.add('hide-icon')
    }
  })
})
