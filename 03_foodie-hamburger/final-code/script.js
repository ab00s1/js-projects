const hamburgerIcon = document.querySelector('.hamburger-menu-container')
const headerContent = document.querySelector('.header-content')
const closeIcon = document.querySelector('.close-icon')
const nav = document.querySelector('nav')

document.querySelector("body > div.main-content > main > footer > h3 > a").addEventListener("click", function() {
  window.scrollTo(0, 0);
});


hamburgerIcon.addEventListener('click', (e) => {
    e.stopPropagation()
    headerContent.classList.add('menu-open')
})

nav.addEventListener('click', (e) => {
    e.stopPropagation()
})

closeIcon.addEventListener('click', () => {
    headerContent.classList.remove('menu-open')
})

window.addEventListener('click', () => {
    headerContent.classList.remove('menu-open')
})

