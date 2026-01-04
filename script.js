const questions = [
  { term: "femur", definition: "The longest bone in the human body" },
  { term: "alveoli", definition: "Tiny air sacs in the lungs" },
  { term: "patella", definition: "The kneecap" },
  { term: "cerebellum", definition: "Part of the brain that controls balance" },
  { term: "atrium", definition: "Upper chamber of the heart" }
];

let current = 0;
let score = 0;

const definitionEl = document.getElementById("definition");
const feedbackEl = document.getElementById("feedback");
const scoreEl = document.getElementById("score");

function loadQuestion() {
  definitionEl.textContent = questions[current].definition;
  feedbackEl.textContent = "";
  document.getElementById("answer").value = "";
}

function checkAnswer() {
  const userAnswer = document.getElementById("answer").value.toLowerCase();
  const correctAnswer = questions[current].term;

  if (userAnswer === correctAnswer) {
    feedbackEl.textContent = "✅ Correct!";
    score++;
    scoreEl.textContent = score;
  } else {
    feedbackEl.textContent = `❌ Correct answer: ${correctAnswer}`;
  }

  current = (current + 1) % questions.length;
  setTimeout(loadQuestion, 1200);
}

loadQuestion();
