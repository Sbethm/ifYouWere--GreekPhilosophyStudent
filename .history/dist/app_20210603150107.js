const nav = document.getElementById('nav');
const header = document.querySelector('header');
const hamBtn = document.getElementById('hamburger');

hamBtn.addEventListener('click', ()=> {
    hamBtn.classList.toggle('open');
    header.classList.toggle('height');
})


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
                    <input type="</lable>
                )
            }
        }
    )
};
function showResults();
// New functions go here

// Variables
// Same code as before
const quiz = document.getElementById('quiz');
const previous = document.getElementById('previous');
const next = document.getElementById('next');
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

// Show the first slide
showSlide(currentSlide);

// Event listeners
// New event listeners here