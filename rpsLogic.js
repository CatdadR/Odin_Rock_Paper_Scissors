
let rock = 1
let paper = 2
let scissors = 3

let playerDecision 
let computerDecision

let roundCount = 0

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
    
    let pScore = playerScore.textContent
    let cScore = computerScore.textContent
    let topPlayer
    roundCount = ++roundCount

    //Rock paper scissors win-lose logic//
        if(playerDecision == computerDecision){
            roundCount = --roundCount
        } else if(playerDecision == "rock" && computerDecision == "paper"){
            cScore = ++computerScore.textContent
        } else if(playerDecision == "paper" && computerDecision == "rock"){
            pScore = ++playerScore.textContent
        } else if(playerDecision == "rock" && computerDecision == "scissors"){
            pScore = ++playerScore.textContent
        } else if(playerDecision == "scissors" && computerDecision == "rock"){
            cScore = ++computerScore.textContent
        } else if(playerDecision == "paper" && computerDecision == "scissors"){
            cScore = ++computerScore.textContent
        } else if(playerDecision == "scissors" && computerDecision == "paper"){
            pScore = ++playerScore.textContent
        } 
    //Who has higher score//
        if(pScore == cScore){
            document.getElementById("playerScore").style.backgroundColor = "rgb(238, 210, 51)";
            document.getElementById("computerScore").style.backgroundColor = "rgb(238, 210, 51)";
            document.getElementById("rImg").src = "Images/Tie.png"
            topPlayer = "No one "
        }else if(pScore > cScore){
            document.getElementById("playerScore").style.backgroundColor = "rgb(104, 238, 51";
            document.getElementById("computerScore").style.backgroundColor = "rgb(243, 107, 73)";
            document.getElementById("rImg").src = "Images/Tick.png"
            topPlayer = "Player"

        }else if(pScore < cScore){
            document.getElementById("playerScore").style.backgroundColor = "rgb(243, 107, 73)";
            document.getElementById("computerScore").style.backgroundColor = "rgb(104, 238, 51";
            document.getElementById("rImg").src = "Images/Cross.png"
            topPlayer = "Computer"
        }
        if(roundCount == 6){    
            alert(topPlayer + "Wins!")
        }
}


