// This is a simple implementation of a Tic Tac Toe game using JavaScript
function Gameboard() {
let board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];
return board;
};
function Players(){
    function createPlayer(name, mark){
    // This function creates a player object with a name and a mark
    // The name is the player's name and the mark is either "X" or "O"
    if (typeof name !== "string" || typeof mark !== "string") {     
        throw new Error("Name and mark must be strings");
    }
    if (mark !== "X" && mark !== "O") {
        throw new Error("Mark must be either 'X' or 'O'"); 
    }
     return {name, mark};   
    }
    let player1 = createPlayer("Joe", "X");
    let player2 = createPlayer("mary", "O");
    return{player1, player2, createPlayer};
}
 function ControlFlow(){
    // This function controls the flow of the game
    // It will determine whose turn it is and update the game board accordingly
    function updateGameBoard() {
    let gameBoard = Gameboard();
    let players = Players();
    let currentPlayer = players.player1;
    function setCurrentPlayer(player) {
    currentPlayer = player;
}
    function getCurrentPlayer() {
        return currentPlayer;
    }
    function switchPlayer(row, col) {
        if (gameBoard[row][col] !== "") {
            return;
        }
         gameBoard[row][col] = currentPlayer.mark;
        if (currentPlayer === players.player1) {
            currentPlayer = players.player2;
        } else {
            currentPlayer = players.player1;
        }
        return true;
    }
    return {switchPlayer, getCurrentPlayer, setCurrentPlayer, gameBoard, players};
    }
    
 function checkWin(board, mark) {  
    // This function checks if the current player has won the game
    // It checks all possible winning combinations
    // Horizontal, vertical, and diagonal
    if (board[0][0] === mark && board[0][1] === mark && board[0][2] === mark) return {message: `${mark} wins!`};
    if (board[1][0] === mark && board[1][1] === mark && board[1][2] === mark) return {message: `${mark} wins!`};
    if (board[2][0] === mark && board[2][1] === mark && board[2][2] === mark) return {message: `${mark} wins!`};
    if (board[0][0] === mark && board[1][0] === mark && board[2][0] === mark) return {message: `${mark} wins!`};
    if (board[0][1] === mark && board[1][1] === mark && board[2][1] === mark) return {message: `${mark} wins!`};
    if (board[0][2] === mark && board[1][2] === mark && board[2][2] === mark) return {message: `${mark} wins!`};
    if (board[0][0] === mark && board[1][1] === mark && board[2][2] === mark) return {message: `${mark} wins!`};
    if (board[0][2] === mark && board[1][1] === mark && board[2][0] === mark) return {message: `${mark} wins!`};
    return {message: `no winner`};
    }
 return {updateGameBoard, checkWin}; 
}
Players(); 
Gameboard();
const { updateGameBoard, checkWin } = ControlFlow();
const { switchPlayer, gameBoard, getCurrentPlayer, setCurrentPlayer, players } = updateGameBoard();
//code below is for displaying to the DOM
const gameContainer = document.querySelector('.game-container'); 
let gameOver = false;
 function DisplayBoard(board) {
    gameContainer.addEventListener('click', function(event) {
        if (gameOver) return;
        const Clickedcell = event.target;
        if (Clickedcell.classList.contains('cell')) {

            const row = +Clickedcell.dataset.row;
            const col = +Clickedcell.dataset.col;
            const moveMade = switchPlayer(row, col);
            if (moveMade) {
                const mark = gameBoard[row][col];
                Clickedcell.innerText = mark;
                const winCheck = checkWin(gameBoard, mark);
            
            if (winCheck.message !== "no winner") {
                const messageElement = document.querySelector('#message');
                setTimeout(() => {
                    messageElement.innerText = winCheck.message;
                }, 100);
                gameOver = true;
            }
        }
        }
    });
    const resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click', () => {
    // Clear the board array in place
    for (let i = 0; i < gameBoard.length; i++) {
        for (let j = 0; j < gameBoard[i].length; j++) {
            gameBoard[i][j] = '';
        }
    }
    // Clear the cell text using a regular for loop
    const cells = document.querySelectorAll('.cell');
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerText = '';
    }
    const messageElement = document.querySelector('#message');
    messageElement.innerText = '';
    setCurrentPlayer(players.player1);
    gameOver = false;
});
 }
DisplayBoard(gameBoard);