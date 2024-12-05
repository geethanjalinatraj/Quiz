const questions = [
    {
        question: "Which is larget animal in the world?",
        answers: [
            { text: "Shark", correct: false},
            { text: "Blue whale", correct: true},
            { text: "Elephant", correct: false},
            { text: "Giraffe", correct: false},
        ]
    },
    {
        question: "Which is the smallest country in the world?",
        answers: [
            { text: "Vatican City", correct: true},
            { text: "Bhutan", correct: false},
            { text: "Nepal", correct: false},
            { text: "Shri Lanka", correct: false},
        ]
    },
    {
        question: "Which is the largest desert in the world?",
        answers: [
            { text: "Kalahari", correct: false},
            { text: "Gobi", correct: false},
            { text: "Sahara", correct: false},
            { text: "Antarctica", correct: true},
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answers: [
            { text: "Asia", correct: false},
            { text: "Australia", correct: true},
            { text: "Arctic", correct: false},
            { text: "Africa", correct: false},
        ]
    }  
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const timerElement =  document.getElementById("timer") // 

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 10; 
let timer; 


function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
    startTimer(); //
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
    clearInterval(timer); 
    timeLeft = 10;        
    timerElement.innerHTML = `Time Left: ${timeLeft}`;
}

function startTimer(){
    timer = setInterval(() => {
        timeLeft--;
        timerElement.innerHTML = `Time Left: ${timeLeft}`;  

        if (timeLeft <= 0) {
            clearInterval(timer); 
            handleNextButton();   
        }
    }, 1000); 
}


function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        // button.disabled = true;
    });
    clearInterval(timer);
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        // clearInterval(timer);
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});


startQuiz();




























// let timeLeft = 10;  
// let timer;


// function startTimer() {
//   clearInterval(timer);
  
//   timeLeft = 10; 
//   timer = setInterval(() => {
//     timeLeft--;
//     document.getElementById('timer').innerText = timeLeft; 

//     if (timeLeft <= 0) {
//       clearInterval(timer); 
//       showQuestion();  
//     }
//   }, 1000);  
// }

// Function to load the next question
// function nextQuestion() {
//   if (currentQuestionIndex < questions.length - 1) {
//     currentQuestionIndex++;
//     loadQuestion();  // Load the next question
//   } else {
//     endQuiz();  // If all questions are done, end the quiz
//   }
// }

// Function to load the current question and start the timer
// function loadQuestion() {
//   const currentQuestion = questions[currentQuestionIndex];
//   document.querySelector('.question').innerText = currentQuestion.question;
//   document.querySelector('.options').innerHTML = '';

//   currentQuestion.options.forEach(option => {
//     const button = document.createElement('button');
//     button.classList.add('option');
//     button.innerText = option;
//     button.addEventListener('click', selectOption);
//     document.querySelector('.options').appendChild(button);
//   });

//   startTimer();  // Start the 10-second timer for this question
// }

// Function to handle option selection
// function selectOption(e) {
//   const selectedOption = e.target.innerText;
//   const correctOption = questions[currentQuestionIndex].correct;

//   if (selectedOption === correctOption) {
//     score++;
//     document.getElementById('score').innerText = score;  // Update score
//   }
  
//   clearInterval(timer);  // Stop the timer once the option is selected
//   nextQuestion();  // Move to the next question
// }

// Function to end the quiz
// function endQuiz() {
//   alert('Quiz Over! Your score: ' + score);
//   clearInterval(timer);  // Stop any ongoing timer
// }

// // Initialize the first question
// let currentQuestionIndex = 0;
// let score = 0;
// loadQuestion();





























// const questions = [
//     {
//         question: "What is largest animal in the world?",
//         answers: [
//             { text: "Shark", correct: false},
//             { text: "Blue whale", correct: true},
//             { text: "Elephant", correct: false},
//             { text: "Giraffe", correct: false},
//         ]
//     },
//     {
//         question: "fdfcggvhjbkjnlm?",
//         answers: [
//             { text: "Shark", correct: true},
//             { text: "Blue whale", correct: false},
//             { text: "Elephant", correct: false},
//             { text: "Giraffe", correct: false},
//         ]
//     }
// ];

// const questionElement = document.getElementById("question");
// const answerButtons = document.getElementById("answer-buttons");
// const nextButton = document.getElementById("next-btn");


// let currentQuestionIndex = 0;
// let score = 0;


// function startQuiz(){
//     currentQuestionIndex = 0;
//     score = 0;
//     nextButton.innerHTML = "Next";
//     showQuestion();
// }


// function showQuestion(){
//     resetState();
//     let currentQuestion = questions[currentQuestionIndex];
//     let questionNo = currentQuestionIndex + 1;
//     questionElement.innerHTML = questionNo + "." + currentQuestion.question;

//     currentQuestion.answers.forEach(answer => {
//         const button = document.createElement("button");
//         button.innerHTML = answer.text;
//         button.classList.add("btn");
//         answerButtons.appendChild(button);
//         if(answer.correct){
//             button.dataset.correct = answer.correct;
//         }
//         button.addEventListener("click", selectAnswer);
//     });
// };

// function resetState(){
//     nextButton.style.display = "none";
//     while(answerButtons.firstChild){
//         answerButtons.removeChild(answerButtons.firstChild);
//     }
// }


// function selectAnswer(e){
//     const selectedBtn = e.target;
//     const isCorrect = selectedBtn.dataset.correct === "true";
//     if(isCorrect){
//         selectedBtn.classList.add("correct");
//         score++;
//     }else{
//         selectedBtn.classList.add("incorrect");
//     }
//     Array.from(answerButtons.children).forEach(button => {
//         if(button.dataset.correct === "true"){
//             button.classList.add("correct");
//         }
//         button.disabled = true;
//     });
//     nextButton.style.display = "block";
// }

// function showScore(){
//     resetState();
//     questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
//     nextButton.innerHTML = "Play Again";
//     nextButton.style.display = "block"; 
// }


// function handleNextButton(){
//     currentQuestionIndex++;
//     if(currentQuestionIndex < questions.length){
//         showQuestion();
//     }else{
//         showScore();
//     }
// }

// nextButton.addEventListener("click", ()=>{
//     if(currentQuestionIndex < questions.length){
//         handleNextButton();
//     }else{
//         startQuiz();
//     }
// });

// // startQuiz();







