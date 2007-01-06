let colorBox = document.querySelector('.color-box');
const generateBtn = document.getElementById('generate-btn');
const copyBtn = document.getElementById('copy-btn');




// Function to generate hexcode
const colorGeneration = () => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let color = `rgb(${r},${g},${b})`;

    return color;

}

// Function to set background of body
const setBackground = () => {
    let color = colorGeneration();
    copyBtn.style.color = color;

    document.body.style.background = color;
}
// Initial call 
setBackground();

// Function to copy color text to clipboard
const copyColor = () => {
    let color = colorGeneration();
    navigator.clipboard.writeText(color)
        .then(() => copyBtn.textContent = 'Copied')
        .catch((error) => console.log(error));
}




// Event listeners

generateBtn.addEventListener('click', () => {
    setBackground();
    copyBtn.textContent = 'Copy color';
})


copyBtn.addEventListener('click', () => {
    copyColor();
})