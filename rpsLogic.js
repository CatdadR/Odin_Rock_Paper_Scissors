let rock = 1
let paper = 2
let scissors = 3

let playerDecision 
let computerDecision


function getPlayerChoice(playerChoice){
   
    if(playerChoice == rock){
        playerDecision = "rock"
    } else if(playerChoice == paper){
        playerDecision = "paper"
    } else if(playerChoice == scissors){
        playerDecision = "scissors"
    } else{
        playerDecision = 'hello'
    }    
   
}

function getComputerChoice(){

    let minI = Math.ceil(1);
    let maxI = Math.floor(4);
    let numC = Math.floor(Math.random() * (maxI - minI) + minI);
    
    if(numC == rock){
        computerDecision = "rock"
    } else if(numC == paper){
        computerDecision = "paper"
    } else{
        computerDecision = "scissors"
    }
}

function playRound(){
    
    getComputerChoice();

    if(playerDecision == computerDecision){
        alert("draw")
    } else if(playerDecision == "rock" && computerDecision == "paper"){
        computerScore.textContent = ++computerScore.textContent
    } else if(playerDecision == "paper" && computerDecision == "rock"){
        playerScore.textContent = ++playerScore.textContent
    } else if(playerDecision == "rock" && computerDecision == "scissors"){
        playerScore.textContent = ++playerScore.textContent
    } else if(playerDecision == "scissors" && computerDecision == "rock"){
        computerScore.textContent = ++computerScore.textContent
    } else if(playerDecision == "paper" && computerDecision == "scissors"){
        computerScore.textContent = ++computerScore.textContent
    } else if(playerDecision == "scissors" && computerDecision == "paper"){
        playerScore.textContent = ++playerScore.textContent
    }

}

