// 1-получаем доступ на элемент к кторому применим обзервер

const list = document.querySelector('.portfolio__list')
const items = [...list.children]
// console.log(items)
// 2-создаем экземпляр

const options = {
  root: list,
  rootMargin: '-10px', // отрицательное значение чтобы элементы появлялись заранее
  threshold: 0.5,
}
const observer = new IntersectionObserver(callback, options)

// колбек ожидает входяие данные для прверки и ссылку на экземпеляр
function callback(entries, observer) {
  console.log(entries)
  let i = 0
  entries.forEach(entry => {
    console.log(entry)
    // свойство isInterSecting(true/false)
    entry.isIntersecting ? entry.target.classList.add('observer') : entry.target.classList.remove('observer')
  })
}

// обращаемся к методу экземпляра И передаем элемент за которым он должен следить
items.forEach(li => {
  observer.observe(li)
})
