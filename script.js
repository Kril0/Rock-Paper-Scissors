let humanScore = 0;
let computerScore = 0;


function getComputerChoice(){
    let max = 3;
    let computer_choice = Math.floor(Math.random() * max);
    if(computer_choice == 0){
        computer_choice = "rock";
    }
    if(computer_choice == 1){
        computer_choice = "paper";
    }
    if(computer_choice == 2){
        computer_choice = "scissors";
    }
    return computer_choice;
}


function getHumanChoice(){
    let user_input = window.prompt("Type Rock, Paper, or Scissors");
    return user_input;
}




function round(){

const humanSelection = (getHumanChoice());
const computerSelection = (getComputerChoice());
humanSelection.toLowerCase();
console.log(computerSelection);
console.log(humanSelection);


    if(humanSelection == "rock" && computerSelection == "scissors"){
        humanScore = humanScore + 1;
    
    }
    else if(humanSelection == "paper" && computerSelection == "rock"){
        humanScore = humanScore + 1;
    }
    else if(humanSelection == "scissors" && computerSelection == "paper"){
        humanScore = humanScore + 1;

    }
    else if(humanSelection == computerSelection){
        window.alert("Tie");
    }
    else{
        computerScore += 1;
    }
}
    

function playGame(){
    for(let i = 0; i < 5; ++i){
        round();
    }
    console.log("human score " + humanScore);
    console.log("computer score " + computerScore);
}

