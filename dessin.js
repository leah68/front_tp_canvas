const canvas = document.getElementById('monCanvas');
const ctx = canvas.getContext('2d');
canvas.style.border = "1px solid black";

ctx.fillStyle = 'red';
ctx.fillRect(10, 10, 200, 100);

ctx.beginPath();
ctx.moveTo(100, 150);
ctx.lineTo(200, 250);
ctx.lineWidth = 10;
ctx.lineCap = 'round';
ctx.strokeStyle = 'blue';
ctx.fillStyle = 'cyan';
ctx.fill();
ctx.stroke();


