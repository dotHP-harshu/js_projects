const username = document.getElementById('username');
const password = document.getElementById('password');
const submit = document.getElementById('submit');



const saveData = (dataArray) => {
    localStorage.setItem('passwords', JSON.stringify(dataArray))
}


const insertData = (username, password) => {
    let tableBody = document.querySelector(".pass-storage table tbody");
    let tableRow = document.createElement('tr');
    tableRow.innerHTML = `
    <td>${username}</td>
    <td class="password">${password}</td>
    <td class="delete">Delete</td>`;
    tableBody.appendChild(tableRow);


    // To remove or delete row
    const deleteBtn = tableRow.querySelector('.delete');
    deleteBtn.addEventListener('click', () => {
        tableRow.remove();
        let dataArray = JSON.parse(localStorage.getItem('passwords'));
        let remianDataArray = dataArray.filter(data => {
            return data.username !== username || data.password !== password;
        })
        saveData(remianDataArray);
    })
}



const showData = () => {
    if (username.value === "" && password.value === "") {
        alert('Either username or password can not be empty.');
    } else {

        let dataArray = JSON.parse(localStorage.getItem('passwords')) || [];
        let data = { 'username': username.value, 'password': password.value };
        dataArray.push(data)
        saveData(dataArray);
        insertData(username.value, password.value);
        document.querySelectorAll('.input-area input').forEach((input) => {
            input.value = '';
        })
    }
}


submit.addEventListener('click', () => {
    showData();
})
password.addEventListener('keyup', (e) => {
    if (username.value === "" && password.value === "") {
        alert('Either username or password can not be empty.');
    } else if (e.key === 'Enter') {
        showData();
    }
})

window.addEventListener('load', () => {
    let lsData = JSON.parse(localStorage.getItem("passwords")) || [];
    lsData.forEach((pass) => {
        let saveUsername = pass.username;
        let savePassword = pass.password;
        insertData(saveUsername, savePassword);
    })
})