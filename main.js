$(function() {
  const videos = document.querySelectorAll('.video');
  const titles = document.querySelectorAll('.title');

  videos.forEach(video => {
    const player = video.querySelector('video');
    video.addEventListener('mouseover', () => player.play());
    video.addEventListener('mouseout', () => player.pause());
  });

  titles.forEach(title => {
    if (title.offsetWidth > title.parentNode.offsetWidth) {
      title.classList.add('scrolling');
    }
  })
});
