//QUIZ CODE
function buildQuiz() {
    //variable to store the HTML output
    const output = [];
    //for each question...
    myQuestions.forEach( 
        (currentQuestion, questionNumber) => {
            //variable to store the list of possible answers
            const answers =[];
            //and for each available answer..
            for(letter in currentQuestion.answers){
                //...add an HTML radio button
                answers.push(
                    `<lable>
                        <input type="radio" name="questions${questionNumber}" value="${letter}">
                        ${currentQuestion.answers[letter]} 
                    </lable>`
                );
            }
            //add this question and its answers to the output
            output.push(
                `<div class="slide">
                    <div class="question"> ${currentQuestion.question} </div>
                    <div class="answers"> ${answers.join('')} </div>
                </div>`
            );
        }
    );
    //finally combine out output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
};

function showResults() {};
// New functions go here

function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slide[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide === 0){
        previousButton.style.display = 'none';
    } else {
        previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1){
        nextButton.style.display = 'none';
        submit.style.display = 'inline-block';
    } else {
        nextButton.style.display = 'inline-block';
        submit.style.display = 'none';
    }
}

// Variables
// Same code as before
const quizContainer = document.getElementById('quiz');
const submit = document.getElementById('submit');
const results = document.getElementById('results');

//questions and answers
const myQuestions = [
    {
        question: "Tomorrow, you will be executed for 'posioning' the minds of youths with your radical, phylosophical teachings. How do you choose to die?",
        answers: {
            p: "beheading",
            s: "hemlock poisoning",
            a: "sepuku"
        }
    }, 
    {
        question: "Tomorrow, you will be executed for 'posioning' the minds of youths with your radical, phylosophical teachings. How do you choose to die?",
        answers: {
            p: "beheading",
            s: "hemlock poisoning",
            a: "sepuku"
        }
    },
    {
        question: "Tomorrow, you will be executed for 'posioning' the minds of youths with your radical, phylosophical teachings. How do you choose to die?",
        answers: {
            p: "beheading",
            s: "hemlock poisoning",
            a: "sepuku"
        }
    }, 
    {
        question: "Tomorrow, you will be executed for 'posioning' the minds of youths with your radical, phylosophical teachings. How do you choose to die?",
        answers: {
            p: "beheading",
            s: "hemlock poisoning",
            a: "sepuku"
        }
    }, 
    {
        question: "Tomorrow, you will be executed for 'posioning' the minds of youths with your radical, phylosophical teachings. How do you choose to die?",
        answers: {
            p: "beheading",
            s: "hemlock poisoning",
            a: "sepuku"
        }
    }, 
    {
        question: "Tomorrow, you will be executed for 'posioning' the minds of youths with your radical, phylosophical teachings. How do you choose to die?",
        answers: {
            p: "beheading",
            s: "hemlock poisoning",
            a: "sepuku"
        }
    }, 
    {
        question: "Tomorrow, you will be executed for 'posioning' the minds of youths with your radical, phylosophical teachings. How do you choose to die?",
        answers: {
            p: "beheading",
            s: "hemlock poisoning",
            a: "sepuku"
        }
    }, 
    {
        question: "Tomorrow, you will be executed for 'posioning' the minds of youths with your radical, phylosophical teachings. How do you choose to die?",
        answers: {
            p: "beheading",
            s: "hemlock poisoning",
            a: "sepuku"
        }
    }, 
    {
        question: "Tomorrow, you will be executed for 'posioning' the minds of youths with your radical, phylosophical teachings. How do you choose to die?",
        answers: {
            p: "beheading",
            s: "hemlock poisoning",
            a: "sepuku"
        }
    }, 
    {
        question: "Tomorrow, you will be executed for 'posioning' the minds of youths with your radical, phylosophical teachings. How do you choose to die?",
        answers: {
            p: "beheading",
            s: "hemlock poisoning",
            a: "sepuku"
        }
    } 
]


// Kick things off
buildQuiz();

// Pagination
// New code here
const previousButton = document.getElementById('previous');
const nextButton = document.getElementById('next');
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

// Show the first slide
showSlide(currentSlide);

// Event listeners
// New event listeners here