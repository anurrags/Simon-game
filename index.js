var patternCreated = [];
var patternClicked = [];
var level = 1;
var highScore = 0;
var gameOn = false;
var correctTill = 0;
var aise = 1;
if (!gameOn) {
    gameOn = true;
    $(document).on("keypress", gameStarts);
}

// When game starts
function gameStarts() {
    patternCreated = [];
    patternClicked = [];
    $("h1").text("Press any Key to Start");
    level = 1;
    gameOn = true;
    correctTill = 0;
    levelUpdate(level);
    generatePattern();
}
//When Game Ends
function gameEnds() {
    $("h1").text("Game Over, Press Any Key to Restart");
    $(".highScore").text(highScore);
    $("body").addClass("game-over");
    var endSound = new Audio("sounds/wrong.mp3");
    endSound.play();
    setTimeout(function () {
        $("body").removeClass("game-over");
    }, 1000);
    gameOn = false;
}
/*******EventListener to button**************/
$(".btn").on("click", function () {
    btnClicked(this.id);
    checkPattern(this.id);
});
/*******Updating level string**************/
function levelUpdate(value) {
    $("h1").text(`Level ${value}`);
}
/*******Creating next pattern**************/
function generatePattern() {
    var randomNumber = Math.floor(Math.random() * 4) + 1;
    patternCreated.push(randomNumber);
    switch (randomNumber) {
        case 1:
            btnInPattern("green");
            break;
        case 2:
            btnInPattern("red");
            break;
        case 3:
            btnInPattern("blue");
            break;
        case 4:
            btnInPattern("yellow");
            break;
    }
    correctTill = 0;
}

/*******Checking button clicked is correct in pattern**************/
function checkPattern(value) {
    var num = 0;
    switch (value) {
        case "green":
            num = 1;
            break;
        case "red":
            num = 2;
            break;
        case "blue":
            num = 3;
            break;
        case "yellow":
            num = 4;
            break;
    }
    if (patternCreated[correctTill] != num) {
        if (level > highScore) {
            highScore = level - 1;
        }

        gameEnds();
    }
    correctTill++;
    if (correctTill == level) {
        level++;
        setTimeout(function () {
            levelUpdate(level);
            generatePattern();
        }, 500);
    }
}
/*******Pattern button effect**************/
function btnInPattern(value) {
    var audio = new Audio(`sounds/${value}.mp3`);
    audio.play();
    $(`.${value}`).fadeTo(100, 0.1).delay(10).fadeTo(100, 1);
}
/*******Creating a click effect on clicked button**************/
function btnClicked(value) {
    switch (value) {
        case "green":
            patternClicked.push(1);
            btnClickedView("green");
            break;
        case "red":
            patternClicked.push(2);
            btnClickedView("red");
            break;
        case "blue":
            patternClicked.push(3);
            btnClickedView("blue");
            break;
        case "yellow":
            patternClicked.push(4);
            btnClickedView("yellow");
            break;
    }
}
/*******Clicked button effect**************/
function btnClickedView(value) {
    var audio = new Audio(`sounds/${value}.mp3`);
    audio.play();
    $(`.${value}`).addClass("pressed");
    setTimeout(function () {
        $(`.${value}`).removeClass("pressed");
    }, 100);
}

const openModalBtn = document.querySelector(".btn-rules");
const closeModalBtn = document.querySelector(".btn-close");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

console.log(modal);
console.log(overlay);
// close modal function
const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};

// close the modal when the close button and overlay is clicked
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// close modal when the Esc key is pressed
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
    }
});

// open modal function
const openModal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};
// open modal event
openModalBtn.addEventListener("click", openModal);
