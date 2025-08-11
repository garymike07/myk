document.addEventListener('DOMContentLoaded', function () {
  const projectCards = document.querySelectorAll('.project-card');

  projectCards.forEach(card => {
    card.addEventListener('mousemove', function (e) {
      const { clientX, clientY } = e;
      const { left, top, width, height } = card.getBoundingClientRect();
      const x = clientX - left;
      const y = clientY - top;

      const rotateX = (y / height - 0.5) * 30;
      const rotateY = (x / width - 0.5) * -30;

      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

      const thumbnail = card.querySelector('.project-thumbnail');
      const header = card.querySelector('.project-header');
      const title = card.querySelector('.project-title');
      const status = card.querySelector('.project-status');
      const description = card.querySelector('.project-description');
      const techTags = card.querySelector('.project-tech-tags');

      if (thumbnail) thumbnail.style.transform = 'translateZ(50px)';
      if (header) header.style.transform = 'translateZ(30px)';
      if (title) title.style.transform = 'translateZ(40px)';
      if (status) status.style.transform = 'translateZ(20px)';
      if (description) description.style.transform = 'translateZ(30px)';
      if (techTags) techTags.style.transform = 'translateZ(20px)';
    });

    card.addEventListener('mouseleave', function () {
      card.style.transform = 'rotateX(0) rotateY(0)';

      const thumbnail = card.querySelector('.project-thumbnail');
      const header = card.querySelector('.project-header');
      const title = card.querySelector('.project-title');
      const status = card.querySelector('.project-status');
      const description = card.querySelector('.project-description');
      const techTags = card.querySelector('.project-tech-tags');

      if (thumbnail) thumbnail.style.transform = 'translateZ(0)';
      if (header) header.style.transform = 'translateZ(0)';
      if (title) title.style.transform = 'translateZ(0)';
      if (status) status.style.transform = 'translateZ(0)';
      if (description) description.style.transform = 'translateZ(0)';
      if (techTags) techTags.style.transform = 'translateZ(0)';
    });
  });
});
