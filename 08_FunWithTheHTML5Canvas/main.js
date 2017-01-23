const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

let canvasWidth = window.innerWidth;
let canvasHeight = window.innerHeight;

setupCanvas();

window.addEventListener('resize', setupCanvas);

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function setupCanvas() {
  canvasWidth = window.innerWidth;
  canvasHeight = window.innerHeight;
  
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
  
  ctx.strokeStyle = '#BADA55';
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  ctx.lineWidth = 100;
}

function draw(e) {
  if (!isDrawing) return;

  //console.log(e);
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();

  [lastX, lastY] = [e.offsetX, e.offsetY];
  hue++;
  if (hue >= 360) hue = 0;

  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    direction = !direction
  }

  direction ? ctx.lineWidth++ : ctx.lineWidth--;
}

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
