const link = 'https://api.qrserver.com/v1/create-qr-code/?data=HelloWorld!&size=100x100&bgcolor=f00&color=fff&margin=20';
const qrImg = document.getElementById('qr-image');
const loader = document.getElementById('loader');
const errMsg = document.getElementById('err-msg');
const downloadBtn = document.getElementById('download');

const data = document.getElementById('data');
const size = document.getElementById('size');
const margin = document.getElementById('margin');
const color = document.getElementById('color');
const bgcolor = document.getElementById('bgcolor');
const format = document.getElementById('format');


const generateBtn = document.getElementById('generate');


const getQR = async (data, size, margin, color, bgcolor, format) => {
    // let response = await fetch(apiLink);
    // let qrImgLink = response.url;
    // qrImg.src = qrImgLink;
    try {
        let apiLink = `https://api.qrserver.com/v1/create-qr-code/?data=${data}&size=${size}x${size}&bgcolor=${bgcolor}&color=${color}&margin=${margin}&format=${format}`
        let response = await fetch(apiLink);
        let qrImgLink = response.url;
        console.log(qrImgLink);
        qrImg.src = qrImgLink;
        qrImg.style.display = 'inline-block';
        loader.style.display = 'none';

        downloadBtn.addEventListener('click', () => {
            makeDownload(qrImgLink);
        })
    } catch (err) {
        console.log(err);
        qrImg.style.display = 'none';
        errMsg.style.display = 'inline-block';
        loader.style.display = 'none';
    }
}


(function () {
    dataValue = data.value;
    sizeValue = size.value;
    marginValue = margin.value;
    colorValue = color.value.substr(1);
    bgcolorValue = bgcolor.value.substr(1);
    formatValue = format.value;

    getQR(data, size, margin, color, bgcolor, format);
})();



const makeDownload = (url) => {
    let downloadLink = document.createElement('a');
    downloadLink.href = url;

    downloadLink.download = 'my.png';
    document.body.appendChild(downloadLink);

    downloadLink.click();
    document.body.removeChild(downloadLink);
}




generateBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    qrImg.style.display = 'none';
    loader.style.display = 'inline-block';
    dataValue = data.value;
    sizeValue = size.value;
    marginValue = margin.value;
    colorValue = color.value.substr(1);
    bgcolorValue = bgcolor.value.substr(1);
    formatValue = format.value;
    getQR(dataValue, sizeValue, marginValue, colorValue, bgcolorValue, formatValue);
    // console.log("working");
    // console.log("data : ", dataValue);
    // console.log("size : ", typeof (sizeValue));
    // console.log("margin : ", marginValue);
    // console.log("color : ", colorValue);
    // console.log("bgcolor : ", bgcolorValue);
    // console.log("format : ", formatValue);
})
