console.clear();
const triggers = document.querySelectorAll('a');
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);

let lastLink = null;

function highlightLink() {
  // If this was triggered by the window, act based on the
  // last link.
  const link = (this === window) ? lastLink : this;
  
  // If this was triggered by a link, set the lastLink to
  // this link.
  if (link === this) lastLink = this;
  
  // If the link isn't defined (window was resized before
  // hovering a link), don't do anything.
  if (!link) return;
  
  const linkCoords = link.getBoundingClientRect();
  
  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX,
  };
  highlight.style.width = coords.width + 'px';
  highlight.style.height = coords.height + 'px';
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));

// Trigger the highlightLink event handler if we resize the
// window so that the highlight can move if the highlighted
// link moves.
window.addEventListener('resize', highlightLink);