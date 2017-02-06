console.clear();

const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');
const sound = document.getElementById('sound');
let countdown;

function timer(seconds) {
  const now = Date.now();
  const then = now + seconds * 1000;
  
  displayTimeLeft(seconds);
  displayEndTime(then);
  
  clearInterval(countdown);
  document.body.classList.remove('alarm');
  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if (secondsLeft <= 0) {
      clearInterval(countdown);
      displayTimeLeft(0);
      document.body.classList.add('alarm');
      sound.play();
      return;
    }
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  let remainingSeconds;
  
  let hours = Math.floor(seconds / (60*60));
  remainingSeconds = seconds % (60*60);
  
  let minutes = Math.floor(remainingSeconds / 60);
  remainingSeconds = remainingSeconds % 60;
  
  if (hours > 0) {
    hours = hours + ':';
    if (minutes < 10) minutes = '0' + minutes;
  } else {
    hours = '';
  }
  
  if (remainingSeconds < 10) remainingSeconds = '0' + remainingSeconds;
  
  const display = `${hours}${minutes}:${remainingSeconds}` ;
  
  document.title = display;
  timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  let hour = end.getHours();
  let minutes = end.getMinutes();
  let period = 'am';
  
  if (hour > 12) {
    hour -= 12;
    period = 'pm';
  } else if (hour == 12) {
    period = 'pm';
  }
  
  if (minutes < 10) minutes = '0' + minutes;
  
  endTime.textContent = `Be Back At ${hour}:${minutes}${period}`;
}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const minutes = this.minutes.value;
  this.reset();
  timer(minutes * 60);
});