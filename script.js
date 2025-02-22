const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let scale = 1;

canvas.width = window.innerWidth * 0.9;
canvas.height = window.innerHeight * 0.7;

function drawShapes() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.scale(scale, scale);
    ctx.fillRect(50, 50, 100, 50); // Прямоугольник
    ctx.beginPath();
    ctx.arc(200, 100, 30, 0, Math.PI * 2); // Круг
    ctx.fill();
    ctx.restore();
}

canvas.addEventListener('wheel', (e) => {
    e.preventDefault();
    scale += e.deltaY * -0.01;
    scale = Math.min(Math.max(0.5, scale), 5);
    drawShapes();
});

drawShapes();