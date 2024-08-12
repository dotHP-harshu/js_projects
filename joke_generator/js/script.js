const getBtn = document.querySelector('.get-btn');
const loader = document.querySelector('.loader');
const alertIcon = document.querySelector('.alert');


const showJoke = (data) => {
    loader.style.display = 'none';
    let setup = data.setup;
    let punchline = data.punchline;

    let joke = document.createElement('div');
    joke.classList.add('joke-container');
    joke.innerHTML = `
            <p class="setup">${setup}</p>
            <p class="punchline">${punchline}</p>
    `;

    const wrapper = document.querySelector('.wrapper');
    wrapper.append(joke);
}

const generateJoke = async(type) => {
    loader.style.display = 'inline-block';
    alertIcon.style.display = 'none';

    try {
        let url = `https://official-joke-api.appspot.com/jokes/${type}`;
        let response = await fetch(url);
        let data = await response.json();
        showJoke(data);
    } catch (err) {
        console.error(err);
        loader.style.display = 'none';
        alertIcon.style.display = 'inline-block';
    }

}

getBtn.addEventListener('click', () => {
    if (document.querySelector('.joke-container')) {
        document.querySelector('.joke-container').remove();
        generateJoke('random');
    } else {
        generateJoke('random');
    }
})