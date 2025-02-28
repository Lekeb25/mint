// ############################# Navigation #################################

const btnBurger = document.querySelector('#burger-menu');
const menu = document.querySelector('.navigation');
const linkNav = document.querySelectorAll('.navigation a');
const section = document.querySelectorAll('section');
const nav = document.querySelector('nav');

btnBurger.addEventListener('click', ()=>{
    menu.classList.toggle('active');
    btnBurger.classList.toggle('bx-x');
});

linkNav.forEach(link =>{
    link.addEventListener('click', ()=>{
        menu.classList.remove('active');
        btnBurger.classList.remove('bx-x');
    });
})

section.forEach(sect =>{
    sect.addEventListener('click', ()=>{
        menu.classList.remove('active');
        btnBurger.classList.remove('bx-x');
    });
})

window.addEventListener('scroll', ()=>{
    menu.classList.remove('active');
    btnBurger.classList.remove('bx-x');
});
