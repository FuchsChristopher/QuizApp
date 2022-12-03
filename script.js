let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": '<div class="answerButtons"><b>A</b></div>Robbie Williams',
        "answer_2": '<div class="answerButtons"><b>B</b></div>Lady Gaga',
        "answer_3": '<div id="answer_Button" class="answerButtons"><b>C</b></div>Tim Berners-Lee',
        "answer_4": '<div class="answerButtons"><b>D</b></div>Justin Bieber',
        "right_answer": 3
    },
    {
        "question": "Was bedeutet das HTML Tag &lt;a&gt;?",
        "answer_1": '<div class="answerButtons"><b>A</b></div>Text Fett',
        "answer_2": '<div class="answerButtons"><b>B</b></div>Container',
        "answer_3": '<div id="answer_Button" class="answerButtons"><b>C</b></div>Ein Link',
        "answer_4": '<div class="answerButtons"><b>D</b></div>Kursiv',
        "right_answer": 3
    },
    {
        "question": "Wie bindet man eine Website in eine Website ein?",
        "answer_1": '<div class="answerButtons"><b>A</b></div>&lt;iframe&gt;, &lt;frame&gt;, and &lt;frameset&gt;',
        "answer_2": '<div id="answer_Button" class="answerButtons"><b>B</b></div>&lt;iframe&gt;',
        "answer_3": '<div class="answerButtons"><b>C</b></div>&lt;frame&gt;',
        "answer_4": '<div class="answerButtons"><b>D</b></div>&lt;frameset&gt',
        "right_answer": 2
    },
    {
        "question": "Wie stellt man einen Text am BESTEN fett dar?",
        "answer_1": '<div id="answer_Button" class="answerButtons"><b>A</b></div>&lt;strong&gt;',
        "answer_2": '<div class="answerButtons"><b>B</b></div>CSS nutzen;',
        "answer_3": '<div class="answerButtons"><b>C</b></div>&lt;bold&gt;',
        "answer_4": '<div class="answerButtons"><b>D</b></div>&lt;b&gt;',
        "right_answer": 1
    },
    {
        "question": "Welches Attribut kann man NICHT für Textarea verwenden?",
        "answer_1": '<div id="answer_Button" class="answerButtons"><b>A</b></div>readonly',
        "answer_2": '<div class="answerButtons"><b>B</b></div>max',
        "answer_3": '<div class="answerButtons"><b>C</b></div>from',
        "answer_4": '<div class="answerButtons"><b>D</b></div>spellcheck',
        "right_answer": 1
    },
    {
        "question": "Wie wählst du alle Elemente vom Typ &lt;a&gt; mit dem attribut title aus?",
        "answer_1": '<div id="answer_Button" class="answerButtons"><b>A</b></div>a[title]{...}',
        "answer_2": '<div class="answerButtons"><b>B</b></div>a > title {...}',
        "answer_3": '<div class="answerButtons"><b>C</b></div>a.title {...}',
        "answer_4": '<div class="answerButtons"><b>D</b></div>a=title {...}',
        "right_answer": 1
    },
    {
        "question": "Wie definiert man in JavaScript eine Variable?",
        "answer_1": '<div class="answerButtons"><b>A</b></div>let 100 = rate;',
        "answer_2": '<div class="answerButtons"><b>B</b></div>100 = let rate;',
        "answer_3": '<div class="answerButtons"><b>C</b></div>rate = 100;',
        "answer_4": '<div id="answer_Button" class="answerButtons"><b>D</b></div>let rate = 100;',
        "right_answer": 4
    }
];


let currentQuestion = 0;


function init() {
    document.getElementById('all-questions').innerHTML = questions.length;
    showQuestion();
}


function showQuestion() {
    if (currentQuestion >= questions.length) {
        //TODO: Show End Screen
        document.getElementById('endScreen').style = '';
        document.getElementById('questionBody').style = 'display: none';
    } else {
        let question = questions[currentQuestion];
        document.getElementById('question-number').innerHTML = currentQuestion + 1;
        document.getElementById('questiontext').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
    }
}


function answer(selection) {
    let question = questions[currentQuestion];
    let selectionQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (selectionQuestionNumber == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
        document.getElementById('answer_Button').classList.add('bgForButton');
    } else {
        document.getElementById('answer_Button').classList.add('bgForButton');
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }
    document.getElementById('next-button').disabled = false;
}


function nextQuestion() {
    currentQuestion++; // z.B. von 0 auf 1
    document.getElementById('next-button').disabled = true;
    resetAnswerButtons();
    showQuestion();
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