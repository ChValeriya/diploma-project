const burger = document.querySelector('.burger');
const links = document.querySelector('.header__links');

burger.addEventListener ('click', () => {
    links.classList.toggle('active')
});