const sizeInput = document.getElementById("size");
const startBtn = document.getElementById('start-btn');
const inputPanel = document.getElementById('input-panel');
const container = document.getElementById("stack-container");
let maxSize;

// functiom to create the place for stack's elements
const createElements = () => {
    let element = document.createElement('div');
    element.classList.add("element");
    element.innerHTML = '';

    container.append(element);
}
// funtion that make sure what is the size of stack 
const insertElement = (number) => {
    for (let i = 0; i < number - 1; i++) {
        createElements();
    }
}
// when click to start button
startBtn.addEventListener('click', () => {
    maxSize = sizeInput.value;
    insertElement(maxSize);
    inputPanel.style.display = 'none';
})

// function to show msg

const message = document.querySelector('.msg');

const show_msg = (type, msgText) => {
    let msg = document.createElement('p');
    msg.classList.add(`${type}`);
    msg.innerText = msgText;

    message.append(msg);
    setTimeout(() => {
        message.innerHTML = '';
    }, 2000)

}

// Function to push an element
const elementArray = [];
const push = (value) => {
    if (!isNaN(value)) {
        elementArray.unshift(value);
        if (elementArray.length <= maxSize) {
            const elements = document.querySelectorAll(".element");
            for (let i = 0; i < elementArray.length; i++) {
                elements[i].innerHTML = `<p class="element-value">${elementArray[i]}</p>`
            }
            show_msg("success", `${value} is inserted in the stack.`)
        } else {
            elementArray.shift();
            show_msg("error", "Stack is overflow.")
        }
    } else {
        show_msg("error", "Given value is not a number.")
    }
}
// Function for popping element out
const pop = () => {
    elementArray.shift();
    const elements = document.querySelectorAll(".element");
    elements.forEach(element => element.innerHTML = '');
    if (elementArray.length > 0) {
        for (let i = 0; i < elementArray.length; i++) {
            elements[i].innerHTML = `<p class="element-value">${elementArray[i]}</p>`
        }
        show_msg("success", "Top value is popped.")
    }
    else {
        show_msg("error", 'Stack is now empty.')
    }
}

// Function for showing help section 
let isShowingHelp = true;
const helpSection = document.getElementById("help");
const show_help = () => {
    if (isShowingHelp) {
        helpSection.style.display = 'none';
        isShowingHelp = false;
    } else if (!isShowingHelp) {
        helpSection.style.display = 'block';
        isShowingHelp = true
    }
}
