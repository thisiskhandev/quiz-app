const quizDB = [
  {
    question: "Q: Which is NOT volatile memory?",
    a: "RAM",
    b: "ROM",
    c: "Monitor",
    d: "All options",
    ans: "ans2",
  },
  {
    question: "Q: Organized and processed data is:",
    a: "Information",
    b: "Data",
    c: "Output",
    d: "Input",
    ans: "ans1",
  },
  {
    question:
      "Q: An electronic machine which takes input and gives useful information is called:",
    a: "Mouse",
    b: "Keyboard",
    c: "Computer",
    d: "Monitor",
    ans: "ans3",
  },
  {
    question: "Q: EEPROM or E2PROM is a:",
    a: "Volatile memory",
    b: "Non-Volatile memory",
    c: "Volatile memory",
    d: "Flash memory",
    ans: "ans2",
  },
];

// Global
const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");
const showScore = document.querySelector("#showScore");

const answers = document.querySelectorAll(".answer");

let questionCount = 0;
let score = 0;
const loadQuestion = () => {
  //   console.log(quizDB[0].question);
  const questionList = quizDB[questionCount];
  question.innerText = questionList.question;
  option1.innerText = questionList.a;
  option2.innerText = questionList.b;
  option3.innerText = questionList.c;
  option4.innerText = questionList.d;
};

loadQuestion();

const getCheckAnswer = () => {
  let answer;

  answers.forEach((curAnsElem) => {
    if (curAnsElem.checked) {
      answer = curAnsElem.id;
    }
  });
  return answer;
};

submit.addEventListener("click", () => {
  const checkedAnswer = getCheckAnswer();
  console.log(checkedAnswer);

  if (checkedAnswer === quizDB[questionCount].ans) {
    score++;
  }
  //   User should select at least one
  if (checkedAnswer == null) {
    alert("Select one");
  } else {
    questionCount++;
  }

  if (questionCount < quizDB.length) {
    loadQuestion();
  } else {
    showScore.innerHTML = `<h3>Your Scored ${score}/${quizDB.length} ✌</h3>
    <button class="btn" onclick="location.reload()">Retry</button>`;
    //     showScore.classList.remove("scoreArea");
    showScore.style.visibility = "visible";
    showScore.style.transition = "0.5s";
  }
});
