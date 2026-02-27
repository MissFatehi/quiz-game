const startBtnEl = document.querySelector(".startBtn");
const startSecEl = document.querySelector(".startSection");
const questionSecEl = document.querySelector(".questionSection");
const resultSecEl = document.querySelector(".resultSection");
const questionTitleEl = document.querySelector(".questionTitle");
const questionStepEl = document.querySelector(".question-counter")
const questionStepEndEl = document.querySelector(".questionEnd");
const scoreEl = document.querySelector(".score");
const questionAnswersEl = document.querySelector(".questionAnswers");
const progressBarEl = document.querySelector(".progressBar");
const   resultScoreEl = document.querySelector(".resultScore");
const resultScoreEndEl = document.querySelector(".resultScoreEnd");
const restartBtnEl = document.querySelector(".restartBtn");

      const quizQuestions = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "London", correct: false },
      { text: "Berlin", correct: false },
      { text: "Paris", correct: true },
      { text: "Madrid", correct: false },
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Venus", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Saturn", correct: false },
    ],
  },
  {
    question: "What is the largest ocean on Earth?",
    answers: [
      { text: "Atlantic Ocean", correct: false },
      { text: "Indian Ocean", correct: false },
      { text: "Arctic Ocean", correct: false },
      { text: "Pacific Ocean", correct: true },
    ],
  },
  {
    question: "Which of these is NOT a programming language?",
    answers: [
      { text: "Java", correct: false },
      { text: "Python", correct: false },
      { text: "Banana", correct: true },
      { text: "JavaScript", correct: false },
    ],
  },
  {
    question: "What is the chemical symbol for gold?",
    answers: [
      { text: "Go", correct: false },
      { text: "Gd", correct: false },
      { text: "Au", correct: true },
      { text: "Ag", correct: false },
    ],
  },
];

startBtnEl.addEventListener('click', ()=>{
    startSecEl.classList.add("!hidden");
    questionSecEl.classList.add("!flex");
  createQuestion();
})

let currentQuestin = 1;
let score=0;

function createQuestion (){
    const question = quizQuestions[currentQuestin-1];
    questionTitleEl.innerHTML= question.question;
    questionStepEl.innerHTML=currentQuestin;
    questionStepEndEl.innerHTML= quizQuestions.length;
    scoreEl.innerHTML = score;

  
    //    questionAnswersEl.innerHTML += `<li   class="w-full p-3 bg-list-bg border-2 border-list-border rounded-md hover:bg-list-h hover:border-list-b-h transition-all duration-200 ease-in-out text-[18px] font-medium">${item.text}</li>`
    
    question.answers.forEach((item) =>{
    const answer = document.createElement("li");
    answer.classList =
      "bg-[#f8f0e5] font-medium text-[17px] p-4 h-14.25 text-[#333] border-2 border-[#eadbc8] rounded-[10px] cursor-pointer transition-all duration-300 hover:bg-[#eadbc8] hover:border-[#dac0ae]";
    answer.innerHTML = item.text;
    questionAnswersEl.appendChild(answer);

    answer.addEventListener('click' , ()=>{
         if (currentQuestin === 5) {
        questionSecEl.classList.add("!hidden");
        resultSecEl.classList.add("!flex");
         }

        if(item.correct=== true){
            answer.classList.add("correct");
            score+=1;
        }
        else{
            answer.classList.add("incorrect")
        }
        progressBarEl.style.width = `${currentQuestin*25}%` ;
      questionAnswersEl.innerHTML="";
        currentQuestin+=1;
        createQuestion();
    })

    })
 resultScoreEl.innerHTML=score;
resultScoreEndEl.innerHTML=quizQuestions.length;
}


restartBtnEl.addEventListener("click",()=>{
     resultSecEl.classList.add("!hidden");
      startSecEl.classList.remove("!hidden");

})

    




