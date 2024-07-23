const audio = document.getElementById('audio');
const playPauseBtn = document.querySelector('.play-pause');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const progressBar = document.querySelector('.progress-bar input');
const musicName = document.querySelector('.music-name p');
const musicArtist = document.querySelector('.music-artist p');
const musicAlbum = document.querySelector('.music-album p');
const musicImg = document.querySelector('.music-img img');
let songIndex = 0;




// Function to load audio
function loadAudio() {
    const totalTime = audio.duration;

    audio.src = songs[songIndex].src;
    musicName.innerHTML = songs[songIndex].name;
    musicArtist.innerHTML = songs[songIndex].artist;
    musicAlbum.innerHTML = songs[songIndex].album;
    musicImg.src = songs[songIndex].img;

    progressBar.value = 0;
}


// Function to play audio
let isPlaying = true; // Vaiale that ensure that audio is playing or not
function playAudio() {
    loadAudio();
    const playIcon = document.querySelector('.play');
    const pauseIcon = document.querySelector('.pause');
    if (isPlaying) {
        audio.play();
        isPlaying = false;
        playIcon.style.display = "none";
        pauseIcon.style.display = "inline-block";
        musicImg.classList.add('play-animation');
    } else {
        audio.pause();
        isPlaying = true;
        pauseIcon.style.display = "none"
        playIcon.style.display = "inline-block"
        musicImg.classList.remove('play-animation');
    }
}
// Function to load next audio
function loadNextAudio() {
    songIndex++;
    if (songIndex < songs.length) {
        loadAudio();
        isPlaying = true;
        playAudio();
    } else {
        songIndex = 0;
        loadAudio();
        isPlaying = true;
        playAudio();
    }
}
// Function to load previous audio
function loadPrevAudio() {
    songIndex--;
    if (songIndex < 0) {
        songIndex = songs.length - 1;
        loadAudio();
        isPlaying = true;
        playAudio();
    } else {
        loadAudio();
        isPlaying = true;
        playAudio();
    }
}

// Function to track the progress bar

function progress() {
    const totalTime = audio.duration;

    let currentTime = audio.currentTime;
    let timeValue = (currentTime * 100) / totalTime;
    progressBar.value = timeValue;
}
//Fuction to jump on song timer
function jumpTime() {
    const totalTime = audio.duration;
    let time = (progressBar.value * totalTime) / 100;
    audio.currentTime = time;
}

nextBtn.addEventListener('click', () => {
    loadNextAudio();
})

prevBtn.addEventListener('click', () => {
    loadPrevAudio();
});

audio.addEventListener('loadedmetadata', function() {
    progress();
});



// Initial call
loadAudio();