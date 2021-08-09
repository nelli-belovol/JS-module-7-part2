// CLICK

const buttonAll = document.querySelector('#buttonAll')
buttonAll.addEventListener('click', () => {
  console.log(`событие клика произошло`)
  buttonAll.style.background = 'red'
})

// получаем доступ ко всем кнопкам
const allButtons = document.querySelectorAll('.filter__btn')
console.log(allButtons)
allButtons.forEach(btn => {
  btn.addEventListener('click', event => {
    // btn.style.backgroundcolor = 'green'
    console.log(`событие клика произошло`)
    btn.classList.toggle('activeBtn')
    console.log(event)
  })
})

//INPUT
const input = document.querySelector('[type="email"]')
input.addEventListener('input', event => {
  console.log(event.target.value)
})
input.addEventListener('change', e => {
  console.log(`event ${e}`)
})

const form = document.querySelector('.mailling__btn')
console.log(form)
form.addEventListener('sumbit', e => {
  console.log(e.target.elements)
  console.log(e.target.elements.email)
  e.preventDefault() // метод остановки дефолтного события
})

// keydown
// window.addEventListener('keydown', e => {
//   console.log(e)
//   console.log('code', e.code, 'key:', e.key)
// })

// не работает на системных кнопках используется редко

// window.addEventListener('keypress', e => {
//   console.log(e)
//   console.log('code', e.code, 'key:', e.key)
// })

// предпочтительнее использовать keydown чем keyup

// window.addEventListener('keyup', e => {
//   console.log(e)
//   console.log('code', e.code, 'key:', e.key)
// })

//focus

function handleCallback(e) {
  console.log(e)
  e.target.style.background = 'red'
}

input.addEventListener('focus', handleCallback)
input.removeEventListener('focus', handleCallback) // чтобы удалить слушатель событий

input.addEventListener('blur', e => {
  console.log(e)
  e.target.style.background = 'green'
})
