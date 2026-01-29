const modalButtons = document.querySelectorAll('.more')  // все кнопки
const modal = document.querySelector('.modal')

if (modal) {
  const overlay = modal.querySelector('.overlay')
  const closeButton = modal.querySelector('.modal__close')

  modalButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault()  // предотвращаем стандартное поведение кнопки
      modal.classList.remove('hidden')
    })
  })

  if (overlay) {
    overlay.addEventListener('click', () => {
      modal.classList.add('hidden')
    })
  }

  if (closeButton) {
    closeButton.addEventListener('click', () => {
      modal.classList.add('hidden')
    })
  }
}