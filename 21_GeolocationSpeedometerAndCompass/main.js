window.onload = function() {
  const arrow = document.querySelector('.arrow');
  const speed = document.querySelector('.speed-value');
  const output = document.getElementById('output');
  
  navigator.geolocation.watchPosition(data => {
    console.log(data);
    speed.textContent = (data.coords.speed !== null)
                      ? Math.round(data.coords.speed * 10) / 10
                      : 0;
    arrow.style.transform = `rotate(${data.coords.heading}deg)`;
  }, err => {
    console.err(err);
    alert('HEY!! YOU GOTTA ALLOW THAT TO HAPPEN!!');
  });
}