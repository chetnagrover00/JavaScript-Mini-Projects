const quizData = [
    {
        question: " Which type of JavaScript language is?",
        a: "Object-Oriented",
        b: "Object-Based",
        c: "Assembly-language",
        d: "High-level",
        e: "None of the above",
        correct: "b",
    },
    {
        question: "What does CSS stand for?",
        a: "Cascading Style Sheets",
        b: "Central Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        e: "None of the above",
        correct: "a",
    },
    {
        question: "In HTML elements,CSS can be added in different",
        a: "2 ways",
        b: "1 way",
        c: "3 ways",
        d: "4 ways",
        e: "None of the above",
        correct: "c",
    },
    {
        question: "Does JavaScript allow exception handling?",
        a: "No",
        b: "Yes, but it provides only try block",
        c: "Yes, but it provides only Try catch block, but does not allow throw exception",
        d: "Yes, it provides try, catch as well as throw key word for exception handling",
        e: "None of the above",
        correct: "d",
    },

    {
        question: "What's my(chetna) favourite?",
        a: "HTML",
        b: "Bootstrap",
        c: "CSS",
        d: "JS",
        e: "None of the above",
        correct: "c",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const e_text = document.getElementById('e_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    e_text.innerText = currentQuizData.e

}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Restart</button>
            `
        }
    }
})