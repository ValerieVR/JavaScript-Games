let playerChoice;
let opponentChoice;
let changePlayerHand;
let changeOpponentHand;
let comparePlayerOpponent;
let increaseRounds;
let increasePlayerScore;
let increaseOpponentScore; 
let showModal;
let hideModal;
let resetGame;
let customizeGameOverMsg;
let roundTracker = 0;
let playerScoreTracker = 0;
let opponentScoreTracker = 0;

let playerHand = document.getElementById("player-hand");
let opponentHand = document.getElementById("opponent-hand");

let playerScore = document.getElementById("player-score");
let opponentScore = document.getElementById("opponent-score");

let wonOrLostMsg = document.getElementById("wonOrLost-msg");
let resultExplanation = document.getElementById("result-explanation");
let roundIndication = document.getElementById("round-indication");

let possibleChoices = document.querySelectorAll(".player-choice");
let resetBttn = document.getElementById("reset");

let modal = document.getElementsByClassName("modal")[0];
let finalWinnerMsg = document.getElementById("finalWinner-msg");

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", e => {
    playerChoice = e.target.id;
    opponentChoice = Math.floor(Math.random() * 3) + 1; 
    changePlayerHand();
    changeOpponentHand();
    comparePlayerOpponent();
    increaseRounds();
    showModal();
    hideModal();
    resetGame();
    customizeGameOverMsg();
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
            increaseOpponentScore();
            break;
        case playerChoice == "rock" && opponentChoice == 3:
            wonOrLostMsg.innerHTML = "you win";
            resultExplanation.innerHTML = "rock blunts scissors";
            increasePlayerScore();
            break;
        case playerChoice == "paper" && opponentChoice == 1:
            wonOrLostMsg.innerHTML = "you win";
            resultExplanation.innerHTML = "paper wraps rock";
            increasePlayerScore();
            break;
        case playerChoice == "paper" && opponentChoice == 2:
            wonOrLostMsg.innerHTML = "nobody wins";
            resultExplanation.innerHTML = "it's a tie";
            break;
        case playerChoice == "paper" && opponentChoice == 3:
            wonOrLostMsg.innerHTML = "you lose";
            resultExplanation.innerHTML = "scissors cut paper";
            increaseOpponentScore();
            break;
        case playerChoice == "scissors" && opponentChoice == 1:
            wonOrLostMsg.innerHTML = "you lose";
            resultExplanation.innerHTML = "rock blunts scissors";
            increaseOpponentScore();
            break;
        case playerChoice == "scissors" && opponentChoice == 2:
            wonOrLostMsg.innerHTML = "you win";
            resultExplanation.innerHTML = "scissors cut paper";
            increasePlayerScore();
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

increasePlayerScore = () => {
    playerScoreTracker += 1;
    playerScore.innerHTML = playerScoreTracker;
}

increaseOpponentScore = () => {
    opponentScoreTracker += 1;
    opponentScore.innerHTML = opponentScoreTracker;
}

showModal = () => {
    if (roundTracker == 10) {
        modal.style.display = "block";
    }
}

hideModal = () => {
    resetBttn.addEventListener("click", () => {
        modal.style.display = "none";
    });
}

resetGame = () => {
    resetBttn.addEventListener("click", () => {
        roundTracker = 0;
        playerScoreTracker = 0;
        opponentScoreTracker = 0;
        playerScore.innerHTML = 0;
        opponentScore.innerHTML = 0;
        wonOrLostMsg.innerHTML = "let's play";
        resultExplanation.innerHTML = "beat your opponent in 10 rounds";
        roundIndication.innerHTML = "";
        playerHand.src="images/start-left.png";
        opponentHand.src="images/start-right.png";
    });
}

customizeGameOverMsg = () => {
    if (roundTracker == 10) {
        switch (true) {
            case playerScoreTracker > opponentScoreTracker:
                finalWinnerMsg.innerHTML = "congratulations, you won!";
                resetBttn.innerHTML = "play again";
                break;
            case playerScoreTracker < opponentScoreTracker:
                finalWinnerMsg.innerHTML = "bummer, you lost!";
                resetBttn.innerHTML = "try again";
                break;
            case playerScoreTracker == opponentScoreTracker:
                finalWinnerMsg.innerHTML = "bummer, nobody wins!";
                resetBttn.innerHTML = "try again";
                break;
        }
    }
}
