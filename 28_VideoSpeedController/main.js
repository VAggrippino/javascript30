const speed = document.querySelector('.speed');
const bar = speed.querySelector('.speed-bar');
const video = document.querySelector('.flex');
let mousedown = false;

speed.addEventListener('mousedown', () => mousedown = true);
speed.addEventListener('mouseup', () => mousedown = false);
speed.addEventListener('mouseleave', () => mousedown = false);
speed.addEventListener('mousemove', function(e) {
  const y = e.pageY - this.offsetTop;
  const percent = y / this.offsetHeight;
  const min = 0.5;
  const max = 2;
  const height = Math.round(percent * 100) + '%';
  const playbackRate = percent * (max - min) + min;
  bar.style.height = height;
  bar.textContent = playbackRate.toFixed(2) + 'x'; 
  video.playbackRate = playbackRate;
});