function GameBoard() {
   let board = [
     [" ", " ", " "],
     [" ", " ", " "],
     [" ", " ", " "]
     ];
    //console.log(board)
     return board;
 }
 let gameboard = GameBoard();
 function Players() {
   function createPlayer(name, mark){
     const logMark = console.log(`${name} has ${mark} as their mark`);
     return{
       name,
       mark,
       logMark
     };
   }
     const player1 = createPlayer("Player One", "'X'");
     const player2 = createPlayer("Player Two", "'O'");
     return{player1, player2, createPlayer};
 }
let {player1, player2} = Players();



function ControlFlow(player1, player2){
  let activePlayer = player1;
  //switch Players 
  function switchTurn() {
    if(activePlayer === player1) {
       activePlayer = player2;
  } 
    activePlayer = player1;
  }
  
  function makeMove(row, col){
    
    if (gameboard[row][col] === " ") {
      
      gameboard[row][col] = activePlayer.mark;
      
      const placedMark =  activePlayer.mark;
      switchTurn();
      
      return placedMark;
      
    } else {
      return "move invalid";
    }
  }
  return{activePlayer, switchTurn, makeMove};
}
const controling = ControlFlow(player1, player2)
console.log(player1.name)
 console.log(gameboard)
 console.log(controling.activePlayer.name)
 const result1 = controling.makeMove(1, 1)
 console.log(result1)
 console.log(controling.activePlayer.name)
 const result2 = controling.makeMove(1, 0)
 console.log(result2)
