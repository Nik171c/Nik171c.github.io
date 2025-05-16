const nav = document.querySelector(".nav");
const navToggle = document.querySelector(".nav__toggle");
const header = document.querySelector('.header');
nav.classList.add("nav--closed");
navToggle.addEventListener("click", () => {
    nav.classList.toggle("nav--closed");
    nav.classList.toggle("nav--opened");
});
window.addEventListener('scroll', () => {
    console.log("!!!")
    if (window.scrollY > 50) {
        header.classList.add('header--scrolled');
    } else {
        header.classList.remove('header--scrolled');
    }
});
