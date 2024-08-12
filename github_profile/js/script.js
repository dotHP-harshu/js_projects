const search = document.querySelector('#search');
const loader = document.getElementById('loader');
const profile = document.querySelector('#profile');



search.addEventListener('keyup', (evt) => {
    let userName = search.value;
    if (evt.key == 'Enter') {
        if (userName == '') {
            alert("Search box can not be empty.")
        } else {
            search.value = '';
            if (document.querySelector('.profile-card')) {
                document.querySelector('.profile-card').remove();
            }
            loader.style.display = 'inline-block';
            getUser(userName);
        }
    }
})

const getUser = async(userName) => {
    let url = `https://api.github.com/users/${userName}`;
    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error("An error occures", data.status);
        }
        let data = await response.json();
        makeProfile(data)

    } catch (error) {
        noProfile();
    }
}

const makeProfile = (data) => {
    loader.style.display = 'none'
    let userBio;
    if (data.bio == null) {
        userBio = '';
    } else {
        userBio = data.bio;
    }

    let card = document.createElement('div');
    card.classList.add('profile-card')
    card.innerHTML = `
    <div class="card-img">
    <img src="${data.avatar_url}">
</div>
<div class="card-content">
    <h2 class="name">${data.name}</h2>
    <p class="bio">${userBio}</p>
    <a href="${data.html_url}" class="link" target="_harsh">${data.login}</a>
    <div class="follow">
        <span>Followers:${data.followers} </span>
        <span>Followings:${data.following} </span>
    </div>
</div>
    `

    profile.append(card);
}
const noProfile = () => {
    loader.style.display = 'none'
    let card = document.createElement('div');
    card.classList.add('no-profile');
    card.classList.add('profile-card');
    card.innerHTML = `
    <h2 class="msg">This user is not found.</h2>`;
    profile.append(card);
}