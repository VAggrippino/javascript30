$(function() {
  const titles = document.querySelectorAll('.title');
  const projects = document.querySelectorAll('.project');

  titles.forEach(title => {
    if (title.offsetWidth > title.parentNode.offsetWidth) {
      title.classList.add('scrolling');
    }
  });

  projects.forEach(project => {
    const title = project.querySelector('.title');
    const screenshot = project.querySelector('.screenshot img, .screenshot video');
    const player = project.querySelector('video');

    // If this project has a video, add event listeners to play and pause it.
    if (player !== null) {
      project.addEventListener('mouseover', () => player.play());
      project.addEventListener('mouseleave', () => player.pause());
    }

    // Add event listeners to open the actual project page when clicking on the
    // title or screenshot.
    project.addEventListener('click', e => {
      if (!(e.target === title || e.target === screenshot)) return;
      location.assign(project.dataset.target);
    });

    if (project.offsetLeft > window.innerWidth / 2) {
      project.classList.add('transformLeft');
    }
  });
});
