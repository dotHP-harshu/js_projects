const display = document.querySelector('.result-box span');
const btns = document.querySelectorAll('.btn');
let clickCount, operator, first, second;
first = null;
second = null;
let currentValue = '';

clickCount = 1;

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        getValues(btn);
    })
})

// Function to get input values

function getValues(btn) {
    let btnValue = btn.textContent;
    // if value is a number or dot(.) then add the vlaue in currentValue and update display with current value
    if (!isNaN(btnValue) || btnValue === '.') {
        currentValue += btnValue;
        displayUpdate(currentValue);
    } else if (['+', '-', '*', '/'].includes(btnValue)) {
        // if value is present in operators array then get first oprand and dispay update
        first = parseFloat(currentValue);
        currentValue = '';
        operator = btnValue;
        displayUpdate(operator);
    } else if (btnValue === '=') {
        // if value is equal then get second value and do calculation
        second = parseFloat(currentValue);
        currentValue = '';
        calculation(first, second, operator);
    } else if (btnValue === 'AC') {
        // if value is AC then clear all valuess
        clear();
    }

}

function calculation(first, second, operator) {
    let result;
    switch (operator) {
        case '+':
            result = first + second;
            break;
        case '-':
            result = first - second;
            break;
        case '*':
            result = first * second;
            break;
        case '/':
            result = first / second;
            break;
    }
    displayUpdate(result);

}

function displayUpdate(value) {
    display.innerHTML = value;
}

function clear() {
    value = '0';
    currentValue = '';
    first = null;
    second = null;
    displayUpdate(value);
}