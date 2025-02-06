const startBtn = document.getElementById('start-btn');
const textContainer = document.getElementById('text-container');
const inputContainer = document.getElementById('input-container');
const inputText = document.getElementById('input-text');



// function to make paragraphs
const makeText  = (text)=>{
    let para = document.createElement('p');
    para.innerText = text;
    textContainer.appendChild(para);
    para.scrollIntoView({behavior:"smooth", block:'end'})
}

// logic to type letters
async function type(text, s) {
    let speed = parseInt(s);
    let textLetters = text.split('');
    let makingText = ''
    for (let letter of textLetters) {

        if (letter === ' ') {
            makingText += ' ';
            makeText(makingText)
            await new Promise(resolve => setTimeout(resolve, speed));
            continue;
        }
        
        for (let i = 1; i <= 26; i++) {
            
            let currentLetter = String.fromCharCode(i + 96);
            makeText(makingText + currentLetter);
            await new Promise(resolve => setTimeout(resolve, speed));
            if (currentLetter == letter) {
                makingText += currentLetter;
                makeText(makingText);
                await new Promise(resolve => setTimeout(resolve, speed));
                break;
            }
        }
    };
    const resetBtn = document.getElementById('reset-btn');
    resetBtn.style.display  = 'inline-block';
}




startBtn.addEventListener("click", (e) => {
    e.preventDefault();

if(inputText.value !== ''){
    // getting text ----------------->
    let inputtedText = inputText.value;
    inputText.value = '';
    
    // getting speed ------------>
    const speeds = document.querySelectorAll('.speed');
    let inputtedSpeed;
    speeds.forEach((s) => {
        if (s.checked === true) {
            inputtedSpeed = s.getAttribute('id');
        }
    })
    inputContainer.style.display = 'none';
    textContainer.style.display = 'block'
    type(inputtedText, inputtedSpeed);
}
else{
    alert("This field cannot be empty!");
}

    
})

const resetBtn = document.getElementById('reset-btn');
resetBtn.addEventListener('click', (e)=>{

    resetBtn.style.display = 'none'
    e.preventDefault();
    inputContainer.style.display = 'flex'
    textContainer.style.display = 'none';
    textContainer.innerHTML = '';
})