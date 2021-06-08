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
                    `<label>
                        <input type="radio" name="questions${questionNumber}" value="${letter}">
                        ${currentQuestion.answers[letter]} 
                    </label>`
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

function showResults() {
    //gather answer containers from the quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');
    //keep track of user's answers
    let path = 0;
    let socr = 0;
    let ari = 0;
    //for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
        //find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelectorAll(selector) || {}).value;
        //add up values
        if(userAnswer === currentQuestion.answers.p){
            path++;
        }else if(userAnswer === currentQuestion.answers.s){
            socr++;
        }else{
            ari++;
        }
        //show results
        if(path > socr && path > ari) {
            results.innerHTML = `<div class='results'>Path Wins!</div>`;
        } else if(socr > path && socr > ari) {
            results.innerHTML = `<div class='results'>Socr Wins!</div>`;
        } else {
            results.innerHTML = `<div class='results'>Ari Wins!</div>`;
        } 
            quizContainer.style.display = `none`;
            submit.style.display = `none`;
            previousButton.style.display = `none`;
    });
};

// New functions go here
function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
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

function showNextSlide() {
    showSlide(currentSlide + 1);
}

function showPreviousSlide() {
    showSlide(currentSlide - 1);
}

// Variables
// Same code as before
const quizContainer = document.getElementById('quiz');
const submit = document.getElementById('submit');
const results = document.getElementById('results');

//questions and answers
const myQuestions = [
    {
        question: "You admire your teacher and where he has come from. Who was the early foundation of your teacher's life?",
        answers: {
            p: "a father who was a wealthy gem-engraver",
            s: "a father who was a simple stone worker",
            a: "a father who was an intelligent physician to the king"
        }
    }, 
    {
        question: "Your teacher founded a school with practices and traditions that you respect and hold dear to your heart. What are some of the practices of your school",
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
        question: "You have learned the heart-wrenching news that your beloved teacher has died. How did he die?",
        answers: {
            p: "While he was attending a lecture with your fellow colleagues, the building he was in was set a fire by the opposing political party, and he perished in the flames with many of your peers",
            s: "He was put on trail by the government and found guilty and executed for having polluted the minds of the young with radical, political thoughts",
            a: "Instead of remaining in a country that accused him of impiety, he escaped to his mother's land where he lived to die of natural causes."
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
previousButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);
submit.addEventListener('click', showResults);

//submit button eventListener (showResults)