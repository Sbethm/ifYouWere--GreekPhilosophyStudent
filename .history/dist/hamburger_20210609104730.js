const nav = document.getElementById('nav');
const header = document.querySelector('header');
const hamBtn = document.getElementById('hamburger');
const liPy = document.getElementById('li')

hamBtn.addEventListener('click', ()=> {
    hamBtn.classList.toggle('open');
    header.classList.toggle('height');
})

