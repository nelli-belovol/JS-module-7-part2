// <ul class="social">
//   <li class="social__item">
//     <a class="link social__link social-link--grey" href="https://instagram.com">
//       <svg width="20px" height="20px" class="social__icon">
//         <use href="./images/icons.svg#icon-instagram"></use>
//       </svg>
//     </a>
//   </li>
//   <li class="social__item">
//     <a class="link social__link social-link--grey" href="" target="_blank" rel="noopener noreferrer">
//       <svg width="20px" height="20px" class="social__icon">
//         <use href="./images/icons.svg#icon-twitter"></use>
//       </svg>
//     </a>
//   </li>
//   <li class="social__item">
//     <a class="link social__link social-link--grey" href="" target="_blank" rel="noopener noreferrer">
//       <svg width="20px" height="20px" class="social__icon">
//         <use href="./images/icons.svg#icon-facebook"></use>
//       </svg>
//     </a>
//   </li>
//   <li class="social__item">
//     <a class="link social__link social-link--grey" href="" target="_blank" rel="noopener noreferrer">
//       <svg width="20px" height="20px" class="social__icon">
//         <use href="./images/icons.svg#icon-linkedin"></use>
//       </svg>
//     </a>
//   </li>
// </ul>
import data from '../db/socials-links-info.js'

function createElement(arr) {
  //ul
  const ulList = document.createElement('ul')
  //li
  const items = arr.map(elem => {
    const item = document.createElement('li')
    console.log(item)
    item.className = elem.class
    console.log(item.classList)
    //a
    const link = document.createElement('a')
    //href="#"
    link.setAttribute('href', elem.link.href)
    //class = "link"
    link.classList.add(elem.link.class)
    //aria-label = "ссылка на instagram"
    link.setAttribute('aria-label', elem.link.arialabel)

    //svg

    const icon = document.createElement('svg')
    icon.classList(elem.icon.class)

    // use
    const iconUse = document.createElement('use')
    icon.setAttribute('href', elem.icon.href)

    // теперь все встраиваем друг в друга согласно разметке
    item.append(link)
    link.append(icon)
    icon.append(iconUse)
  })

  return items
}

const items = createItems(data)
const slWrapper = document.querySelector('.sl-wrapper')
slWrapper.append(...items)

//class
