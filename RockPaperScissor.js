
document.querySelector("#container");


function computerPlay(playerSelection,computerSelection){
    if(playerSelection == "ROCK" && computerSelection == "PAPER" || playerSelection == "SCISSORS" && computerSelection == "ROCK" 
    || playerSelection == "PAPER" && computerSelection == "SCISSORS"){
        return 1;
    }
    else{
        return 0;
    }
}
var round = 0;
var playerWins = 0;
var computerWins = 0;

function game(gamdId){
    
    var computerChoice = "";
    
    var randNum = Math.floor(Math.random() * 3);
    if(randNum == 1){
        computerChoice = "Rock";
    }
    else if(randNum == 2){
        computerChoice = "Paper";
    }
    else{
        computerChoice = "Scissors";
    }
   
    winner = computerPlay(playerChoice,computerChoice)
    if(winner == 0){
        document.write("You Win");
        playerWins= playerWins + 1;
    }
    else{
        document.write("You Lose");
        computerWins = computerWins +1;
    }
    round++;
    document.write("Round: ",round," ");
    document.write("Computer Wins: ",computerWins," ");
    document.write("Player Wins: ",playerWins," ");
    
    if(playerWins > computerWins){
        document.write("You Win!!!");
    }
    else{
        document.write("You Lose!!! :(");
    }   
}

const buttons = document.querySelectorAll('buttons');

buttons.forEach((buttons) => {
    buttons.addEventListener('click',(e) => {
        game(buttons.id);
    });
});
document.write("Round: ",round," ");
document.write("Computer Wins: ",computerWins," ");
document.write("Player Wins: ",playerWins," ");