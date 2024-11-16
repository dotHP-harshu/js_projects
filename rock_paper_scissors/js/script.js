const playArea = document.getElementById("play-area");
const resultSection = document.getElementById("result");
const scorePara = document.querySelector('#score h1');
let cpuChoice;
let userChoice;
let score = 0;





// Function to show rules
const rulesSection = document.getElementById('rules');
const showRules = () => {
    rulesSection.style.display = 'flex';
}

// Function to close rules
const closeRules = () => {
    rulesSection.style.display = 'none';
}
// Function to play again 
const playAgain = () => {
    playArea.style.display = 'flex';
    resultSection.style.display = 'none';
}
// ----------------------------------------------------------------------------------
// Showing result
const showResult = (result, userChoice, cpuChoice) => {
    playArea.style.display = 'none';
    resultSection.style.display = 'flex';

    let resultMsgPara = document.querySelector('.result-msg p');
    if (result === 'draw') {
        resultMsgPara.innerHTML = `match ${result}`;
    } else {
        resultMsgPara.innerHTML = `you ${result}`;
    }

    let userChoiceImg = document.querySelector('.user-result img');
    userChoiceImg.src = `images/icon-${userChoice}.svg`;
    userChoiceImg.className = userChoice;

    let cpuChoiceImg = document.querySelector('.cpu-result img');
    cpuChoiceImg.src = `images/icon-${cpuChoice}.svg`;
    cpuChoiceImg.className = cpuChoice;
}
// ----------------------------------------------------------------------------------
// Counting Score
const updateScore = (result) => {
    if (result === 'won') {
        score++;
    } else if (result === 'lose') {
        score--;
    }
    scorePara.innerHTML = score;
}
// ----------------------------------------------------------------------------------
// Getting result
const getResult = (userChoice, cpuChoice) => {
    let result;
    if (userChoice === cpuChoice) {
        result = "draw";
    }
    else if (userChoice === "rock" && cpuChoice === "lizard") {
        result = "won";
    }
    else if (userChoice === "lizard" && cpuChoice === "spock") {
        result = "won";
    }
    else if (userChoice === "spock" && cpuChoice === "scissors") {
        result = "won";
    }
    else if (userChoice === "scissors" && cpuChoice === "paper") {
        result = "won";
    }
    else if (userChoice === "paper" && cpuChoice === "rock") {
        result = "won";
    }
    else if (userChoice === "rock" && cpuChoice === "scissors") {
        result = "won";
    }
    else if (userChoice === "lizard" && cpuChoice === "paper") {
        result = "won";
    }
    else if (userChoice === "spock" && cpuChoice === "rock") {
        result = "won";
    }
    else if (userChoice === "scissors" && cpuChoice === "lizard") {
        result = "won";
    }
    else if (userChoice === "paper" && cpuChoice === "spock") {
        result = "won";
    } else {
        result = "lose";
    }
    updateScore(result);
    showResult(result, userChoice, cpuChoice);
}
// ----------------------------------------------------------------------------------
// Getting cpu choice
let choiceArr = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

const gettingCpuChoice = () => {
    let index = Math.floor(Math.random() * 5);
    cpuChoice = choiceArr[index];
}

// Getting user's choice
let choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        userChoice = e.target.getAttribute("id");
        gettingCpuChoice();
        getResult(userChoice, cpuChoice);
    })
})
