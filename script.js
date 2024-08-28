document.addEventListener('DOMContentLoaded', function () {
    let humanScore = 0;
    let computerScore = 0;
    let humanChoice;

    function getComputerChoice() {
        let max = 3;
        let computer_choice = Math.floor(Math.random() * max);
        return ["rock", "paper", "scissors"][computer_choice];
    }

    function round() {
        const rock = document.querySelector("#one");
        const paper = document.querySelector("#two");
        const scissors = document.querySelector("#three");

        rock.addEventListener("click", function () {
            humanChoice = "rock";
            playRound();
        });
        
        paper.addEventListener("click", function () {
            humanChoice = "paper";
            playRound();
        });

        scissors.addEventListener("click", function () {
            humanChoice = "scissors";
            playRound();
        });

        function playRound() {
            if (humanScore < 5 && computerScore < 5) {
                const computerSelection = getComputerChoice();
                console.log(`Computer: ${computerSelection}`);
                console.log(`Human: ${humanChoice}`);

                if (humanChoice === "rock" && computerSelection === "scissors" ||
                    humanChoice === "paper" && computerSelection === "rock" ||
                    humanChoice === "scissors" && computerSelection === "paper") {
                    humanScore++;
                } else if (humanChoice !== computerSelection) {
                    computerScore++;
                } else {
                    window.alert("Tie");
                }

                console.log(`Human score: ${humanScore}`);
                console.log(`Computer score: ${computerScore}`);
            }
        }
    }

    round();
});



    


    

