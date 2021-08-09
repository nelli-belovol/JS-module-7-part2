//======================== КОНСПЕКТ ==========================
// console.dir(_)
//_.throttle(()=>{}, 500);
//_.debounce(()=>{}, 500);

//                         input
// element.addEventListener('event', callback)
//для введенной информации объединяем вызовы

//_.throttle(callback, 500);
//_.debounce(callback, 500);

// element.addEventListener('event', _.throttle(callback, 500))
// element.addEventListener(
//   'event',
//   _.throttle(e => {
//     console.log(e)
//   }, 500),
// )
//======================== КОНСПЕКТ ==========================

//======================== ПРИМЕР ==========================
window.addEventListener(
  'scroll',
  _.throttle(e => {
    console.log(e)
  }, 5000), //первый отработает сразу, а  второй произойдет через 5 сек
)
