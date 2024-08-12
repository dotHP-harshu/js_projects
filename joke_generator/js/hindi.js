const getBtn = document.querySelector('.get-btn');
const loader = document.querySelector('.loader');
const alertIcon = document.querySelector('.alert');


const showJoke = (data) => {
    loader.style.display = 'none';
    let jokeContent = data.jokeContent;

    let joke = document.createElement('div');
    joke.classList.add('joke-container');
    joke.innerHTML = `
            <p class="setup">${jokeContent}</p>
    `;

    const wrapper = document.querySelector('.wrapper');
    wrapper.append(joke);
}

const generateJoke = async() => {
    loader.style.display = 'inline-block';
    alertIcon.style.display = 'none';

    try {
        let url = `https://hindi-jokes-api.onrender.com/jokes?api_key=23140c8fee233d81a12f9c611932`;
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
        generateJoke();
    } else {
        generateJoke();
    }
})