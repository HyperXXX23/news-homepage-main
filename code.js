const menu_ham = document.querySelector('.hamb')
const menu = document.querySelector('.menu')
const fade = document.querySelector('.fade')
const close = document.querySelector('.close')


menu_ham.addEventListener('click', (e) => {
    menu.classList.toggle('menu-open');
    fade.classList.toggle('fade-open');
    console.log('asdasdasd')
})

fade.addEventListener('click', (e) => {
    menu.classList.toggle('menu-open');
    fade.classList.toggle('fade-open');
})

close.addEventListener('click', (e) => {
    menu.classList.toggle('menu-open');
    fade.classList.toggle('fade-open');
})