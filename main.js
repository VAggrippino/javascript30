$(function() {
  const videos = document.querySelectorAll('.video');
  const titles = document.querySelectorAll('.title');
  const projects = document.querySelectorAll('.project');

  videos.forEach(video => {
    const player = video.querySelector('video');
    video.addEventListener('mouseover', () => {
      player.play();
      video.classList.add('playing');
    });
    video.addEventListener('mouseout', () => {
      player.pause();
      video.classList.remove('playing');
    });
  });

  titles.forEach(title => {
    if (title.offsetWidth > title.parentNode.offsetWidth) {
      title.classList.add('scrolling');
    }
  });

  projects.forEach(project => {
    project.addEventListener('mouseover', () => project.classList.add('mouseover'));
    project.addEventListener('mouseleave', () => project.classList.remove('mouseover'));
  });
});
