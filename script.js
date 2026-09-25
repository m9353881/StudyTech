// LOGIN

function login() {

    const username =
        document.getElementById("username").value.trim();

    const password =
        document.getElementById("password").value;

    const error =
        document.getElementById("loginError");


    // Correct username and password

    if (
        username === "student" &&
        password === "1234"
    ) {

        // Hide error message
        error.style.display = "none";


        // Hide login page
        document
            .getElementById("loginPage")
            .classList.remove("active");


        // Show navigation bar
        document
            .getElementById("navbar")
            .style.display = "flex";


        // Show home page
        showPage("homePage");

    }

    else {

        // Show error
        error.style.display = "block";

    }
}


// LOGOUT

function logout() {

    // Hide navbar
    document
        .getElementById("navbar")
        .style.display = "none";


    // Hide all pages
    const pages =
        document.querySelectorAll(".page");

    pages.forEach(function(page) {

        page.classList.remove("active");

    });


    // Show login page
    document
        .getElementById("loginPage")
        .classList.add("active");


    // Clear username
    document
        .getElementById("username")
        .value = "";


    // Clear password
    document
        .getElementById("password")
        .value = "";

}


// PAGE NAVIGATION

function showPage(pageID) {

    const pages =
        document.querySelectorAll(".page");


    pages.forEach(function(page) {

        page.classList.remove("active");

    });


    const selectedPage =
        document.getElementById(pageID);


    if (selectedPage) {

        selectedPage.classList.add("active");

    }


    window.scrollTo(0, 0);

}


// QUESTIONS

const questions = [

    {
        question:
            "When studying, how long can you usually concentrate before needing a break?",

        options: [

            {
                text:
                    "Around 20–30 minutes",
                type:
                    "pomodoro"
            },

            {
                text:
                    "I like testing myself during study",
                type:
                    "recall"
            },

            {
                text:
                    "I prefer writing what I remember",
                type:
                    "blurting"
            }

        ]
    },


    {
        question:
            "How do you usually prepare for an exam?",

        options: [

            {
                text:
                    "Study in short, focused sessions",
                type:
                    "pomodoro"
            },

            {
                text:
                    "Test myself using questions",
                type:
                    "recall"
            },

            {
                text:
                    "Write down everything I remember",
                type:
                    "blurting"
            }

        ]
    },


    {
        question:
            "What do you do after reading a chapter?",

        options: [

            {
                text:
                    "Take a short break before continuing",
                type:
                    "pomodoro"
            },

            {
                text:
                    "Close the book and try to remember the information",
                type:
                    "recall"
            },

            {
                text:
                    "Write everything I can remember",
                type:
                    "blurting"
            }

        ]
    },


    {
        question:
            "Which activity helps you remember information better?",

        options: [

            {
                text:
                    "Studying with a timer",
                type:
                    "pomodoro"
            },

            {
                text:
                    "Answering practice questions",
                type:
                    "recall"
            },

            {
                text:
                    "Writing information from memory",
                type:
                    "blurting"
            }

        ]
    },


    {
        question:
            "What is your biggest problem when studying?",

        options: [

            {
                text:
                    "I get distracted easily",
                type:
                    "pomodoro"
            },

            {
                text:
                    "I forget what I studied",
                type:
                    "recall"
            },

            {
                text:
                    "I am not sure what I actually remember",
                type:
                    "blurting"
            }

        ]
    },


    {
        question:
            "Which study method sounds most comfortable to you?",

        options: [

            {
                text:
                    "25 minutes study + 5 minutes break",
                type:
                    "pomodoro"
            },

            {
                text:
                    "Ask myself questions without looking at notes",
                type:
                    "recall"
            },

            {
                text:
                    "Write everything I remember about a topic",
                type:
                    "blurting"
            }

        ]
    },


    {
        question:
            "How do you prefer to check whether you understand something?",

        options: [

            {
                text:
                    "Study it for a fixed amount of time",
                type:
                    "pomodoro"
            },

            {
                text:
                    "Try answering questions about it",
                type:
                    "recall"
            },

            {
                text:
                    "Explain or write it from memory",
                type:
                    "blurting"
            }

        ]
    },


    {
        question:
            "Which statement describes you best?",

        options: [

            {
                text:
                    "I work better when I have a study schedule",
                type:
                    "pomodoro"
            },

            {
                text:
                    "I learn well by testing myself",
                type:
                    "recall"
            },

            {
                text:
                    "I learn well by recalling and writing information",
                type:
                    "blurting"
            }

        ]
    },


    {
        question:
            "What would you rather do during revision?",

        options: [

            {
                text:
                    "Follow a timer and take planned breaks",
                type:
                    "pomodoro"
            },

            {
                text:
                    "Answer questions about the topic",
                type:
                    "recall"
            },

            {
                text:
                    "Write everything I remember before checking my notes",
                type:
                    "blurting"
            }

        ]
    }

];


