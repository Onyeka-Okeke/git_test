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
 function controlFlow(){
    // This function controls the flow of the game
    // It will determine whose turn it is and update the game board accordingly
    function updateGameBoard() {
    let gameBoard = Gameboard();
    let players = Players();
    let currentPlayer = players.player1;
    function switchPlayer(row, col) {
        if (gameBoard[row][col] === "") {
            gameBoard[row][col] = currentPlayer.mark;
        }
        if (currentPlayer === players.player1) {
            currentPlayer = players.player2;
        } else {
            currentPlayer = players.player1;
        }
    }
    return {switchPlayer, currentPlayer, gameBoard};
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
    return {message: "no winner"};
    }
 return {updateGameBoard, checkWin}; 
}
Players(); 
Gameboard();
const { updateGameBoard, checkWin } = controlFlow();
const { switchPlayer, gameBoard, currentPlayer } = updateGameBoard();
switchPlayer(0, 0);
switchPlayer(0, 1);
switchPlayer(1, 0);
console.log(gameBoard); // See the board after the move
console.log(currentPlayer.name); // See whose turn is next