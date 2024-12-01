const node_container = document.querySelector('.node_container');
const null_node = document.getElementById('null_node');
const message = document.querySelector('.msg');
const helpSection = document.getElementById('help');
let isShowingHelp = true;


// insert at end
const i_end = (value) => {

    let node = document.createElement('div');
    node.classList.add('node');
    node.innerHTML = `<p class="node_value">${value}</p>
     <img class="node_img" src="right-arrow.png" alt="link">`;

    null_node.before(node);
    show_msg('success', `${value} is inserted at the end.`);
    const nodes = document.querySelectorAll('.node');
    nodes.forEach(node => node.classList.remove('head'));
    nodes[0].classList.add('head');

}
// insert at beginning
const i_beg = (value) => {

    let node = document.createElement('div');
    node.classList.add('node');
    node.innerHTML = `<p class="node_value">${value}</p>
     <img class="node_img" src="right-arrow.png" alt="link">`;

    node_container.prepend(node);
    show_msg('success', `${value} is inserted at the beginning.`);
    const nodes = document.querySelectorAll('.node');
    nodes.forEach(node => node.classList.remove('head'));
    nodes[0].classList.add('head');
}
// insert at any specific position
const i_pos = (position, value) => {

    let node = document.createElement('div');
    node.classList.add('node');
    node.innerHTML = `<p class="node_value">${value}</p>
     <img class="node_img" src="right-arrow.png" alt="link">`;

    const nodes = document.querySelectorAll('.node');

    if (position <= nodes.length) {
        nodes[position - 1].before(node);
        show_msg('success', `${value} is inserted at the ${position} position.`);
    } else {
        show_msg('error', `Position is not valid.`);
    }
    const newNodes = document.querySelectorAll('.node');
    newNodes.forEach(node => node.classList.remove("head"));
    newNodes[0].classList.add('head');
}
// remove the element of any position 
const r_pos = (position) => {
    if (!isNaN(position)) {
        const nodes = document.querySelectorAll('.node');
        if (position < nodes.length) {
            position = position - 1;
            let node = nodes[position];
            node.remove();
            show_msg('success', `The element at ${position} position is removed.`)
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
const r_val = (value) => {
    const nodes = document.querySelectorAll('.node');
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