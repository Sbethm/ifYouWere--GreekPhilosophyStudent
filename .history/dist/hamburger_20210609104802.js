const nav = document.getElementById('nav');
const header = document.querySelector('header');
const hamBtn = document.getElementById('hamburger');
const liPy = document.getElementById('li--py');
const liSocr = document.getElementById('li--socr');
const liAri = document.getElementById('li--ari');
const liPy = document.getElementById('li--py');
const liPy = document.getElementById('li--py');

hamBtn.addEventListener('click', ()=> {
    hamBtn.classList.toggle('open');
    header.classList.toggle('height');
})

