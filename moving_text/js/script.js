const input = document.getElementById("input");

const addText = (text) => {
    const text_mover = document.getElementById("text_mover");
    text_mover.innerText = text;
}


input.addEventListener("keyup", (e) => {
    text = input.value
    console.log(text);
    addText(text);
})
