const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  
  // The position of the mouse relative to the left edge of
  // the slider:
  startX = e.pageX - slider.offsetLeft;
  
  // The scroll position of the slider:
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  
  // The position of the mouse relative to the left edge of
  // the slider:
  const x = e.pageX - slider.offsetLeft;
  
  // The new position minus the old position, multiplied by 3.
  const walk = (x - startX) * 3;
  slider.scrollLeft = scrollLeft - walk;
});