const nav = document.getElementById('nav-bar');
const header = document.getElementById('header');
const burgericon = document.getElementById('burger-icon');
const burgerclose = document.getElementById('burger-close');

burgericon.addEventListener('click', () => {
    nav.classList.add('nav-bar-show');
    nav.classList.add('nav-bar-transition');
    burgericon.classList.add('hidden');
    burgerclose.classList.remove('hidden');
})

burgerclose.addEventListener('click', () => {
    nav.classList.remove('nav-bar-show');
    nav.classList.add('nav-bar-transition');
    burgericon.classList.remove('hidden');
    burgerclose.classList.add('hidden');
})

window.onresize = () => {
    let viewPortWidth = window.innerWidth;
    if(viewPortWidth > 850){
        nav.classList.remove('nav-bar-show');
        nav.classList.remove('nav-bar-transition');
        burgericon.classList.remove('hidden');
        burgerclose.classList.add('hidden');
    }
}