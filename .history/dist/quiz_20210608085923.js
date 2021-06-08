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
                        <input type="radio" name="question${questionNumber}" value="${letter}">
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
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
        //add up values
        if(userAnswer === 'p'){
            path++;
        }else if(userAnswer === 's'){
            socr++;
        }else{
            ari++;
        }
        //show results
        if(path > socr && path > ari) {
            results.innerHTML = `<div class='results'>Path Wins!</div>`;
        } else if(socr > path && socr > ari) {
            results.innerHTML = `<div class='results'>Socr Wins!</div>`;
        } else if(ari > path && ari > socr) {
            results.innerHTML = `<div class='results'>Ari Wins!</div>`;
        } else {
            results.innerHTML = `<div class='results'>You can't seem decide which philosopher to follow. Perhaps you should start your own school of philosophy! So, go ahead, grab your tools, build a time machine, and teach those Ancient Greeks your crazy ideas!</div>`;
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

function restart() {
    active.classList.remove('active-slide');
    
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
        question: "Your teacher founded a school on principals that you respect and are willing to follow in hopes of attaining further knowledge. What is the founding principal of your school?",
        answers: {
            p: "a life of abstinence from sexual pleasure and physical extravagance along with frequent fasting and vegetarianism",
            s: "your teacher never founded a school and, in fact, claimed to know and teach nothing",
            a: "a focus on cooperative research and a school that is run by the students"
        }
    },
    {
        question: "In the time of Ancient Greece, the gods were worshipped in temples by many. Was your teacher a devote worshipper?",
        answers: {
            p: "He that everything was made of numbers and that the number three was a symbol of the god, Apollo.",
            s: "He never claimed to believe or not but he vigorously questioned those that did and the logic behind their beliefs",
            a: "He threw away the idea that the gods had a hand in reason and instead observed the natural to find reason."
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
            p: "While he was attending a lecture with your fellow colleagues, the building he was in was set a fire by an opposing political party, and he perished in the flames along with many of your peers",
            s: "He was put on trail by the government, found guilty, and executed for having polluted the minds of the young with radical thoughts and not worshipping the gods of the country",
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

//These variables need to occur after the function showSlide() so that the classList '.active-slide' is assigned first



// Event listeners
// New event listeners here
previousButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);
submit.addEventListener('click', showResults);



beginAgain.addEventListener('click', restart);

//submit button eventListener (showResults)

