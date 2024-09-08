let boxes = document.querySelectorAll('.box');
let newBtn = document.querySelector('#new-btn'); // Change to querySelector
let resetBtn = document.querySelector('#reset-btn'); // Change to querySelector
let msg = document.getElementById('msg'); // Added to select the message element
let msgContainer = document.getElementById('winner'); // Added to select the container for the message


let turnO = true; // If turnO = true; it is the turn of "O"

// To enable all boxes
const enableBox = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerHTML = '';
    }
};

// To reset game
const resetGame = () => {
    turnO = true;
    enableBox();
    msgContainer.classList.add('hide');
}

// Funtion to input the values on click
boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (turnO) {
            box.innerHTML = 'O';
            turnO = false;
        } else {
            box.innerHTML = 'X';
            turnO = true;
        }
        box.disabled = true;
        checkPatterns();
    })
});

// Arrays of winning patterns
let winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
// Check all patterns
const checkPatterns = () => {
    for (let pattern of winPatterns) {
        let value1 = boxes[pattern[0]].innerHTML;
        let value2 = boxes[pattern[1]].innerHTML;
        let value3 = boxes[pattern[2]].innerHTML;
        if (value1 != "" && value2 != "" && value3 != "") {
            if (value1 == value2 && value2 == value3) {
                console.log("Winner" + value1);
                winner(value1);
            }
        }
    }
};

// Display winner
const winner = (win) => {
    msg.innerHTML = `Congratulation! The winner is ${win}`
    msgContainer.classList.remove('hide');
    //This will disable all boxes after declaring the winner. We can also make a function to do this.
    for (let box of boxes) {
        box.disabled = true;
    }
};

resetBtn.addEventListener('click', resetGame);
newBtn.addEventListener('click', resetGame);


// Project completed :)