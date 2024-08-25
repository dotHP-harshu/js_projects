const charRemainBox = document.getElementById('char-remain');
const textBox = document.getElementById('text-box');
const maxCountBox = document.getElementById('char-max');
const charCountBox = document.getElementById('char-count');
const maxCount = textBox.maxLength;
let charCount = 0;


maxCountBox.innerText = maxCount;
charRemainBox.innerText = maxCount;
charCountBox.innerText = charCount;


textBox.addEventListener('focus', () => {
    textBox.innerText = '';
});


// Update character count

const showCharCount = (count) => {
    charCountBox.innerText = count;
}
// Update remain charater count

const showRemainCount = (charCount) => {

    let remainCount = maxCount - charCount
    charRemainBox.innerText = remainCount;
}

textBox.addEventListener('keyup', (e) => {
    e.preventDefault();
    if (e.key == 'Backspace') {
        if (charCount <= 0) {
            charCount = 0;
        } else {
            charCount--;
        }
    } else {
        if (charCount == maxCount) {
            charCount = charCount;
        } else {
            charCount++;
        }
    }

    showCharCount(charCount);
    showRemainCount(charCount);
})

