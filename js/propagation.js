//EVENT propagation

//click, input
// WINDOW
// 1--Capture
// 2--Target
// 3--Bubbling
// WINDOW

// X focus & blur
const buttons = document.querySelectorAll('.filter__btn')
// console.log(buttons)

const buttonsParent = document.querySelector('.filter__list')
buttonsParent.addEventListener('click', e => {
  //   console.log(e) //PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
  console.dir(e.target) // {...nodeName: "BUTTON"} нод неим всегда большими буквами
  console.log('элемент на который нажали: ', e.target) // элемент на кот произошел клик
  if (e.target.nodeName === 'BUTTON') {
    e.target.classList.toggle('activeBtn')
  } else {
    console.error('вы нажали не на кнопку')
  }

  console.log('элемент родитель, на котором висит слушатель: ', e.currentTarget)
  //   e.stopPropagation() // Остновка всплытия - разрешает остановиться на текщем месте
  //  e.stopImmediatePropagation() - останавливает немедленно и текущий
})

// одно событие можно отлавливать на разных родителях
const filterSection = document.querySelector('.portfolio')
console.log(filterSection)
filterSection.addEventListener('click', e => {
  console.log('SECTION элемент на который нажали: ', e.target)
  console.log('SECTION элемент родитель, на котором висит слушатель: ', e.currentTarget)
})
