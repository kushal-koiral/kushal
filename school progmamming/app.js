function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("who was  the first chief minister of Assam?", ["Gopinath Bordoloi", "Anwara Taimur","muhammad saadulla", "None of these"], "Gopinath Bordoloi"),
    new Question("which one of these is search engine?", ["google chrome", "google", "uc browser", "mozila fire fox"], "google"),
    new Question("which is the nearest star from our planet?", ["moon", "star","sun", "jupiter"], "sun"),
    new Question("where is Statue of liberty Situated?", ["Russia", "India", "USA", "Brazil"], "USA"),
    new Question("  what is the height of statue of Unity", ["182m", "128m", "148m", "138m"], "182m")
    

];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();



