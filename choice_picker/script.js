const inputBox = document.getElementById('choice-input');
const pickBtn = document.getElementById('pick-btn');
const resetBtn = document.getElementById('reset-btn');
const choiceContainer = document.querySelector('.choice-container');
let pickCount = 1;




inputBox.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        updatechoice(inputBox.value);
        inputBox.value = '';
    }
})

const updatechoice = (choiceValue) => {
    let choice = document.createElement('span');
    choice.classList.add('choice');

    choice.innerHTML = choiceValue;

    choiceContainer.append(choice);
}

const pickChoice = () => {
    const choices = document.querySelectorAll('.choice');
    let choiceIdx = Math.floor(Math.random() * choices.length);
    if (choices.length === 0) {
        alert("Enter atleast two choices. :)")
    } else {
        pickCount++;
        choices[choiceIdx].classList.add("picked");
    }
}

pickBtn.addEventListener('click', () => {
    if (pickCount == 1) {
        pickChoice();
        pickBtn.classList.add('disabled');
        pickBtn.disabled = true;
    }
})

resetBtn.addEventListener('click', () => {
    pickBtn.disabled = false;
    pickBtn.classList.remove('disabled');
    pickCount = 1;

    const choices = document.querySelectorAll('.choice');
    choices.forEach(choice => choice.remove());
})
