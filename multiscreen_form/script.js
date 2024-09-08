const pages = document.querySelectorAll(".page");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const submit = document.getElementById("submit");
const showBtn = document.getElementById("show-data");
const deleteBtn = document.getElementById("delete");
const data = document.querySelector('.data');
const required = document.querySelectorAll('.required');
let pageNo = 0;



required.forEach((input) => {
    let label = input.previousElementSibling;
    let labelName = label.textContent;
    labelName = `* ${labelName}`
    label.textContent = labelName
})

const showPage = () => {
    pages.forEach((page) => {
        page.style.display = "none";
    });
    document.querySelector(".submit-page").style.display = "none";

    pages[pageNo].style.display = "block";
    if (pageNo <= 0) {
        prev.style.display = "none";
        submit.style.display = "none";
    } else {
        prev.style.display = "inline-block";
        submit.style.display = "none";
    }
    if (pageNo >= pages.length - 1) {
        next.style.display = "none";
        submit.style.display = "inline-block";
    } else {
        next.style.display = "inline-block";
        submit.style.display = "none";
    }
};
showPage();
const nextPage = () => {
    pageNo++;
    showPage();
};
const prevPage = () => {
    pageNo--;
    showPage();
};
const showData = () => {
    document.querySelector('#data-name').innerHTML = document.querySelector("#name").value + " " + document.querySelector("#surname").value;
    document.querySelector('#data-email').innerHTML = document.querySelector("#email").value;
    document.querySelector('#data-password').innerHTML = document.querySelector("#password").value;
    document.querySelector('#data-phone').innerHTML = document.querySelector("#phone").value;
    document.querySelector('#data-dob').innerHTML = document.querySelector("#dob").value;
    data.style.display = 'block';
};


next.addEventListener("click", () => {
    nextPage();
    submit.disabled = false;
});


prev.addEventListener("click", () => {
    prevPage();
    submit.disabled = false;
});


submit.addEventListener("click", () => {
    required.forEach((require) => {
        if (require.value == "") {
            document.querySelector(".submit-page").innerHTML = "Required fields are mendetory";
            document.querySelector(".submit-page").style.display = "block";
            prev.style.display = 'inline-block';
            submit.disabled = true;
        }
        else {
            document.querySelector(".submit-page").innerHTML = "Thanks for submit";
            document.querySelector(".submit-page").style.display = "block";
            submit.disabled = true;
            showBtn.style.display = 'inline-block';
        }
    })

});


showBtn.addEventListener('click', () => {
    showData();
})
deleteBtn.addEventListener('click', () => {
    window.location.reload();
})