// QUESTION VARIABLES

let currentQuestion = 0;

let selectedType = null;

let scores = {

    pomodoro: 0,

    recall: 0,

    blurting: 0

};


// START QUESTIONNAIRE

function startQuestionnaire() {

    currentQuestion = 0;

    scores = {

        pomodoro: 0,

        recall: 0,

        blurting: 0

    };

    selectedType = null;


    showPage("questionPage");


    displayQuestion();

}


// DISPLAY QUESTION

function displayQuestion() {

    const container =
        document.getElementById(
            "questionContainer"
        );


    const question =
        questions[currentQuestion];


    selectedType = null;


    let html = "";


    // Question number

    html +=
        '<div class="question-number">';

    html +=
        "Question " +
        (currentQuestion + 1) +
        " of " +
        questions.length;

    html +=
        "</div>";


    // Question

    html +=
        '<div class="question-text">';

    html +=
        question.question;

    html +=
        "</div>";


    // Options

    question.options.forEach(
        function(option) {

            html +=
                '<label class="option">';

            html +=
                '<input type="radio" name="answer" value="' +
                option.type +
                '">';

            html +=
                option.text;

            html +=
                "</label>";

        }
    );


    // Next button

    html +=
        '<button id="nextButton" class="next-btn" disabled>';


    if (
        currentQuestion ===
        questions.length - 1
    ) {

        html += "Finish";

    }

    else {

        html += "Next";

    }


    html +=
        "</button>";


    // Put HTML into page

    container.innerHTML = html;


    // Get radio buttons

    const options =
        document.querySelectorAll(
            'input[name="answer"]'
        );


    // Add event listener

    options.forEach(
        function(option) {

            option.addEventListener(
                "change",
                function() {

                    selectedType =
                        this.value;


                    const labels =
                        document.querySelectorAll(
                            ".option"
                        );


                    labels.forEach(
                        function(label) {

                            label.classList.remove(
                                "selected"
                            );

                        }
                    );


                    this.parentElement
                        .classList.add(
                            "selected"
                        );


                    document
                        .getElementById(
                            "nextButton"
                        )
                        .disabled = false;

                }
            );

        }
    );


    // Next button event

    document
        .getElementById("nextButton")
        .addEventListener(
            "click",
            nextQuestion
        );


    // Progress bar

    const progress =
        (currentQuestion /
            questions.length) *
        100;


    document
        .getElementById(
            "progressBar"
        )
        .style.width =
        progress + "%";

}


// NEXT QUESTION

function nextQuestion() {

    // No answer selected

    if (selectedType === null) {

        return;

    }


    // Add score

    scores[selectedType] =
        scores[selectedType] + 1;


    // Go to next question

    currentQuestion =
        currentQuestion + 1;


    if (
        currentQuestion <
        questions.length
    ) {

        displayQuestion();

    }

    else {

        calculateResult();

    }

}


// CALCULATE RESULT

