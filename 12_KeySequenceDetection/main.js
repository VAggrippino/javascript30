const typed = [];
const code = 'vince';

function checkCode(e) {
  typed.push(e.key);
  typed.splice(-code.length - 1, typed.length - code.length);
  if (typed.join('').toLowerCase() === code.toLowerCase()) {
    cornify_add();
  }
}

window.onload = function() {
  window.addEventListener('keyup', checkCode);
}