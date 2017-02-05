const nav = document.querySelector('#main');
const topOfNav = nav.offsetTop;

const spacer = document.createElement('div');
spacer.setAttribute('id', 'spacer');
spacer.style.height = nav.offsetHeight + 'px';

function fixNav() {
  if (window.scrollY >= topOfNav) {
    document.body.prepend(spacer);
    document.body.classList.add('fixed-nav');
    //document.body.style.paddingTop = nav.offsetHeight + 'px';
  } else {
    document.body.classList.remove('fixed-nav');
    document.body.removeChild(spacer);
    //document.body.style.paddingTop = 0;
  }
}

window.addEventListener('scroll', fixNav);