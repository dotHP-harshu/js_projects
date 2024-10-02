const fill = document.querySelector('.fill');
let empties = document.querySelectorAll('.empty');

empties.forEach(empty => {
    empty.addEventListener('dragover', (e) => {
        e.preventDefault();
    })
    empty.addEventListener('dragenter', () => {
        empty.classList.add('dropover');
    })
    empty.addEventListener('dragleave', () => {
        empty.classList.remove('dropover');
    })
    empty.addEventListener('drop', (e) => {
        e.preventDefault();
        empty.className = 'empty'
        empty.append(fill)
    })
})