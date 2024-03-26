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
            let boardValue = boardSpace[i].getAttribute("data-value") //gets the value of each board spot
            console.log(boardValue);
            switchPlayers(e);
            checkWin(boardValue,boardSpace[i]);
        })
    }    
        
    let playerTurn = player[0] ;
    comment.textContent = "Player 1's turn";

    function switchPlayers (e) {
        
      

        if ( playerTurn == player[0]) {
            comment.textContent = `Player 2's turn`;
            console.log(playerTurn);
            e.target.textContent = player[0].icon;
        playerTurn = player[1];
        }else if (playerTurn == player[1])  { 
            comment.textContent = "Player 1's turn"
            e.target.textContent = player[1].icon;
            console.log(playerTurn);
            playerTurn = player[0];
        
        }
    }
});

gameFlow(); 


const checkWin = ((boardValue,boardSqaure) => {
    console.log(boardValue);
    console.log(boardSqaure);
    if ((boardValue == 1 &&  boardValue == 2 && boardValue == 3) && (boardSquare.textContent = "X")){
   
        comment.textContent = "You win!"
     }
     }
)
           



//Issue #1: boardSpace.addEventListener was giving error saying not a function
//Solution #1: boardSpace is referring to an ARRAY of elements while we want to add an event listener to each individal one so had to make a loop that adds event listener to each boardSpace div

//Issue #2 : Couldnt figure out how to alternate players with if statement
//Solution #2 : for the if statement i was writing if (playerTurn = player[0]) but was not putting == was just putting one =
     //const player1Spot =
            // rowSpot = prompt(`Player 1's turn, enter Row of which space you want marker on`);
            // rowItem = prompt("Player 1's turn, enter ITEM NUMBER of the row you want marker on")
            //need to tell it to print player1's "X" on player1Spot
            //board[0][2] = row 1 , 3rd item
            //console.log
            // boardSpot = `board[${rowSpot}][${rowItem}("X")]`; //how to access 2d array so I can put the X for player one for wherever the prompt says
            // console.log(gameBoard(boardSpot));
            // gameBoard(boardSpot);