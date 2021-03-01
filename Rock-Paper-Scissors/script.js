let playerChoice;
let opponentChoice;
let changePlayerHand;
let changeOpponentHand;
let randomNum;

let playerHand = document.getElementById("player-hand");
let opponentHand = document.getElementById("opponent-hand");

let playerScore = document.getElementById("player-score");
let opponentScore = document.getElementById("opponent-score");

let wonOrLostMsg = document.getElementById("wonOrLost-msg");
let resultExplanation = document.getElementById("result-explanation");
let roundIndication = document.getElementById("document-indication");

let possibleChoices = document.querySelectorAll(".player-choice");
let resetBttn = document.getElementById("reset");

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", e => {
    playerChoice = e.target.id;
    randomNum = Math.floor(Math.random() * 3) + 1; 
    changePlayerHand();
    changeOpponentHand();
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
    switch (randomNum) {
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
