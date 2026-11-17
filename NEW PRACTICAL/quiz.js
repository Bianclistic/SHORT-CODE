const quesitons = [
  {
    quesition: "What tag is used for interactivity on the web page?",
    options: ["<link>", "<a>", "<href>", "<url>"],
  },
  {
    quesition: "Which tag creates a link in HTML?",
    options: ["<link>", "<a>", "<href>", "<url>"],
  },
];

let quesitionNumber = 1;
const h2Quesition = document.querySelector(".tag h2");
const optionList = document.querySelector(".btn-box");
const btnOptions = document.querySelectorAll(".btn");
const statu = document.querySelector(".statu p:first-child");
const nextItem = document.querySelector(".next");

function showContent() {
  statu.textContent = "Quesition" + quesitionNumber + "of" + quesitons.length;

  let current = quesitons[quesitionNumber];
  h2Quesition.textContent = current.quesition;
  for (let i = 0; i < btnOptions.length; i++) {
    btnOptions[i].textContent = current.options[i];
  }
}
btnOptions.forEach((item) => {
  item.addEventListener("click", function () {
    nextItem.classList.toggle("active");
  });
});

showContent();
