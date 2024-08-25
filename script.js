function getComputerChoice(){
    let max = 4;
    return Math.floor(Math.random() * max);
}


function getHumanChoice(){
    let user_num = 0;
    let ask_User = user_num(window.prompt("Type Rock, Paper, or Scissors"));
}

console.log(getHumanChoice());