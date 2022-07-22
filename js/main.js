const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');


hamburger.addEventListener('click', openMenu);


function openMenu(e) {
    hamburger.removeEventListener('click', openMenu);
    hamburger.addEventListener('click', closeMenu);
    menu.classList.add('open');
}


function closeMenu(e) {
    hamburger.removeEventListener('click', closeMenu);
    hamburger.addEventListener('click', openMenu);
    menu.classList.remove('open');
}