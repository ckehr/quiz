$(document).ready(function() {
    //quiz question array
    var questions = [{
        question: "Question #1: What is the first thing Elliot says in the first episode",
        choices: ["Hack the Planet", "Good Morning", "I am Mr. Robot", "Hello Friend"],
        qNum : 0,
        correct : 3,
        fact: "This is the famous tagline of the series."
        },
        {
        question: "What is Elliot's sister's name?",
        choices: ["Dana", "Darlene", "Roberta", "Lisa"],
        qNum : 1,
        correct : 1,
        fact: "Elliot doesn't know who his sister is until halfway through the first season."
        },
        {
        question: "Who is Mr. Robot?",
        choices: ["Elliot", "Tyrell", "Kai", "A robot"],
        qNum : 2,
        correct : 0,
        fact: "Computer service with a smile :)"
        },
        {
        question: "What is the name of Elliot's fish?",
        choices: ["sport", "mr. blub", "qwerty", "ringo"],
        qNum : 3,
        correct : 2,
        fact: "What are the first six letters on a keyboard?"
        },
        {
        question: "What OS does Darlene use to hack?",
        choices: ["Kali Linux", "Ubuntu", "Windows", "OS X"],
        qNum : 4,
        correct : 0,
        fact: "Kali Linux is an operating system just for hackers."
    }]
    
    //global variables
    var numberCorrect = 0;
    var currentQuestion = 0;
    
    $("#question_wrapper").on("click", "#submit", function () {
        updateFsociety();
        currentQuestion++;
        nextQuestion();
    });
    
    $("#question_wrapper").on("click", "#retry_button", function () {
        numberCorrect = 0;
        currentQuestion = 0;
        $(".score_fsociety").css("display", "none");
        $("#score_fsociety0").css("display", "inline");
        var newQuestion = '<span class="question">'+questions[currentQuestion].question+'</span><br><div id="answer_holder"><input type="radio" name="option" class="option" value="0"><span class="answer">'+questions[currentQuestion].choices[0]+'</span><br><input type="radio" name="option" class="option" value="1"><span class="answer">'+questions[currentQuestion].choices[1]+'</span><br><input type="radio" name="option" class="option" value="2"><span class="answer">'+questions[currentQuestion].choices[2]+'</span><br><input type="radio" name="option" class="option" value="3"><span class="answer">'+questions[currentQuestion].choices[3]+'</span><br></div><div id="button_holder"><input type="button" id="submit" value="Submit Answer"><span id="hint"></span><input type="button" id="retry_button" value="Try Again!"></div>';
        $("#question_wrapper").html(newQuestion);
        $("#last_question_fact").html("");
    });

    function updateFsociety() {
        var answer = $("input[type='radio']:checked").val();
        if (answer == questions[currentQuestion].correct) {
            numberCorrect++;    
        }
        if (numberCorrect == 1) {
            $(".score_fsociety").css("display", "none")
            $("#score_fsociety1").fadeIn();
        }
        else if (numberCorrect == 2) {
            $(".score_fsociety").css("display", "none")
            $("#score_fsociety2").fadeIn();
        }
        else if (numberCorrect == 3) {
            $(".score_fsociety").css("display", "none")
            $("#score_fsociety3").fadeIn();
        }
        else if (numberCorrect == 4) {
            $(".score_fsociety").css("display", "none")
            $("#score_fsociety4").fadeIn();
        }
        else if (numberCorrect == 5) {
            $(".score_fsociety").css("display", "none")
            $("#score_fsociety5").fadeIn();
        }
    }

    function nextQuestion() {
        if (currentQuestion < 5) {
            $(".question").remove();
            $("#answer_holder input").remove();
            $("#answer_holder span").remove();
			$("#last_question_fact").hide();
            var newQuestion = '<span class="question">'+questions[currentQuestion].question+'</span><br><div id="answer_holder"><input type="radio" name="option" class="option" value="0"><span class="answer">'+questions[currentQuestion].choices[0]+'</span><br><input type="radio" name="option" class="option" value="1"><span class="answer">'+questions[currentQuestion].choices[1]+'</span><br><input type="radio" name="option" class="option" value="2"><span class="answer">'+questions[currentQuestion].choices[2]+'</span><br><input type="radio" name="option" class="option" value="3"><span class="answer">'+questions[currentQuestion].choices[3]+'</span><br></div><div id="button_holder"><input type="button" id="submit" value="Submit Answer"><span id="hint"></span><input type="button" id="retry_button" value="Try Again!"></div>';
            $("#question_wrapper").html(newQuestion);
            var lastFact= questions[currentQuestion-1].fact;
            $("#last_question_fact").html(lastFact).fadeIn();
        }
        else {
            $(".question").remove();
            $("#answer_holder input").remove();
            $("#answer_holder span").remove();
			$("#last_question_fact").fadeOut();
            $("#submit").css("display", "none");
            $("#retry_button").css("display", "inline");
            var lastFact= questions[currentQuestion-1].fact;
            $("#last_question_fact").html(lastFact);
            if (numberCorrect == 1) {
                var finalScore = '<span id="final">Congratulations on finishing the quiz!  You correctly answered '+numberCorrect+' question.'
                $("#answer_holder").html(finalScore);
            }
            else {
                var finalScore = '<span id="final">Congratulations on finishing the quiz!  You correctly answered '+numberCorrect+' questions.'
                $("#answer_holder").html(finalScore);
            }
        }
    }
});