const trigger = document.querySelector('.trigger');
const pageWrapper = document.querySelector('.page-wrapper');
const pages = document.querySelectorAll('.page-wrapper section');
const links = document.querySelectorAll('.nav-links');
let isPageRotate = false;


trigger.addEventListener('click', () => {
    if (!isPageRotate) {
        pageWrapper.style.transform = 'rotate(15deg)';
        isPageRotate = true;
    } else {
        pageWrapper.style.transform = 'rotate(0deg)';
        isPageRotate = false;
    }
})

links.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(link);
        let linkId = link.getAttribute('href').substr(1);
        console.log(linkId);
        pages.forEach((page) => {
            let pageId = page.getAttribute('id');
            if (linkId === pageId) {
                page.classList.add('active');
                pageWrapper.style.transform = 'rotate(0deg)';
                isPageRotate = false;
            } else {
                page.classList.remove('active');
            }
        })
    })
});