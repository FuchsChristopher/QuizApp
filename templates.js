function renderQuizApp() {
    return `
    <div class="card2 quiz-card">

            <div class="bgc-nav">
                <div class="navImg">
                    <img class="imgSize" src="./img/logo.png">
                </div>
                <nav class="navLink">
                    <div class="hover"><a href="#">HTML</a></div>
                    <div class="hover"><a href="#">CSS</a></div>
                    <div class="hover"><a href="#">JS</a></div>
                    <div class="hover"><a href="#">JAVA</a></div>
                </nav>
            </div>
            <div class="card-body card-body-color" id="startScreen" style="display: none;">
                <div class="startScreenDiv">
                    <div class="startScreenDiv2"><b>Welcome to<br>
                        The Awesome HTML Quiz</b>
                        Ready for for the Challenge?
                    </div>
                    <img class="startScreenImg" src="./img/brainbg.jpg" style="width: 100%;">
                    <button class="startButton" onclick="init()">START NOW</button>
                </div>

            </div>
            <div class="card-body card-body-color" id="endScreen" style="display: none;">
                <div class="endScreenDiv">
                    <img class="endScreenImg" src="./img/brain result.png">
                    <span>COMPLETE<br>
                        HTML QUIZ
                    </span>
                </div>
                <div class="endScreenDiv2">
                    <span style="margin-left: 140px;">YOUR SCORE</span><b id="amount-right-of-questions" style="margin-left: 40px;">1</b>/<b id="amount-of-questions" style="margin-right: 55px;">5</b>
                    <div><img class="endScreenImg2" src="./img/tropy.png"></div>
                </div>
                <div class="endScreenDiv3">
                    <button>SHARE</button>
                    <button onclick="restartGame()">REPLAY</button>
                </div>
                
            </div>

            <div class="card-body2 card-body-color" id="questionBody">
                <h5 class="card-title" id="questiontext">Frage</h5>

                <div class="card quiz-answer-card mb-2" id="answerDiv1" onclick="answer('answer_1')">
                    <div class="card-body" id="answer_1">
                        Antwort
                    </div>
                </div>

                <div class="card quiz-answer-card mb-2" id="answerDiv2" onclick="answer('answer_2')">
                    <div class="card-body" id="answer_2">
                        Antwort
                    </div>
                </div>


                <div class="card quiz-answer-card mb-2" id="answerDiv3" onclick="answer('answer_3')">
                    <div class="card-body" id="answer_3">
                        Antwort
                    </div>
                </div>


                <div class="card quiz-answer-card mb-2" id="answerDiv4" onclick="answer('answer_4')">
                    <div class="card-body" id="answer_4">
                        Antwort
                    </div>
                </div>

                <div class="question-footer">
                    <span>
                        <b id="question-number">1</b> von <b id="all-questions">5</b> Fragen
                    </span>

                    <button onclick="nextQuestion()" class="btn btn-primary" id="next-button" disabled>Nächste
                        Frage</button>
                </div>
                <div class="progress">
                    <div class="progress-bar" id="progessbar" role="progressbar" aria-label="Example with label" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                  </div>

            </div>
        </div>
    `;
}