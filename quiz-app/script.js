
const quizData = [
    {
        question : "What's best club in the world?",
        answers : [{ a: "Fenerbahçe", b:"Real Madrid", c: "Manchester City", d: "Milan"}],
        correct : 'a',
    },
    {
        question : "What's most beautiful in the world?",
        answers : [{ a: "Natile Portman", b:"Gigi Hadid", c: "Barbara Palvin", d: "Amgelina Jolie"}],
        correct : 'c',
    },
    {
        question : "How many championships does fenerbahce have?",
        answers : [{ a: "19", b:"22", c: "18", d: "28"}],
        correct : 'd',
    },
    {
        question : "Who is best stoper ever?",
        answers : [{ a: "Fabio Cannavaro", b:"Charles Puyol", c: "Poulo Maldini", d: "Alexsandro Nesta"}],
        correct : 'd',
    },
    {
        question : "Fenerbahçe colors?",
        answers : [{ a: "yellow-blue", b:"yellow-navy", c: "black-white", d: "yellow-red"}],
        correct : 'b',
    }

]

const questionEl = document.getElementById("question");
const answerEls = document.querySelectorAll(".answer-label");
const nextBtn = document.getElementById("next");

var currentQuestion = 1
var correctQuestion = 0
var questLen = quizData.length


function nextQuestion(curQuest){
    if(currentQuestion < questLen){
        questionEl.innerText = quizData[curQuest].question;
        currentQuestion = currentQuestion + 1;
        /* console.log(quizData[curQuest].answers[0].a) */
        
        answerEls.forEach(answerEl => {
            id = answerEl.getAttribute("id");
            var list = (answerEl.innerText = quizData[curQuest].answers[0])
            list.forEach(a => console.log(a));
        })
        /*answerEls.forEach(answerEl => console.log(answerEl.getAttribute("id")))*/
    }
    else{
        alert("Question is over");
    }
}

nextBtn.addEventListener("click", function(e){
    e.preventDefault();
    console.log(currentQuestion);
    nextQuestion(currentQuestion)

});

