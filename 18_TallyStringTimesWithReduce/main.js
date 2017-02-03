window.onload = function() {
  console.clear();
  const timeNodes = Array.from(document.querySelectorAll('[data-time]'));
  
  const totalSeconds = timeNodes.reduce((total, node) => {
    const timeCode = node.dataset.time;
    const [minutes, seconds] = timeCode.split(':').map(parseFloat);
    const convertedToSeconds = minutes * 60 + seconds;
    return total + convertedToSeconds;
  }, 0);
  
  let secondsLeft = totalSeconds;
  
  const hours = Math.floor(secondsLeft / (60 * 60));
  secondsLeft = secondsLeft % (60 * 60);
  
  const minutes = Math.floor(secondsLeft / 60);
  secondsLeft = secondsLeft % 60;
  
  console.log(`${hours}:${minutes}:${secondsLeft}`);
  document.querySelector('#total input').value = `${hours}:${minutes}:${secondsLeft}`;
}
