const node_container = document.querySelector('.node_container');
const null_node = document.getElementById('null_node');
const message = document.querySelector('.msg');
const helpSection = document.getElementById('help');
let isShowingHelp = true;

const getAllNodes = () => document.querySelectorAll('.node');

// insert at end
const iEnd = (value) => {

    if (!isNaN(value)) {
        let node = document.createElement('div');
        node.classList.add('node');
        node.innerHTML = `<p class="node_value">${value}</p>
     <img class="node_img" src="assets/img/right-arrow.png" alt="link">`;

        null_node.before(node);
        show_msg('success', `${value} is inserted at the end.`);
        const nodes = getAllNodes();
        nodes.forEach(node => node.classList.remove('head'));
        nodes[0].classList.add('head');
    } else {
        show_msg("error", "The value should be a number.");
    }

}
// insert at beginning
const iBeg = (value) => {
    if (!isNaN(value)) {
        let node = document.createElement('div');
        node.classList.add('node');
        node.innerHTML = `<p class="node_value">${value}</p>
     <img class="node_img" src="assets/img/right-arrow.png" alt="link">`;

        node_container.prepend(node);
        show_msg('success', `${value} is inserted at the beginning.`);
        const nodes = getAllNodes();
        nodes.forEach(node => node.classList.remove('head'));
        nodes[0].classList.add('head');
    } else {
        show_msg("error", "The value should be a number.")
    }
}
// insert at any specific position
const iPos = (position, value) => {
    if (!isNaN(position) && !isNaN(value)) {
        let node = document.createElement('div');
        node.classList.add('node');
        node.innerHTML = `<p class="node_value">${value}</p>
     <img class="node_img" src="assets/img/right-arrow.png" alt="link">`;

        const nodes = getAllNodes();

        if (position <= nodes.length) {
            nodes[position - 1].before(node);
            show_msg('success', `${value} is inserted at the ${position} position.`);
        } else {
            show_msg('error', `Position is not valid.`);
        }
        const newNodes = document.querySelectorAll('.node');
        newNodes.forEach(node => node.classList.remove("head"));
        newNodes[0].classList.add('head');
    } else {
        show_msg("error", "Position and value must be a number.")
    }
}
// remove at the beggining
const rBeg = () => {
    const nodes = getAllNodes();
    if (nodes.length > 1) {
        nodes[0].remove();
        nodes[1].classList.add("head");
    } else {
        show_msg("error", "List is empty.")
    }
}
// remove at the beggining
const rEnd = () => {
    const nodes = getAllNodes();
    if (nodes.length > 1) {
        nodes[nodes.length - 2].remove();
    } else {
        show_msg("error", "List is empty.")
    }
}

// remove the element of any position 
const rPos = (position) => {
    const nodes = getAllNodes();
    if (!isNaN(position)) {
        if (position === 1) {
            show_msg("error", "List is empty.");
        } else if (position < nodes.length) {
            position = position - 1;
            let node = nodes[position];
            node.remove();
            show_msg('success', `The element at ${position + 1} position is removed.`)
            const newNodes = document.querySelectorAll('.node');
            newNodes.forEach(node => node.classList.remove('head'));
            newNodes[0].classList.add('head');
        }
        else {
            show_msg("error", "The position invalid.");
        }
    } else {
        show_msg("error", "The position is not a number.");
    }

}
// remove first element of given value
const rVal = (value) => {
    const nodes = getAllNodes();
    let node;

    if (!isNaN(value)) {
        for (let i = 0; i < nodes.length; i++) {
            if (nodes[i].innerText == value) {
                node = nodes[i];
            }
        }
        if (node === undefined) {
            show_msg("error", "Element is not found.")
        } else {
            node.remove();
            show_msg("success", `${value} is removed.`)
            const newNodes = document.querySelectorAll('.node');
            newNodes.forEach(node => node.classList.remove('head'));
            newNodes[0].classList.add('head');
        }
    } else {
        show_msg("error", `The value is not a number.`)
    }
}
// Function for traverse
const traverse = () => {
    const nodes = getAllNodes();
    nodes.forEach(node => node.classList.add("traverse"));

    setTimeout(() => {
        nodes.forEach(node => node.classList.remove("traverse"));
    }, 1000)
}
// function  for showing message
const show_msg = (type, msgText) => {
    let msg = document.createElement('p');
    msg.classList.add(`${type}`);
    msg.innerText = msgText;

    message.append(msg);
    setTimeout(() => {
        message.innerHTML = '';
    }, 2000)

}

const show_help = () => {
    if (isShowingHelp) {
        helpSection.style.display = 'none';
        isShowingHelp = false;
    } else if (!isShowingHelp) {
        helpSection.style.display = 'block';
        isShowingHelp = true
    }
}

// Code for dynamic function run

const runBtn = document.getElementById("run");

const runningFunction = () => {
    const userInput = document.getElementById('func-input').value.trim();
    if (!userInput == '') {
        document.getElementById('func-input').value = '';
        const pattern = /^([a-zA-Z_][a-zA-Z0-9_]*)\((.*)\)$/;
        const match = userInput.match(pattern);
        console.log("userInput", userInput);
        console.log(match)

        const safeFunctions = {
            iBeg: iBeg,
            iEnd: iEnd,
            iPos: iPos,
            rVal: rVal,
            rPos: rPos,
            rEnd: rEnd,
            rBeg: rBeg,
            traverse: traverse
        };


        if (match == null) {
            show_msg("error", "Invalid function format!");
            return;
        }

        const functionName = match[1];
        const arguments = match[2].split(',').map(arg => arg.trim());
        console.log(functionName);
        console.log(arguments);


        if (!safeFunctions[functionName]) {
            show_msg("error", `${functionName} is not allowed.`);
            return;
        }

        try {
            const result = safeFunctions[functionName](...arguments.map(arg => isNaN(arg) ? arg : Number(arg)));
        } catch (error) {
            console.error(error);
            show_msg("error", `Error while executing ${functionName}: ${error.message}`);
        }

    } else {
        show_msg('error', "Input box can't be empty.")
    }



}

runBtn.addEventListener('click', () => {
    runningFunction();
})
document.getElementById('func-input').addEventListener("keyup", (e) => {
    if (e.key === 'Enter') {
        runningFunction();
    }
})




let deferredPrompt;
const installButton = document.getElementById('installButton');

// Listen for the beforeinstallprompt event
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    installButton.style.display = 'block';

    installButton.addEventListener('click', () => {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the install prompt');
            }
            deferredPrompt = null;
        });
    });
});
