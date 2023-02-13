const quizDB = [
    {
        question: "Q1:Evaluate 2 * 3 ?",
        a: "6",
        b: "5",
        c: "1",
        d: "9",
        ans:"ans1",
        selectedOption: null
    },
    {
        question: "Q2:Evaluate 3 * 3 ?",
        a: "6",
        b: "27",
        c: "4",
        d: "9",
        ans:"ans4",
        selectedOption: null
    },
    {
        question: "Q3:Evaluate 2 * 8 ?",
        a: "6",
        b: "10",
        c: "16",
        d: "9",
        ans:"ans3",
        selectedOption: null
    },
    {
        question: "Q4:Evaluate 5 * 3 ?",
        a: "6",
        b: "15",
        c: "8",
        d: "9",
        ans:"ans2",
        selectedOption: null
    },
    {
        question: "Q5:Evaluate 2 * 5 ?",
        a: "6",
        b: "5",
        c: "10",
        d: "9",
        ans:"ans3",
        selectedOption: null
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');


let questionCount = 0;
let score = 0;





const loadQuestion = () => {
    const questionList = quizDB[questionCount];
    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;

    if (questionList.selectedOption) {
        document.querySelector(`#${questionList.selectedOption}`).checked = true;
    };

    if (questionCount === 0) {
        prev.style.display = "none";
        next.style.display = "inline-block";
      }else{
        prev.style.display = "inline-block";
      }

    if(questionCount == 4){
        prev.style.display = "inline-block";
        submit.style.display = "inline-block";
        next.style.display = "none";

    };
    

};

    

 loadQuestion();

 

 const getCheckedAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }

    });
    return answer;
 };

 const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
 };

 

prev.addEventListener('click', () => {
   
    questionCount --;
    // deselectAll();
    loadQuestion(); 

});

 next.addEventListener('click', () => {
    const checkedAnswer = getCheckedAnswer();
    console.log(checkedAnswer);


    if(!checkedAnswer){
        alert("Select an option");
        return;
    };

    

    if(checkedAnswer === quizDB[questionCount].ans){
        score ++;
        
        
    };
    
    quizDB[questionCount].selectedOption = checkedAnswer;
    questionCount ++;
    deselectAll();
    loadQuestion();
       
 });

 submit.addEventListener('click',() =>{
    // if(questionCount < quizDB.length){
    //     loadQuestion();
        
    // }else{

        const checkedAnswer = getCheckedAnswer();
        console.log(checkedAnswer);

        if(checkedAnswer === quizDB[questionCount].ans){
           score ++;
        };

        questionCount ++;

        showScore.innerHTML = `
            <h3> You scored ${score}/${quizDB.length} </h3> 
            <button class="btn" onclick="location.reload()">Restart</button>`
            ;

        showScore.classList.remove('scoreArea');
    // };

    submit.setAttribute("disabled", "true");

});

 