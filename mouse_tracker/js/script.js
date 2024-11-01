const canvasElement= document.getElementById('canvas'); // selecting the canvas element 
let canvas = canvasElement.getContext('2d');

canvasElement.height = window.innerHeight;
canvasElement.width = window.innerWidth;

let mouse = {};

window.addEventListener('mousemove', (e)=>{
    mouse.x = e.clientX;
    mouse.y = e.clientY;
})

let line = [];

const animation = ()=>{
    canvas.clearRect(0,0,canvasElement.width, canvasElement.height);

    line.push({x:mouse.x, y:mouse.y});

    if(line.length > 15){
        line.shift();
    }

    canvas.beginPath();
    for(let i=0; i<line.length-1; i++){
        const opacity = i/line.length;
        canvas.lineWidth = 10;
        canvas.lineCap = 'round';
        canvas.lineJoin = 'round';
        canvas.strokeStyle = `rgba(255,255,255,${opacity}`;
        canvas.moveTo(line[i].x, line[i].y);
        canvas.lineTo(line[i+1].x, line[i+1].y);
    }
    canvas.stroke();

    requestAnimationFrame(animation);
}
animation()