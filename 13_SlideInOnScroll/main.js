function debounce(func, wait = 10, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(e) {
  console.log(e);
  sliderImages.forEach(slideImage => {
    const imageTop = slideImage.offsetTop;
    const imageBottom = imageTop + slideImage.height;
    const slidePosition = imageTop + (slideImage.height / 2);
    const windowTop = window.scrollY;
    const windowBottom = windowTop + window.innerHeight;
    
    if (windowBottom > slidePosition && windowTop < imageBottom) {
      slideImage.classList.add('active');
    } else {
      slideImage.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', debounce(checkSlide));