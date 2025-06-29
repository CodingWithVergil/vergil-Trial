const questions = [
  {
    question: "What skill can be charged three times with Yamato?",
    options: ["Judgment Cut", "Rapid Slash", "High Time", "Drive"],
    answer: "Judgment Cut",
  },
  {
    question: "What is Vergil's iconic quote when taunting enemies?",
    options: ["You scared?", "Boom baby", "You shall die", "Scum"],
    answer: "You shall die",
  },
  {
    question: "Which form does Vergil take when fully awakened?",
    options: ["V", "Sin Devil Trigger", "Nelo angelo", "Devil trigger"],
    answer: "Sin Devil Trigger",
  },
  {
    question: "What is the name of Vergil's Twin brother?",
    options: ["Sparda", "Arkham", "Dante", "Nero"],
    answer: "Dante",
  },
  {
    question: "Which ability allows Vergil to teleport?",
    options: ["Air Trick", "Trick Shot", "Stinger", "Star fall"],
    answer: "Air Trick",
  },
];

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const scoreContainer = document.getElementById("score-container");
const scoreEl = document.getElementById("score");
let currentQuestion = 0;
let score = 0;
const introAudio = new Audio("this-may-be-fun.mp3");
const correctAnswer = new Audio("too-easy-2.mp3");
const wrongAnswer = new Audio("vergil-you-trash.mp3");
const outroAudio = new Audio("vergil-dmc-3-dont-get-so-cocky.mp3");
const allCorrect = new Audio("vergil-this-is-the-power-of-sparda-dt.mp3");
const allWrong = new Audio("vergil-youre-not-worthy-as-my-opponent-dt.mp3");

function showQuestions() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";
  q.options.forEach((option) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => selectAnswer(option);
    optionsEl.appendChild(btn);
  });
}

function selectAnswer(answer) {
  if (answer === questions[currentQuestion].answer) {
    score++;
    correctAnswer.currentTime = 0;
    correctAnswer.play();
  } else {
    wrongAnswer.currentTime = 0;
    wrongAnswer.play();
  }
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestions();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  document.getElementById("question-container").classList.add("hide");
  nextBtn.classList.add("hide");

  scoreContainer.classList.remove("hide");
  scoreEl.textContent = `${score} / ${questions.length}`;
  checkScore();
}

nextBtn.addEventListener("click", showQuestions);
nextBtn.addEventListener("click", () => {
  nextBtn.classList.add("hide");
  introAudio.play();
});

function checkScore() {
  if (score === questions.length) {
    setTimeout(() => {
      allCorrect.play();
      const img = document.createElement("img");
      img.src = "vergil-stare.jpg";
      document.body.appendChild(img);
      img.classList.add("vergil-jumpscare");
    }, 1400);
  } else if (score === 0) {
    setTimeout(() => {
      allWrong.play();
      const img = document.createElement("img");
      img.src = "vergil3.jpg";
      document.body.appendChild(img);
      img.classList.add("vergil-jumpscare");
    }, 1400);
  } else {
    setTimeout(() => {
      outroAudio.play();
      const img = document.createElement("img");
      img.src = "vergil-smile.jpg";
      document.body.appendChild(img);
      img.classList.add("vergil-jumpscare");
    }, 1400);
  }
}
