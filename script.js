const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let scale = 1;

// Адаптация размера canvas
canvas.width = window.innerWidth * 0.9;
canvas.height = window.innerHeight * 0.7;

function drawRectangle() {
    const width = parseInt(document.getElementById('width').value) * scale;
    const height = parseInt(document.getElementById('height').value) * scale;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(50, 50, width, height);
}

function zoomIn() {
    scale *= 1.2;
    drawRectangle();
}

function zoomOut() {
    scale /= 1.2;
    drawRectangle();
}

// Обработка колеса мыши
canvas.addEventListener('wheel', (e) => {
    e.preventDefault();
    scale += e.deltaY * -0.01;
    scale = Math.min(Math.max(0.5, scale), 5); // Ограничение масштаба
    drawRectangle();
});

// Интеграция с Telegram
window.Telegram.WebApp.ready();