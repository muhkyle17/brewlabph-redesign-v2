const hamburger = document.querySelector('.hamburger')
const navPages = document.querySelector('.nav__bar')

hamburger.addEventListener('click', mobileMenu)

function mobileMenu() {
  hamburger.classList.toggle('active')
  navPages.classList.toggle('active')
}

function closeMenu() {
  hamburger.classList.remove('active')
  navPages.classList.remove('active')
}
