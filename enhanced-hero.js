document.addEventListener('DOMContentLoaded', function () {
  // Interactive Particle Background
  const particlesContainer = document.querySelector('.particles');
  if (particlesContainer) {
    particlesContainer.addEventListener('mousemove', function (e) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      const size = Math.random() * 10 + 5;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${e.x}px`;
      particle.style.top = `${e.y}px`;
      particle.style.animationDuration = `${Math.random() * 3 + 2}s`;
      particlesContainer.appendChild(particle);
      setTimeout(() => {
        particle.remove();
      }, 3000);
    });
  }

  // 3D Tilt Effect on Hero Section
  const hero = document.getElementById('hero');
  if (hero) {
    hero.addEventListener('mousemove', function (e) {
      const { clientX, clientY } = e;
      const { offsetWidth, offsetHeight } = hero;
      const xRotation = ((clientY - offsetHeight / 2) / offsetHeight) * 20;
      const yRotation = ((clientX - offsetWidth / 2) / offsetWidth) * 20;

      const heroProfile = hero.querySelector('.hero-profile');
      const heroGreeting = hero.querySelector('.hero-greeting');
      const heroRoles = hero.querySelector('.hero-roles');
      const heroTagline = hero.querySelector('.hero-tagline');
      const heroButtons = hero.querySelector('.hero-buttons');

      if (heroProfile) heroProfile.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
      if (heroGreeting) heroGreeting.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
      if (heroRoles) heroRoles.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
      if (heroTagline) heroTagline.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
      if (heroButtons) heroButtons.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
    });
  }
});
