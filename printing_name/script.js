const startBtn = document.getElementById('start-btn');
const textContainer = document.getElementById('text-container');
const inputContainer = document.getElementById('input-container');
const inputText = document.getElementById('input-text');
const resetBtn = document.getElementById('reset-btn');
let lineNo = 1;

// Function to create paragraphs
const makeText = (text) => {
    let para = document.createElement('p');
    para.innerHTML = `<span>${lineNo}</span>${text}`;
    textContainer.appendChild(para);
    para.scrollIntoView({ behavior: "smooth", block: 'end' });
lineNo ++;
}

// Typing animation function
async function type(text, s) {
    let speed = parseInt(s) || 100; // Default speed
    let textLetters = text.split('');
    let makingText = '';

    for (let letter of textLetters) {
        if (letter === ' ') {
            makingText += ' ';
            makeText(makingText);
            await new Promise(resolve => setTimeout(resolve, speed));
            continue;
        }

        for (let i = 1; i <= 26; i++) {
            let currentLetter = String.fromCharCode(i + 96).toLowerCase();
            let targetLetter = letter.toLowerCase();

            makeText(makingText + currentLetter);
            await new Promise(resolve => setTimeout(resolve, speed));

            if (currentLetter === targetLetter) {
                makingText += targetLetter;
                await new Promise(resolve => setTimeout(resolve, speed));
                break;
            }
        }
    }

    resetBtn.style.display = 'inline-block';
}

// Start button event listener
startBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (inputText.value.trim() !== '') {
        let inputtedText = inputText.value;
        inputText.value = '';

        // Getting speed
        const speeds = document.querySelectorAll('.speed');
        let inputtedSpeed = '100'; // Default speed
        speeds.forEach((s) => {
            if (s.checked) {
                inputtedSpeed = s.getAttribute('id');
            }
        });

        inputContainer.style.display = 'none';
        textContainer.style.display = 'block';
        type(inputtedText, inputtedSpeed);
    } else {
        alert("This field cannot be empty!");
    }
});

// Reset button event listener
resetBtn.addEventListener('click', (e) => {
    e.preventDefault();

    resetBtn.style.display = 'none';
    textContainer.innerHTML = ''; // Clear previous text
    inputContainer.style.display = 'flex';
    textContainer.style.display = 'none';
    lineNo = 1;
});