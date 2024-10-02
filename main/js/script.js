// script for goto sections
const startBtn = document.getElementById('start-btn');
const projectSection = document.getElementById('projects')
startBtn.addEventListener('click', () => {
    console.log('click')
    projectSection.scrollIntoView({ behavior: 'smooth' });
})




// Script for setting main background
const mainBg = document.querySelectorAll('.main-bg');

const setMainBg = (bg) => {
    let top = Math.floor(Math.random() * 33);
    let left = Math.floor(Math.random() * 99);
    let rotate = Math.floor(Math.random() * 45);
    let size = Math.floor(Math.random() * (70 - 50) + 50)

    bg.style.top = top + '%';
    bg.style.left = left + '%';
    bg.style.width = size + 'px';
    bg.style.transform = `rotate(${rotate}deg)`;
}

mainBg.forEach(bg => {
    setMainBg(bg);
})

// Load Cards
let currentCardNo = 0;
let cardsToload = 3;
const loadBtn = document.getElementById('load-btn');
const cardContainer = document.querySelector('.card-container');

const createCards = (cardNo, index) => {
    let cardImgSrc = cardNo.src;
    let cardHeading = cardNo.heading;
    let cardPara = cardNo.para;

    let card = document.createElement('div');
    card.classList.add('cards');

    card.innerHTML = `<div class="card-img">
                    <img src="${cardImgSrc}" alt="${cardHeading}">
                </div>
                <div class="card-content">
                    <h3 class="card-heading">${cardHeading}</h3>
                    <p class="card-para">${cardPara}</p>
                    <button class="view-btn" onclick="openPopUP(${index})">View</button>
                </div>`;

    cardContainer.append(card);
}

const loadCards = () => {
    let remainCards = cards.length - currentCardNo;
    let cardToLoadNo = Math.min(remainCards, cardsToload);

    for (let i = 0; i < cardToLoadNo; i++) {
        createCards(cards[currentCardNo], currentCardNo);
        currentCardNo++;
    }
    if (cardsToload > cardToLoadNo) {
        loadBtn.style.display = 'none';
    }

    updateBackgroundIcons()
}

// Function to create and randomly position an icon in the background
function createIcon() {
    const icon = document.createElement('img');
    icon.src = icons[Math.floor(Math.random() * icons.length)];  // Random icon from the set
    icon.classList.add('background-icon');

    const containerRect = cardContainer.getBoundingClientRect();
    const randomTop = Math.random() * containerRect.height;
    const randomLeft = Math.random() * containerRect.width;

    icon.style.top = `${randomTop}px`;
    // icon.style.width = `100px`;
    icon.style.left = `${randomLeft}px`;

    cardContainer.appendChild(icon);
}
// Function to create pop up 
const popUp = document.querySelector('.pop-up');
const popUpHeading = document.querySelector('.pop-up-heading');
const popUpPara = document.querySelector('.pop-up-para');
const popUpImg = document.querySelector('.pop-up-img img');
const demoLinkBtn = document.getElementById('live-demo-btn')
const codeBtn = document.getElementById('code-btn')


const openPopUP = (index) => {
    popUp.style.display = 'flex';
    popUpHeading.innerText = cards[index].heading;
    popUpPara.innerText = cards[index].para;
    popUpImg.setAttribute('src', cards[index].src);

    demoLinkBtn.onclick = () => window.open(cards[index].demoLink, '_blank');
    codeBtn.onclick = () => window.open(cards[index].codeLink, '_blank');
}


const popUpCloseBtn = document.getElementById('pop-up-close');

popUpCloseBtn.addEventListener('click', () => {
    popUp.style.display = 'none';
})


// Function to update icon positions whenever the grid grows
function updateBackgroundIcons() {
    const containerHeight = cardContainer.offsetHeight;
    const numberOfIcons = Math.floor(containerHeight / 50);  // Adjust icon count based on container height

    // Remove existing icons
    document.querySelectorAll('.background-icon').forEach(icon => icon.remove());

    // Add new icons
    for (let i = 0; i < numberOfIcons; i++) {
        createIcon();
    }
}


loadCards();
loadBtn.addEventListener('click', () => {
    loadCards();
})

