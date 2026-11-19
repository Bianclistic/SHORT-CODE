const quesitons = [
  {
    quesition: "What tag is used for interactivity on the web page?",
    options: ["<link>", "<a>", "<href>", "<button>"],
    answer: 3,
  },
  {
    quesition: "Which tag creates a link in HTML?",
    options: ["<link>", "<a>", "<href>", "<url>"],
    answer: 1,
  },
  {
    quesition: "Which css property changes text color?",
    options: ["font-color", "text-color", "color", "forground"],
    answer: 2,
  },
];

let quesitionNumber = 0;
let score = 0;

const h2Quesition = document.querySelector(".tag h2");
const optionList = document.querySelector(".link");
const btnOptions = document.querySelectorAll(".btn");
const statu = document.querySelector(".statu p:first-child");
const nextItem = document.querySelector(".next");
const answerMessage = document.querySelector(".next");
const textMsg = document.querySelector(".text");
let scoreValue = document.querySelector(".score-value");
const textMessage = document.querySelector(".text");

function showContent() {
  statu.textContent = "Quesition" + quesitionNumber + "of" + quesitons.length;

  let current = quesitons[quesitionNumber];
  h2Quesition.textContent = current.quesition;
  for (let i = 0; i < btnOptions.length; i++) {
    btnOptions[i].textContent = current.options[i];
  }
}
// btnOptions.forEach((item) => {
//   item.addEventListener("click", function () {
//     nextItem.classList.toggle("active");
//   });
// });
//
optionList.addEventListener("click", (e) => {
  let btnClick = e.target.closest(".btn");

  let ansIndex = Array.from(btnOptions).indexOf(btnClick);
  let currentQuesition = quesitons[quesitionNumber];

  if (ansIndex === currentQuesition.answer) {
    score++;
    scoreValue.textContent = score;
    btnOptions[ansIndex].style.backgroundColor = "green";
    btnOptions[ansIndex].style.color = "white";
    nextItem.classList.add("active");
  } else {
    nextItem.classList.add("active");
    answerMessage.textContent = `Not quit! The answer is ${btnOptions[currentQuesition.answer].textContent}`;
    btnOptions[ansIndex].style.backgroundColor = "red";
    btnOptions[currentQuesition.answer].style.backgroundColor = "green";
  }
  for (let index = 0; index < btnOptions.length; index++) {
    btnOptions[index].disabled = true;
  }
});

function showContent() {
  statu.textContent =
    "Question " + (quesitionNumber + 1) + " of " + quesitons.length;

  let current = quesitons[quesitionNumber];

  h2Quesition.textContent = current.quesition;

  for (let i = 0; i < btnOptions.length; i++) {
    btnOptions[i].textContent = current.options[i];

    btnOptions[i].disabled = false;
    btnOptions[i].style.backgroundColor = "";
    btnOptions[i].style.color = "";
  }
}
showContent();

textMsg.addEventListener("click", function () {
  if (quesitionNumber < quesitons.length - 1) {
    quesitionNumber++;
    console.log(quesitionNumber);
  }
  showContent();
});
