const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.globalCompositeOperation = 'destination-over';

let number = 0;
let scale = 10;
let hue = Math.random() * 360; //everytime you reload the page, it will start with another color

let angleNumber = parseInt(prompt("Enter a number please"));
let arcNumber = parseInt(prompt("Enter another number"));


function drawFlower(){
    let angle = number * angleNumber; //first input asked
    let radius = scale * Math.sqrt(number);
    let positionX = radius * Math.sin(angle) + canvas.width/2;
    let positionY = radius * Math.cos(angle) + canvas.height/2;
    ctx.fillStyle = 'hsl('+ hue +',100%,50%)';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(positionX, positionY, arcNumber, 0, Math.PI * 2); //second one
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    number++;
    hue+= 1;
}

function animate() {
    //ctx.clearRect(0,0, canvas.width, canvas.height); //--> if you remove this, you'll understand whats happening
    drawFlower();
    //if (number > 300) return,
    requestAnimationFrame(animate);
}
animate();
