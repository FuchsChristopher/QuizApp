let rightQuestions = 0;
let currentQuestion = 0;
let AUDIO_SUCCESS = new Audio('audio/success.mp3');
let AUDIO_WRONG = new Audio('audio/wrong.mp3');


function init() {
    document.getElementById('all-questions').innerHTML = questions.length;
    document.getElementById('startScreen').style = 'display: none';
    document.getElementById('questionBody').style = '';
    showQuestion();
}


function showQuestion() {
    if (gameIsOver()) {
        showEndscreen();
    } else {
        renderProgressbar();
        updateToNextQuestion();
    }
    enablePointer();
}


function gameIsOver() {
    return currentQuestion >= questions.length;
}


function showStartScreen() {
    let mainContent = document.getElementById('mainContainer');
    mainContent.innerHTML = '';
    mainContent.innerHTML = renderQuizApp();
    //Show Start Screen
    document.getElementById('startScreen').style = '';
    document.getElementById('questionBody').style = 'display: none';
}


function renderProgressbar() {
    let percent = currentQuestion / (questions.length - 1);
    percent = Math.round(percent * 100);
    document.getElementById('progessbar').innerHTML = `${percent} %`;
    document.getElementById('progessbar').style.width = `${percent}%`;
}


function updateToNextQuestion() {
    let question = questions[currentQuestion];
    document.getElementById('question-number').innerHTML = currentQuestion + 1;
    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = `<div class="answerButtons"><b>A</b></div>${question['answer_1']}`;
    document.getElementById('answer_2').innerHTML = `<div class="answerButtons"><b>B</b></div>${question['answer_2']}`;
    document.getElementById('answer_3').innerHTML = `<div class="answerButtons"><b>C</b></div>${question['answer_3']}`;
    document.getElementById('answer_4').innerHTML = `<div class="answerButtons"><b>D</b></div>${question['answer_4']}`;
}


function showEndscreen() {
    document.getElementById('endScreen').style = '';
    document.getElementById('questionBody').style = 'display: none';
    document.getElementById('amount-of-questions').innerHTML = questions.length;
    document.getElementById('amount-right-of-questions').innerHTML = rightQuestions;
}


function restartGame() {
    document.getElementById('startScreen').style = '';
    document.getElementById('questionBody').style = 'display: none';
    document.getElementById('endScreen').style = 'display: none';
    document.getElementById('next-button').innerHTML = 'Nächste Frage';
    rightQuestions = 0;
    currentQuestion = 0;

}


function answer(selection) {
    let question = questions[currentQuestion];
    let selectionQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;
    if (selectionQuestionNumber == question['right_answer']) {
        rightAnswer(selection);
        disabledPointer();
    } else {
        wrongAnswer(idOfRightAnswer, selection);
        disabledPointer();
    }
    if (currentQuestion == 6) {
        document.getElementById('next-button').innerHTML = 'Finsh';
    }
    document.getElementById('next-button').disabled = false;
}


function rightAnswer(selection) {
    document.getElementById(selection).firstChild.classList.add('bgForButton');
    document.getElementById(selection).parentNode.classList.add('bg-success');
    rightQuestions++;
    AUDIO_SUCCESS.play();
}


function wrongAnswer(idOfRightAnswer, selection) {
    document.getElementById(idOfRightAnswer).firstChild.classList.add('bgForButton');
    document.getElementById(selection).parentNode.classList.add('bg-danger');
    document.getElementById(selection).firstChild.classList.add('bgForButton2');
    document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    AUDIO_WRONG.play();
}


function nextQuestion() {
    currentQuestion++; // z.B. von 0 auf 1
    document.getElementById('next-button').disabled = true;
    resetAnswerButtons();
    showQuestion();
}


function enablePointer() {
    document.getElementById('answerDiv1').style.pointerEvents = 'unset';
    document.getElementById('answerDiv2').style.pointerEvents = 'unset';
    document.getElementById('answerDiv3').style.pointerEvents = 'unset';
    document.getElementById('answerDiv4').style.pointerEvents = 'unset';
}


function disabledPointer() {
    document.getElementById('answerDiv1').style.pointerEvents = 'none';
    document.getElementById('answerDiv2').style.pointerEvents = 'none';
    document.getElementById('answerDiv3').style.pointerEvents = 'none';
    document.getElementById('answerDiv4').style.pointerEvents = 'none';
}


function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}