console.log('working')
const testemonials = document.querySelectorAll('.testemonial');
const loading = document.querySelector('.loading');
const loadLine = document.querySelector('.loading-line');

let loadingWidth = window.getComputedStyle(loading).width;



let idx = 1;

const showTestemonial = () => {
    if (idx == testemonials.length) {
        idx = 0;
    }
    console.log(idx);
    testemonials.forEach(testemonial => testemonial.style.display = 'none');
    testemonials[idx].style.display = 'inline-block';
    idx++;


}

setInterval(() => {
    showTestemonial();
}, 5000);