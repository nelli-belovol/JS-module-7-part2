// console.dir(_)
//_.debounce(callback, 500);
const input = document.getElementById('mailling')
input.addEventListener(
  'input',
  _.debounce(e => {
    console.log(e.target)
  }, 5000), // Отрабатывает через 5 секунд, не сразу
)
