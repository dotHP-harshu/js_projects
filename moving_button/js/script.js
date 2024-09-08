let btns = document.querySelectorAll(' .btn-container button');
let naBtn = document.getElementById('na');
let haBtn = document.getElementById('ha');

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        let result = document.querySelector(' .result-container');
        result.style.display = 'flex';
    })
})


naBtn.addEventListener('mouseenter', () => {
    naBtn.innerText = 'Ha';
    naBtn.style.background = 'blue';
    haBtn.innerText = 'Na'
    haBtn.style.background = 'red';
})
naBtn.addEventListener('mouseout', () => {
    naBtn.innerText = 'Na';
    naBtn.style.background = 'red';
    haBtn.innerText = 'Ha'
    haBtn.style.background = 'blue';
})