const boardSpace = document.querySelectorAll(".boardSpace");
const comment = document.querySelector("h2");


const gameFlow = (() => {

    let player = [{
        name:"Player 1", //player[0]
        icon : "X" 
    },
    {
        name:"Player 2", //player[1]
        icon : "O" 
    }]

   

    for (let i = 0 ; i < boardSpace.length; i++){
  
        boardSpace[i].addEventListener("click", (e)=>{
            switchPlayers(e);
            checkWin();
        })
    }    
        
    let playerTurn = player[0] ;
    comment.textContent = "Player 1's turn"; //starts game off with this then will change after player goes

    function switchPlayers (e) {
        
        if ( playerTurn == player[0]) {
            comment.textContent = `Player 2's turn`;
            e.target.textContent = player[0].icon;
        playerTurn = player[1];
        }else if (playerTurn == player[1])  { 
            comment.textContent = "Player 1's turn"
            e.target.textContent = player[1].icon;
            playerTurn = player[0];
        
        }
    }
});

gameFlow(); 


const checkWin = (() => {
//console.log(boardSpace[0].textContent);

    function boardPosition (pos){
        return boardSpace[pos].textContent;
    }

    if ((boardPosition(0) == "X" && boardPosition(1) == "X" && boardPosition(2) == "X") || // top row check  
    (boardPosition(3) == "X" && boardPosition(4) == "X" && boardPosition(5) == "X") || //middle row
    (boardPosition(6) == "X" && boardPosition(7) == "X" && boardPosition(8) == "X") ||  //bottom row
    (boardPosition(0) == "X" && boardPosition(4) == "X" && boardPosition(8) == "X") ||//left to right diagonal
    (boardPosition(2) == "X" && boardPosition(4) == "X" && boardPosition(6) == "X")|| //right to left diagonal
    (boardPosition(0) == "X" && boardPosition(3) == "X" && boardPosition(6) == "X")|| //first column
    (boardPosition(1) == "X" && boardPosition(4) == "X" && boardPosition(7) == "X")|| //second columnn
    (boardPosition(2) == "X" && boardPosition(5) == "X" && boardPosition(8) == "X")) { // third column column
        
        comment.textContent = "You win player 1!"

    } else if ((boardPosition(0) == "O" && boardPosition(1) == "O" && boardPosition(2) == "O") || // top row check  
    (boardPosition(3) == "O" && boardPosition(4) == "O" && boardPosition(5) == "O") || //middle row
    (boardPosition(6) == "O" && boardPosition(7) == "O" && boardPosition(8) == "O") ||  //bottom row
    (boardPosition(0) == "O" && boardPosition(4) == "O" && boardPosition(8) == ")") ||//left to right diagonal
    (boardPosition(2) == "O" && boardPosition(4) == "O" && boardPosition(6) == "O") || //right to left diagonal
    (boardPosition(0) == "X" && boardPosition(3) == "X" && boardPosition(6) == "X")|| //first column
    (boardPosition(1) == "X" && boardPosition(4) == "X" && boardPosition(7) == "X")|| //second columnn
    (boardPosition(2) == "X" && boardPosition(5) == "X" && boardPosition(8) == "X")) { //third column
        
        comment.textContent = "You win player 2!"
        //need to make something to disbale clicking after player wins
    }
})        



//Issue #1: boardSpace.addEventListener was giving error saying not a function
//Solution #1: boardSpace is referring to an ARRAY of elements while we want to add an event listener to each individal one so had to make a loop that adds event listener to each boardSpace div

//Issue #2 : Couldnt figure out how to alternate players with if statement
//Solution #2 : for the if statement i was writing if (playerTurn = player[0]) but was not putting == was just putting one =
    
//Issue #3 : Couldnt figure out a way to target the board spaces to check for winner. Tried getting boardValue using querySelect data-value 
//it wouldnt know the rest of the row having all "X" or "O", just the most recently clicked one
//Solution #3: Targeted boardSpace[number].textContent and made if statement checking the rows. Made boardPosition function to shorten writing


//const player1Spot =
            // rowSpot = prompt(`Player 1's turn, enter Row of which space you want marker on`);
            // rowItem = prompt("Player 1's turn, enter ITEM NUMBER of the row you want marker on")
            //need to tell it to print player1's "X" on player1Spot
            //board[0][2] = row 1 , 3rd item
            //console.log
            // boardSpot = `board[${rowSpot}][${rowItem}("X")]`; //how to access 2d array so I can put the X for player one for wherever the prompt says
            // console.log(gameBoard(boardSpot));
            // gameBoard(boardSpot);