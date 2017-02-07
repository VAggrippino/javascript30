const targets = document.querySelectorAll('.target');
const toggles = document.querySelectorAll('.options input');

const options = {
  capture: false,
  once: false,
  passive: false,
  stopPropagation: false,
};

let targetCounter = 0;
function addFlash(e) {
  targetCounter++;
  if (options.stopPropagation) e.stopPropagation();
  if (targetCounter == 3) {
    setTimeout(() => this.classList.add('flash'), 600);
  } else if (targetCounter == 2) {
    setTimeout(() => this.classList.add('flash'), 300);
  } else if (targetCounter == 1) {
    this.classList.add('flash');
  }
}

function addTargetListeners() {
  targets.forEach(target => {
    target.addEventListener('click', addFlash, options);
  });
}

function removeTargetListeners() {
  targets.forEach(target => {
    target.removeEventListener('click', addFlash, options);
  });
}

addTargetListeners();

targets.forEach(target => {
  target.addEventListener('animationend', e => {
    setTimeout(() => {
      target.classList.remove('flash');
      targetCounter = 0;
    }, 1000);
  });
});

toggles.forEach(toggle => {
  toggle.addEventListener('click', e => {
    removeTargetListeners();
    options[e.target.value] = e.target.checked;
    addTargetListeners();
  });
});