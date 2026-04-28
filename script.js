const quiz = [
{
question:"HTML stands for?",
answers:["Hyper Text Markup Language","Home Tool Markup","Hyperlinks Text"],
correct:0
},
{
question:"CSS is used for?",
answers:["Styling","Database","Server"],
correct:0
},
{
question:"JavaScript is?",
answers:["Programming Language","Browser","Design Tool"],
correct:0
}
];

let index = 0;
let score = 0;
let time = 15;
let timer;

function loadQuestion(){
clearInterval(timer);
time = 15;
startTimer();

document.getElementById("question").innerText = quiz[index].question;

let btns = "";

quiz[index].answers.forEach((ans,i)=>{
btns += `<button onclick="checkAnswer(${i})">${ans}</button>`;
});

document.getElementById("answers").innerHTML = btns;
}

function checkAnswer(i){
if(i === quiz[index].correct){
score++;
document.getElementById("score").innerText = "Score: " + score;
}
}

function nextQuestion(){
index++;

if(index < quiz.length){
loadQuestion();
}else{
document.querySelector(".quiz-container").innerHTML =
`<h1>Your Score: ${score}/${quiz.length}</h1>
<button onclick="location.reload()">Restart</button>`;
}
}

function startTimer(){
timer = setInterval(()=>{
time--;
document.getElementById("timer").innerText = "Time: " + time;

if(time == 0){
nextQuestion();
}
},1000);
}

loadQuestion();
