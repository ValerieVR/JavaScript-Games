let playerChoice;
let opponentChoice;
let changePlayerHand;
let changeOpponentHand;
let comparePlayerOpponent;
let roundTracker = 0;
let increaseRounds;

let playerHand = document.getElementById("player-hand");
let opponentHand = document.getElementById("opponent-hand");

let playerScore = document.getElementById("player-score");
let opponentScore = document.getElementById("opponent-score");

let wonOrLostMsg = document.getElementById("wonOrLost-msg");
let resultExplanation = document.getElementById("result-explanation");
let roundIndication = document.getElementById("round-indication");

let possibleChoices = document.querySelectorAll(".player-choice");
let resetBttn = document.getElementById("reset");

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", e => {
    playerChoice = e.target.id;
    opponentChoice = Math.floor(Math.random() * 3) + 1; 
    changePlayerHand();
    changeOpponentHand();
    comparePlayerOpponent();
    increaseRounds();
}));

changePlayerHand = () => {
    switch (playerChoice) {
        case "rock":
            playerHand.src="images/rock-left.png";
            break;
        case "paper":
            playerHand.src="images/paper-left.png";
            break;
        case "scissors":
            playerHand.src="images/scissors-left.png";
            break;
    }
}

changeOpponentHand = () => {
    switch (opponentChoice) {
        case 1:
            opponentHand.src="images/rock-right.png";
            break;
        case 2:
            opponentHand.src="images/paper-right.png";
            break;
        case 3:
            opponentHand.src="images/scissors-right.png";
            break;
    }
}

comparePlayerOpponent = () => {
    switch (true) {
        case playerChoice == "rock" && opponentChoice == 1:
            wonOrLostMsg.innerHTML = "nobody wins";
            resultExplanation.innerHTML = "it's a tie";
            break;
        case playerChoice == "rock" && opponentChoice == 2:
            wonOrLostMsg.innerHTML = "you lose";
            resultExplanation.innerHTML = "paper wraps rock";
            break;
        case playerChoice == "rock" && opponentChoice == 3:
            wonOrLostMsg.innerHTML = "you win";
            resultExplanation.innerHTML = "rock blunts scissors";
            break;
        case playerChoice == "paper" && opponentChoice == 1:
            wonOrLostMsg.innerHTML = "you win";
            resultExplanation.innerHTML = "paper wraps rock";
            break;
        case playerChoice == "paper" && opponentChoice == 2:
            wonOrLostMsg.innerHTML = "nobody wins";
            resultExplanation.innerHTML = "it's a tie";
            break;
        case playerChoice == "paper" && opponentChoice == 3:
            wonOrLostMsg.innerHTML = "you lose";
            resultExplanation.innerHTML = "scissors cut paper";
            break;
        case playerChoice == "scissors" && opponentChoice == 1:
            wonOrLostMsg.innerHTML = "you lose";
            resultExplanation.innerHTML = "rock blunts scissors";
            break;
        case playerChoice == "scissors" && opponentChoice == 2:
            wonOrLostMsg.innerHTML = "you win";
            resultExplanation.innerHTML = "scissors cut paper";
            break;
        case playerChoice == "scissors" && opponentChoice == 3:
            wonOrLostMsg.innerHTML = "nobody wins";
            resultExplanation.innerHTML = "it's a tie";
            break;
    }
}

increaseRounds = () => {
    roundTracker += 1;
    roundIndication.innerHTML = "round " + roundTracker;
}