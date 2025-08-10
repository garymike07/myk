document.addEventListener('DOMContentLoaded', function() {
    // GSAP Animations
    gsap.registerPlugin(ScrollTrigger);

    // Hero Section Parallax
    gsap.to(".hero-section", {
        scrollTrigger: {
            trigger: ".hero-section",
            start: "top top",
            end: "bottom top",
            scrub: true
        },
        y: 200,
        ease: "none"
    });

    // Section Title Stagger
    gsap.from(".section-title", {
        scrollTrigger: {
            trigger: ".section-title",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1
    });

    // Project Card Flip Animation
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        const front = card.querySelector('.project-content');
        const back = document.createElement('div');
        back.className = 'project-card-back';
        back.innerHTML = `
            <h4>More Info</h4>
            <p>More details about this project will be revealed here.</p>
            <a href="#" class="btn btn-primary">View Project</a>
        `;
        card.appendChild(back);

        gsap.set(card, { transformStyle: "preserve-3d" });
        gsap.set(back, { rotationY: 180 });

        card.addEventListener('mouseenter', () => {
            gsap.to(card, { rotationY: 180, duration: 0.7, ease: "power2.inOut" });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, { rotationY: 0, duration: 0.7, ease: "power2.inOut" });
        });
    });
});
