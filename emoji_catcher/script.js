const time = document.getElementById('time');
const scoreElement = document.getElementById('score');
const startBtn = document.getElementById('start-btn');
const homeBtn = document.getElementById('home-btn');
const emojiContainer = document.querySelector('.emoji-container');
const emojies = document.querySelectorAll('.emoji');
const resultTotal = document.querySelector('#result-total');
const resultScore = document.querySelector('#result-score');
const preloader = document.getElementById('preloader');
// Sections or pages
const header = document.querySelector('header');
const beforeGame = document.querySelector('#before-game');
const duringGame = document.querySelector('#during-game');
const timeUpPage = document.getElementById('time-up');
const resultPage = document.getElementById('result');

let score = 0;
let totalEmojies = 0;

// Remove preloader 
window.addEventListener('load', () => {
    preloader.style.opacity = 0;
    preloader.style.display = 'none';
})

// update score
const updateScore = (score) => {
    scoreElement.innerHTML = `Score : ${score}`;
}


// Function to remove emoji
const removeEmoji = (emoji) => {
    setTimeout(() => {
        emoji.remove();
    }, 2000)
}



// Function to create emojies
let showEmoji;
const createEmoji = () => {
    let time = Math.floor(Math.random() * (800 - 200) + 200);
    showEmoji = setTimeout(() => {
        let emojiSize = 40;
        let containerHeight = emojiContainer.offsetHeight;
        let containerWidth = emojiContainer.offsetWidth;
        let top = Math.floor(Math.random() * (containerHeight - emojiSize));
        let left = Math.floor(Math.random() * (containerWidth - emojiSize));

        let emoji = document.createElement('img');
        emoji.classList.add('emoji');
        emoji.src = 'emoji.png';
        emoji.style.top = `${top}px`;
        emoji.style.left = `${left}px`;
        emojiContainer.append(emoji);
        totalEmojies++;
        emoji.addEventListener('click', function () {
            score++;
            updateScore(score)
            this.remove();
        })
        removeEmoji(emoji)
        createEmoji();
    }, time)
}



// Function to show result
const showResult = () => {
    let displayScore = score < 10 ? score = '0' + score : score;
    let displayTotalEmojies = totalEmojies < 10 ? totalEmojies = '0' + totalEmojies : totalEmojies;
    resultScore.innerHTML = 'Score : ' + displayScore;
    resultTotal.innerHTML = 'Total Emogies: ' + displayTotalEmojies;
}


// function for timer
let duration = 0.5; // Let time = 1min
const timer = (duration) => {
    createEmoji();
    let totalSeconds = duration * 60;
    let minutes, seconds;
    let countdown = setInterval(() => {
        totalSeconds--;
        if (totalSeconds < 0) {
            clearInterval(countdown); // stop timer
            clearInterval(showEmoji); // stop creating emojies
            timeUpPage.style.display = 'inline-flex'; // show timeup message
            setTimeout(() => {
                timeUpPage.style.display = 'none'; // If time up then show timeup message and hide after 1 second
                resultPage.style.display = 'flex'; // Show result page
                showResult();
            }, 1000);
        } else {
            minutes = Math.floor(totalSeconds / 60);
            seconds = totalSeconds % 60;

            minutes = minutes < 10 ? '0' + minutes : minutes;
            seconds = seconds < 10 ? '0' + seconds : seconds;

            time.innerHTML = `Time : ${minutes} : ${seconds}`;
        }

    }, 1000);
}



// When click on start btn
startBtn.addEventListener('mouseup', () => {
    header.style.display = 'none';// Hide header
    beforeGame.style.display = 'none';// Hide Befroe game page
    duringGame.style.display = 'inline-block'; // Show game page
    timer(duration); //Start Timer
})


homeBtn.addEventListener('click', () => {
    score = 0;
    scoreElement.innerHTML = `Score : ${score}`;
    totalEmojies = 0;
    header.style.display = 'flex';
    beforeGame.style.display = 'flex';
    resultPage.style.display = 'none';
})
