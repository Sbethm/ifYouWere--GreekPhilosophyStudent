const nav = document.getElementById('nav');
const header = document.querySelector('header');
const hamBtn = document.getElementById('hamburger');

hamBtn.addEventListener('click', ()=> {
    hamBtn.classList.toggle('open');
    header.classList.toggle('height');
})


//QUIZ CODE
function buildQuiz();
// New functions go here

// Variables
// Same code as before
const quiz = document.getElementById('quiz');
const previous = document.getElementById('previous');
const next = document.getElementById('next');
const submit


// Kick things off
buildQuiz();

// Pagination
// New code here

// Show the first slide
showSlide(currentSlide);

// Event listeners
// New event listeners here