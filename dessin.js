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
ctx.stroke();
const test = '20°C';
ctx.font = '48px sans-serif';
ctx.fillText(test, 50, 50[200]);
ctx.fill();

ctx.beginPath();
ctx.strokeStyle = 'black';
ctx.fillStyle = 'green';
ctx.rect(500, 300, 90, 90);
ctx.rect(450, 250, 90, 90);
ctx.lineWidth = 10;

//ajout d'ombres portés

// Décalage de l'ombre selon X et Y
ctx.shadowOffsetX = 2;
ctx.shadowOffsetY = 2;
// Etendue du flou
ctx.shadowBlur = 4;
// Couleur de l'ombre
ctx.shadowColor = 'black';
ctx.stroke();
ctx.fill();


//tracer un arc de ciel
// ctx.beginPath();
// ctx.arc(x, y, rayon, angleFrom, angleTo[antiClockWise]);
// ctx.stroke();

// Dessinez un disque de rayon 40 px dans le quart inférieur gauche du canvas, en partant de l'angle 1.5*Math.PI 
// jusqu'à l'angle Math.PI. Faites en sorte qu'il ne sorte pas du canvas et qu'il ne recouvre pas les formes 
// déjà tracées.
ctx.beginPath();
ctx.arc(100, 100, 40, 1.5*Math.PI, Math.PI[false]);
ctx.stroke();

const msg = 'Hello world!';
// Uniquement pour stokeText()
ctx.lineWidth = 2;
ctx.font = '30px sans-serif';
ctx.textAlign = 'left';
ctx.textBaseline = 'top';

// Contour des caractères seulement
ctx.strokeText(msg, 100, 100[200]);
// Caractères pleins
ctx.fillText(msg, 50, 50[200]);

//openGameart.org => récupérer des sprites

