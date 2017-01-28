window.onload = function() {
  const bandList = document.getElementsByTagName('li');
  const bands = Array.from(bandList).map(li => li.innerText);
  
  function strip(s) {
    return s.replace(/^(a |an |the )/i, '');
  }
  
  bands.sort((b1, b2) => strip(b1) > strip(b2) ? 1 : -1);
  
  document.getElementById('bands').innerHTML = bands.map(b => `<li>${b}</li>`).join('');
}