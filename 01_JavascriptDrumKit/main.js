window.onload = function() {
  window.addEventListener('keydown',  playSound);

  function playSound(e) {
    // Find the audio element that corresponds to the key pressed.
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    // Find the displayed key.
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    // Add the playing class to highlight the key.
    key.classList.add('playing');

    // If there was no corresponding audio element, don't do anythign.
    if (!audio) return;

    // Play the sound associated with the audio element.
    audio.currentTime = 0;
    audio.play();
  }

  function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
  }

  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
}
