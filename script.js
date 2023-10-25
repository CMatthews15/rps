//call out area where you want to make changes and name

const playerText = document.querySelector("#playerGuess");
const computerText = document.querySelector("#cpuGuess");
const resultMessage = document.querySelector("#result");
const scoreUpdate = document.querySelector("#score");

const gameButtons = document.querySelectorAll(".rpsButton");
const resetAll = document.querySelector("#reset");


//create undefined variables to be used in game
let player;
// player= gameButton choice text
let computer;
// computer= 1/3 options
let results;
//compare player to computer to decide winner

let score;
//score update based on winner decision


//click any of the rps bttons will 
gameButtons.forEach(button => button.addEventListener("click", () => {
//add the text of that button to player entry
    player = "ROCK"
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    checkWinner();
}));
    
 
//pick option1-3 for computer
   function computerTurn(){
        const randNum = Math.floor(Math.random() * 3) + 1;

    switch(randNum){
      case 1:
        computer = "ROCK";
        break;
      case 2:
        computer = "PAPER";
        break;
      case 3:
        computer = "SCISSORS";
        break;

}};

//decide the winner (evaluate comparisons)

function checkWinner(){
  
  if (player === computer) {
    resultMessage.innerHTML = 'Result: Tie';
  }
  // else if ()
  // switch (player){
  //   case "ROCK":
  //     console.log(computer);
  //     if (computer=== "PAPER"){
  //       resultMessage.innerHTML = "Result: you lose"
  //     }
  //     else 
  //     {
  //       alert('1')
  //     }
  //     break;
  // }
}


resetAll.addEventListener("click", function(){
  playerText.textContent = `Player: `;
  computerText.textContent = `Computer: `;
})
  




