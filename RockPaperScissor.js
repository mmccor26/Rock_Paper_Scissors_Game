
document.querySelector("#container");
var round = 0;
var playerWins = 0;
var computerWins = 0;
const buttons = document.querySelectorAll('buttons');
var pScore = document.getElementById("playerScore");
var cScore = document.getElementById("computerScore");
var res = document.getElementById("result");
var rockBtn = document.getElementById("Rock");
var scissorsBtn = document.getElementById("Scissors");
var paperBtn = document.getElementById("Paper");

rockBtn.addEventListener('click',()=>{
    game("ROCK");
});

paperBtn.addEventListener('click',()=>{
    game("PAPER");
});
scissorsBtn.addEventListener('click',()=>{
    game("SCISSORS");
});


function computerPlay(playerSelection,computerSelection){
    if(playerSelection == "ROCK" && computerSelection == "PAPER" || playerSelection == "SCISSORS" && computerSelection == "ROCK" 
    || playerSelection == "PAPER" && computerSelection == "SCISSORS"){
        return 1;
    }
    else{
        return 0;
    }
}


function game(gamdId){
    console.log("Function called");
    var playerChoice = gamdId
    var computerChoice = "";
    
    var randNum = Math.floor(Math.random() * 3);
    if(randNum == 1){
        computerChoice = "ROCK";
    }
    else if(randNum == 2){
        computerChoice = "PAPER";
    }
    else{
        computerChoice = "SCISSORS";
    }
   
    winner = computerPlay(playerChoice,computerChoice)
    if(winner == 0){
        
        playerWins= playerWins + 1;
        pScore.textContent = "Player Score: "+playerWins
    }
    else{
      
        computerWins = computerWins +1;
        cScore.textContent = "Computer Score: "+computerWins
    }
    round++;
   
    
    if(playerWins >= 5 || computerWins >= 5){
        if(playerWins>computerWins){
            res.textContent = "You Win!!!";
        }
        else{
            res.textContent = "You Lose :(";
        }
       
    }
    
}

