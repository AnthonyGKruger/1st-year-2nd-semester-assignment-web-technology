//event listeners
document.getElementById("scorechart").addEventListener("click", init);
document.getElementById("getScores").addEventListener("click", init);

//onload variables
let total;
let score;
let scoresArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let holesPlayed = 0;

//functions
//initializes game, called by enter scores button click event
function init() {
    getScores();
};

//uses a for loop to request scores through prompts for a user, breaks if cancel is pressed
function getScores() {
    clearScores();
    for (i = 0; i < scoresArray.length; i++) {
        score = prompt(`What is your score for course ${i + 1} ?\r\nIf you click cancel your total score will be tallied up to where you have stopped playing and your average score will be calculated.`, "0");
        checkIfStillPlaying();
        addToTotal();
        render();
        if (score === 0) {
            break;
        };
    }
    if (holesPlayed === 0) {
        document.getElementById("message").innerHTML = `Your total score was ${total} and your average score was ${total}`;
    } else {
        document.getElementById("message").innerHTML = `Your total score was ${total} and your average score was ${total / holesPlayed}`;
    }
};

//function to clear scores when enter scores button is pressed after a game has been played
function clearScores() {
    holesPlayed = 0;
    total = 0;
    for (i = 0; i < scoresArray.length; i++) {
        scoresArray[i] = 0;
        document.getElementById("" + i).innerHTML = 0;
    };
};

//function to check whether cancel button was pressed on alert box
function checkIfStillPlaying() {
    if (score != null) {
        holesPlayed += 1;
    };
    score === null ? score = 0 : scoresArray[i] = parseFloat(score);
};

//function to add score entered to total
function addToTotal() {
    total += scoresArray[i];
};

//function to add score to scoresheet 
function render() {
    document.getElementById("" + i).innerHTML = score;
    document.getElementById("total").innerHTML = total;
    if (score == 0 && holesPlayed == 0) {
        document.getElementById("average").innerHTML = total;
    } else {
        document.getElementById("average").innerHTML = total / holesPlayed;
    }
};