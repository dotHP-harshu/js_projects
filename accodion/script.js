let mainHeading = document.querySelectorAll('.main-heading');
let mainContent = document.querySelectorAll('.main-content');
let icon = document.querySelectorAll('i')


for (let i = 0; i < mainHeading.length; i++) {
    mainHeading[i].addEventListener('click', () => {
        mainContent[i].classList.toggle('hidden');
        icon[i].classList.toggle('plus');
        icon[i].classList.toggle('multiple');
    });
}

// Project completed