function calculateResult() {

    // Progress 100%

    document
        .getElementById(
            "progressBar"
        )
        .style.width = "100%";


    // Display scores

    document
        .getElementById(
            "pomodoroScore"
        )
        .textContent =
        scores.pomodoro;


    document
        .getElementById(
            "recallScore"
        )
        .textContent =
        scores.recall;


    document
        .getElementById(
            "blurtingScore"
        )
        .textContent =
        scores.blurting;


    // Find highest score

    let highestScore =
        scores.pomodoro;


    if (
        scores.recall >
        highestScore
    ) {

        highestScore =
            scores.recall;

    }


    if (
        scores.blurting >
        highestScore
    ) {

        highestScore =
            scores.blurting;

    }


    // Determine technique

    let technique;


    if (
        scores.pomodoro ===
        highestScore
    ) {

        technique =
            "pomodoro";

    }

    else if (
        scores.recall ===
        highestScore
    ) {

        technique =
            "recall";

    }

    else {

        technique =
            "blurting";

    }


    // Save result

    localStorage.setItem(
        "recommendedTechnique",
        technique
    );


    // Display result

    if (
        technique ===
        "pomodoro"
    ) {

        document
        .getElementById(
            "resultIconImage"
        )
        .src = "pomodoro.png";


        document
            .getElementById(
                "resultTitle"
            )
            .textContent =
            "Pomodoro Technique";


        document
            .getElementById(
                "resultDescription"
            )
            .textContent =
            "Based on your answers, the Pomodoro Technique matches your study habits. Try focused study sessions followed by short breaks.";

    }


    else if (
        technique ===
        "recall"
    ) {

        document
            .getElementById(
                "resultIconImage"
            )
            .src = "recall.png";


        document
            .getElementById(
                "resultTitle"
            )
            .textContent =
            "Active Recall";


        document
            .getElementById(
                "resultDescription"
            )
            .textContent =
            "Based on your answers, Active Recall matches your study habits. Try testing yourself instead of simply rereading your notes.";

    }


    else {

        document
            .getElementById(
                "resultIconImage"
            )
            .src = "blurting.png";


        document
            .getElementById(
                "resultTitle"
            )
            .textContent =
            "Blurting Technique";


        document
            .getElementById(
                "resultDescription"
            )
            .textContent =
            "Based on your answers, the Blurting Technique matches your study habits. Try writing everything you remember before checking your notes.";

    }


    // Show result

    showPage("resultPage");

}


// SHOW RECOMMENDED ACTIVITY

function showRecommendedActivity() {

    const technique =
        localStorage.getItem(
            "recommendedTechnique"
        );


    if (
        technique ===
        "pomodoro"
    ) {

        showPage("timerPage");

    }

    else if (
        technique ===
        "recall"
    ) {

        showPage("quizPage");

    }

    else if (
        technique ===
        "blurting"
    ) {

        showPage("blurtingPage");

    }

    else {

        showPage("techniquesPage");

    }

}


// POMODORO TIMER

let timerSeconds =
    25 * 60;

let timerInterval =
    null;


// UPDATE TIMER

function updateTimerDisplay() {

    const minutes =
        Math.floor(
            timerSeconds / 60
        );


    const seconds =
        timerSeconds % 60;


    let minuteText =
        String(minutes);


    let secondText =
        String(seconds);


    if (minutes < 10) {

        minuteText =
            "0" + minutes;

    }


    if (seconds < 10) {

        secondText =
            "0" + seconds;

    }


    document
        .getElementById(
            "timer"
        )
        .textContent =
        minuteText +
        ":" +
        secondText;

}


// START TIMER

function startTimer() {

    // Prevent multiple timers

    if (
        timerInterval !== null
    ) {

        return;

    }


    timerInterval =
        setInterval(
            function() {

                if (
                    timerSeconds > 0
                ) {

                    timerSeconds--;

                    updateTimerDisplay();

                }

                else {

                    clearInterval(
                        timerInterval
                    );

                    timerInterval =
                        null;


                    alert(
                        "Time is up! Take a 5-minute break."
                    );

                }

            },
            1000
        );

}


// PAUSE TIMER

function pauseTimer() {

    clearInterval(
        timerInterval
    );

    timerInterval =
        null;

}


// RESET TIMER

function resetTimer() {

    clearInterval(
        timerInterval
    );

    timerInterval =
        null;


    timerSeconds =
        25 * 60;


    updateTimerDisplay();

}


// ACTIVE RECALL QUIZ

function checkQuiz(answer) {

    const result =
        document.getElementById(
            "quizResult"
        );


    if (
        answer === "A"
    ) {

        result.textContent =
            "Correct! Photosynthesis is the process plants use to make food using light energy.";

        result.style.color =
            "green";

    }

    else {

        result.textContent =
            "Not quite. Try to recall the definition again.";

        result.style.color =
            "red";

    }

}


// BLURTING

function showBlurtingPoints() {

    const text =
        document
            .getElementById(
                "blurtText"
            )
            .value
            .trim();


    if (
        text === ""
    ) {

        alert(
            "Please write what you remember first."
        );

        return;

    }


    document
        .getElementById(
            "blurtingPoints"
        )
        .style.display =
        "block";

}


// INITIALISE

updateTimerDisplay();
