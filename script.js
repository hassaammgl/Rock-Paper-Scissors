const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoice = document.querySelectorAll('button');
let userChoice, computerChoice, result;

possibleChoice.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    genrateComputerChoice();
    getResult();
}));

///////////////////////////////////////computer choice func///////////////////////////////////////
function genrateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        computerChoice = 'Rock';
    }
    else if (randomNumber === 2) {
        computerChoice = 'Scissors';
    }
    else {
        computerChoice = 'Paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}
///////////////////////////////////////Get result func///////////////////////////////////////
function getResult() {
    if (computerChoice === userChoice) {
        result = "Its Draw!";
    }
    else if (computerChoice === 'Rock' && userChoice === 'Paper') {
        result = "You Win!";
    }
    else if (computerChoice === 'Rock' && userChoice === 'Scissors') {
        result = `You Lose!`;
    }
    else if (computerChoice === 'Paper' && userChoice === 'Scissors') {
        result = `You Win!`;
    }
    else if (computerChoice === 'Paper' && userChoice === 'Rock') {
        result = `You Lose!`;
    }
    else if (computerChoice === 'Scissors' && userChoice === 'Rock') {
        result = `You Win!`;
    }
    else if (computerChoice === 'Scissors' && userChoice === 'Paper') {
        result = `You Lose!`;
    }
    resultDisplay.innerHTML = result;
}