console.log(document)
console.dir(document)
console.log(document.body.parentNode) // html
console.log(document.parentNode) // null

console.log(document.childNodes)
console.log(document.body.childNodes) // 9 elems

console.log(document.firstChild)

console.log(document.previousSibling) //null
console.log(document.nextSibling) //null

console.log(document.body.previousSibling) //#text
console.log(document.body.nextSibling) //null

const logoByTag = document.querySelector('span')
console.log(logoByTag)

console.log(logoByTag.hasAttribute('id')) //false
console.log(logoByTag.getAttribute('id')) //null

// .getAttribute(attrName, value)

logoByTag.setAttribute('name', 'logo-span')
console.log(logoByTag.hasAttribute('name')) //true
console.log(logoByTag.getAttribute('name')) //logo-span

// delete

logoByTag.removeAttribute('name')
console.log(logoByTag.hasAttribute('name')) //false

logoByTag.setAttribute('data-myAttr1', 'user')
logoByTag.setAttribute('data-myAttr2', '30')
logoByTag.setAttribute('data-myAttr3', 'Js')

//data-attr
// dataset = {attr:value}
console.log(logoByTag.dataset) //DOMStringMap {myattr1: "user", myattr2: "30", myattr3: "Js"}
console.log(logoByTag.dataset.myattr2) //30

//---------------------- other props---------------
//textContent
console.dir(logoByTag.textContent) //Studio
//style => {color, background, etc}
//имя пишем через камелКеис, тире не воспринимает. Применят стили как-будто инлайн стиль

// logoByTag.style.color = 'pink' // пользоваться таким способом плохая практика

// добавление класса

console.log(logoByTag.className)
console.log(logoByTag.classList)
logoByTag.classList.add('mainLogo')
// logoByTag.classList.toggle("className")// если нет класса то добавит, если есть - уберет

console.log(logoByTag.classList.contains('text')) // как includes возвращает true или false
// console.log(logoByTag.classList.replace('mainLogo', 'text')) // замена имени класса

//создаем элемент
const headerLogoLink = document.createElement('a')

console.log(headerLogoLink)
// Проверим какие атрибуты есть
console.log(headerLogoLink.attributes) //NamedNodeMap {length: 0}
headerLogoLink.setAttribute('href', './index.html')
console.log(headerLogoLink.attributes)
headerLogoLink.classList.add('nav__logo')
console.log(headerLogoLink.classList)
headerLogoLink.textContent = 'Studio'
console.log(headerLogoLink.textContent)

//add elements to HTML
const logoParent = document.getElementById('headerLogo')
// logoParent.appendChild(headerLogoLink)// в конец родителя

const logoSpan = document.createElement('span')
logoSpan.classList.add('nav__logo--black')

logoParent.prepend(headerLogoLink)
headerLogoLink.prepend(logoSpan)
console.log(headerLogoLink)

// клонирование глубокое и не очень)
const footerLogo = headerLogoLink.cloneNode(false) // true - со всеми детьми, false - только элеметы без детей

// as string
//  const footerAddress = `кусок верстки` - лучше сразу с обратными кавычками
// встраивается
// footerLogoParent.innerAdjacentHTML("beforeend", footerAddress)

// remove elements
//через родителя и уудаление самого элемента
const slWrapper = document.querySelector('.follow')
console.log(slWrapper)
const slTitle = document.querySelector('.follow__title')
console.log(slTitle)
// slTitle.remove() //или
// slWrapper.remove(slTitle)
