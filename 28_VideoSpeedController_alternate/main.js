const video = document.querySelector('video');
const speedControl = document.querySelector('.speedControl');
const indicator = document.querySelector('.indicator');

let mousedown = false;

speedControl.addEventListener('mousedown', () => mousedown = true);
speedControl.addEventListener('mouseup', () => mousedown = false);
speedControl.addEventListener('mouseleave', () => mousedown = false);

speedControl.addEventListener('mousemove', function(e) {
  if (!mousedown) return;
  const min = 0.5;
  const max = 2;
  const position = e.pageY - this.offsetTop;
  const percent = position / this.offsetHeight;
  const height = Math.floor(percent * 1000) / 10 + '%';
  const playbackRate = percent * (max - min) + min;
  if (playbackRate < 0.5) playbackRate = 0.5;
  
  indicator.style.height = height;
  indicator.innerText = playbackRate.toFixed(1) + 'x';
  video.playbackRate = playbackRate;
});