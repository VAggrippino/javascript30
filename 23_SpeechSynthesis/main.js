const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const ranges = document.querySelectorAll('[type=range]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');
let mousedown = false;

msg.text = document.querySelector('[name="text"]').value;

function populateVoices() {
  voices = this.getVoices();
  voicesDropdown.innerHTML = voices
    .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</options>`)
    .join('');
}

function setVoice() {
  msg.voice = voices.find(voice => voice.name === this.value);
}

function toggle(startOver = true) {
  speechSynthesis.cancel();
  if (startOver) speechSynthesis.speak(msg);
}

function setOption() {
  msg[this.name] = this.value;
  toggle();
}

function updateValue(e) {
  if (!mousedown) return;
  this.dataset.value = this.value;
}

function scaleUi() {
  const mainUi = document.querySelector('.voiceinator');
  if (mainUi.offsetHeight > (window.innerHeight * 0.9)) {
    const scale = Math.floor((window.innerHeight * 0.9) / mainUi.offsetHeight * 100) / 100;
    mainUi.style.transform = `scale(${scale})`;
  }
}

speechSynthesis.addEventListener('voiceschanged', populateVoices);
voicesDropdown.addEventListener('change', setVoice);

options.forEach(option => {
  option.addEventListener('change', setOption);
});

ranges.forEach(range => {
  range.addEventListener('change', updateValue);
  range.addEventListener('mousemove', updateValue);
});

window.addEventListener('mousedown', () => mousedown = true);
window.addEventListener('mouseup', () => mousedown = false);

speakButton.addEventListener('click', toggle);
stopButton.addEventListener('click', toggle.bind(null, false));

scaleUi();

window.addEventListener('resize', scaleUi);