//this is an array that is made from all the div elements within the div container 
const squares = Array.from(document.querySelectorAll("#board div"));

// This is an array of winning combinations used to check for whether the game has been won or not
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

//Variables needed to initialize the game before init function
let turn;
let board;
const messages = document.querySelector("h2");
let win;

//event listeners needed for click events occuring on the page
document.getElementById("board").addEventListener("click", handleTurn); //listener for click events on divs
document.getElementById("reset-button").addEventListener("click", init) //listener for click on new game button

// getWinner function: used in the handleTurn function to determaine if there is a winner,
//  if so then the event listener is remove so that no more blocks can be selected
//  and the message to the players is adusted accordingly
function getWinner() {
    let winner = null;
    winningCombos.forEach(function(combo, index) {
        if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) {
            winner = board[combo[0]];
        };
    });
    return winner ? winner : board.includes('') ? null : 'T';
};

// handleTurn function: used by the event listener to handle the click event parsed onto the document,
// iterates through the squares array and changes the relevent index in the array into the symbol for the player 
// and also changes the turn variable to be the next players turn and makes sure that the same block isnt played twice
// it also makes a call to render in order to display the changes made to the squares
function handleTurn() {
    let idx = squares.findIndex(function(square) {
        return square === event.target;
    });
    if (board[idx] === "X" || board[idx] === "O") {
        alert("block already taken!!");
    } else {
        board[idx] = turn
        turn = turn === "X" ? "O" : "X";
        win = getWinner();
        render();
    };
};

// render function: this function is used in the init and the handleTurn functions. it is used to update the display and according to who is currently
// meant to be playing and it maps out the markings of board array onto the square divs
function render() {
    board.forEach(function(mark, index) {
        squares[index].textContent = mark;
    });
    messages.textContent = win === 'T' ? `That's a TIE, try again!` : win ? `${win} wins the game!` : `It's ${turn}'s turn!`;
    messages.textContent === `${win} wins the game!` ? document.getElementById("board").removeEventListener("click", handleTurn) : document.getElementById("board").addEventListener("click", handleTurn);;
};

//init function: this functions is called at the bottom of the script and is used to initialize the game.
//  it is also called by a click event for the reset/new game button.
function init() {
    win = null;
    document.getElementById("board").addEventListener("click", handleTurn);
    messages.textContent = "Waiting to initialize the game, press new game to start.";
    turn = prompt("Player 1, would you like to be an X or an O?, click ok to default to X", "X");
    turn = turn.toUpperCase()
    messages.textContent = win === 'T' ? `That's a TIE, try again!` : win ? `${win} wins the game!` : `It's ${turn}'s turn!`;
    board = [
        "", "", "",
        "", "", "",
        "", "", ""
    ];
    render();
};

// initializing function that starts the game
init();