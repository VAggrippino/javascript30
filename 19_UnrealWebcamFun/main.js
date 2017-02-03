console.clear();
const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo() {
  navigator.mediaDevices.getUserMedia({video: true, audio: false })
    .then(localMediaStream => {
      video.src = window.URL.createObjectURL(localMediaStream);
      video.play();
    })
    .catch(err => {
      console.error('Oh No!!!', err);
    });
}

function paintToCanvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;
  
  const controls = document.querySelector('.controls');
  const spaceLeft = window.innerWidth - controls.offsetWidth;
  const newScale = Math.floor((spaceLeft / width) * 10)/10;
  console.log(newScale);
  
  canvas.style.transform = `scale(${newScale})`;

  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
    let pixels = ctx.getImageData(0, 0, width, height);
    //pixels = redEffect(pixels);
    pixels = rgbSplit(pixels);
    ctx.globalAlpha = 0.8;
    //pixels = greenScreen(pixels);
    ctx.putImageData(pixels, 0, 0);
  }, 16);
}

function takePhoto() {
  // played the sound
  snap.currentTime = 0;
  snap.play();

  // take the data out of the canvas
  const data = canvas.toDataURL('.image/jpeg');
  const link = document.createElement('a');
  link.href = data;
  link.setAttribute('download', 'picture');
  //link.textContent = 'Download Image';
  link.innerHTML = `<img src="${data}" alt="picture">`;
  strip.insertBefore(link, strip.firstChild);
}

function redEffect(pixels) {
  for (let i = 0; i < pixels.data.length; i+=4) {
    pixels.data[i+0] = pixels.data[i+0] + 100; // red
    pixels.data[i+1] = pixels.data[i+1] - 50;  // green
    pixels.data[i+2] = pixels.data[i+2] * 0.5; // blue
    //pixels.data[i+3] = pixels.data[i+3] * 0.5; // alpha
  }
  return pixels;
}

function rgbSplit(pixels) {
  for (let i = 0; i < pixels.data.length; i+=4) {
    pixels.data[i-150] = pixels.data[i+0]; // red
    pixels.data[i+500] = pixels.data[i+1]; // green
    pixels.data[i-150] = pixels.data[i+2]; // blue
    //pixels.data[i+3] = pixels.data[i+3] * 0.5; // alpha
  }
  return pixels;
}

function greenScreen(pixels) {
  const levels = {};
  
  document.querySelectorAll('.rgb input').forEach(input => {
    levels[input.name] = input.value;
  });
  
  for (i = 0; i < pixels.data.length; i+=4) {
    let red = pixels.data[i+0];
    let green = pixels.data[i+1];
    let blue = pixels.data[i+2];
    let alpha = pixels.data[i+3];
    
    if (red >= levels.rmin
       && green >= levels.gmin
       && blue >= levels.bmin
       && red <= levels.rmax
       && green <= levels.gmax
       && blue <= levels.bmax) {
      pixels.data[i+3] = 0;
    }
  }
  return pixels;
}

getVideo();

video.addEventListener('canplay', paintToCanvas);
