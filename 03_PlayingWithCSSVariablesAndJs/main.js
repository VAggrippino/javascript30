window.onload = function() {
  const inputs = document.querySelectorAll('.controls input');
  inputs.forEach(input => {
    input.addEventListener('change', handleUpdate);
    input.addEventListener('mousemove', handleUpdate);
  });

  function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
  }
}
