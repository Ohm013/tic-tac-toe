const boardSpace = document.querySelectorAll(".boardSpace");

function gameBoard () {
   
}

for (let i = 0 ; i < boardSpace.length; i++){
  
      boardSpace[i].addEventListener("click", markBoard)
}    
    
function markBoard (e){
      let boardValue = e.target.getAttribute("data-value") //gets the value of each board spot
        console.log(boardValue);

        //add more functions here
      
    };


function gameFlow () {
   
   
    let player = [{
        name:"Player 1", //player[0]
        icon : "X" 
    },
    {
        name:"Player 2", //player[1]
        icon : "O" 
    }]


  
        
  
            

   // let playerTurn = player[0] ;
    
    // function markBoard (){
    //    // if (playerTurn = player[0]){
    //         return e.target.textContent = "X"
           
    //     }
           
       
          

        
        
                
};


gameFlow();



//Issue #1: boardSpace.addEventListener was giving error saying not a function
//Solution #2: boardSpace is referring to an ARRAY of elements while we want to add an event listener to each individal one so had to make a loop that adds event listener to each boardSpace div

     //const player1Spot =
            // rowSpot = prompt(`Player 1's turn, enter Row of which space you want marker on`);
            // rowItem = prompt("Player 1's turn, enter ITEM NUMBER of the row you want marker on")
            //need to tell it to print player1's "X" on player1Spot
            //board[0][2] = row 1 , 3rd item
            //console.log
            // boardSpot = `board[${rowSpot}][${rowItem}("X")]`; //how to access 2d array so I can put the X for player one for wherever the prompt says
            // console.log(gameBoard(boardSpot));
            // gameBoard(boardSpot);