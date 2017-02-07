const title = document.querySelector('.title');
const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
const gameOver = document.querySelector('.gameOver');
const gameTimer = document.querySelector('.gameTimer');
const sound = document.getElementById('sound');

let timeUp = false;
let score = 0;
let lastHole;
let countdown;

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];
  
  if (hole === lastHole) {
    return randomHole(holes);
  }
  
  lastHole = hole;
  return hole;
}

function peep() {
  const time = randomTime(200, 1000);
  const hole = randomHole(holes);
  
  hole.classList.add('up');
  
  setTimeout(() => {
    hole.classList.remove('up');
    if (!timeUp) {
      peep();
    } else {
      document.body.classList.remove('playing');
      gameOver.classList.add('show');
    }
  }, time);
}

function startGame() {
  const seconds = 10;
  title.dataset.time = seconds;
  document.body.classList.add('playing');
  scoreBoard.textContent = 0;
  gameOver.classList.remove('show');
  timeUp = false;
  score = 0;
  peep();
  setTimeout(() => timeUp = true, seconds * 1000);
  
  clearInterval(countdown);
  countdown = setInterval(() => {
    if (!timeUp) {
      title.dataset.time = parseInt(title.dataset.time - 1);
    } else {
      title.dataset.time = 0;
      clearInterval(countdown);
    }
  }, 1000);
}

function bonk(e) {
  if (!e.isTrusted) return;
  score++;
  sound.play();
  this.classList.remove('up');
  scoreBoard.textContent = score;
}

moles.forEach(mole => mole.addEventListener('click', bonk));