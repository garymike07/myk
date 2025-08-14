// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
    }
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Typing animation for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize typing animation when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 80);
    }
});

// Animate stats numbers
function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const target = parseInt(stat.textContent);
        const increment = target / 100;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            stat.textContent = Math.floor(current) + (stat.textContent.includes('+') ? '+' : '');
        }, 20);
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            
            // Trigger stats animation when about section is visible
            if (entry.target.classList.contains('about')) {
                animateStats();
            }
        }
    });
}, observerOptions);

// Observe sections for animations
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Button click handlers
document.addEventListener('DOMContentLoaded', () => {
    // Hire Me button
    const hireMeBtn = document.getElementById('hireMeBtn');
    if (hireMeBtn) {
        hireMeBtn.addEventListener('click', () => {
            document.querySelector('#contact').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    // View Resume button
    const viewResumeBtn = document.getElementById('viewResumeBtn');
    if (viewResumeBtn) {
        viewResumeBtn.addEventListener('click', () => {
            // You can replace this with actual resume link
            alert('Resume will be available soon!');
        });
    }

    // GitHub button
    const githubBtn = document.getElementById('githubBtn');
    if (githubBtn) {
        githubBtn.addEventListener('click', () => {
            window.open('https://github.com', '_blank');
        });
    }

    // LinkedIn button
    const linkedinBtn = document.getElementById('linkedinBtn');
    if (linkedinBtn) {
        linkedinBtn.addEventListener('click', () => {
            window.open('https://linkedin.com', '_blank');
        });
    }
});

// Contact form handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;
        
        // Simple validation
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Simulate form submission
        alert('Thank you for your message! I\'ll get back to you soon.');
        contactForm.reset();
    });
}

// Parallax effect for floating shapes
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const shapes = document.querySelectorAll('.shape');
    
    shapes.forEach((shape, index) => {
        const speed = 0.5 + (index * 0.1);
        const yPos = -(scrolled * speed);
        shape.style.transform = `translateY(${yPos}px) rotate(${scrolled * 0.1}deg)`;
    });
});

// Add CSS animation classes
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        animation: fadeInUp 0.8s ease forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .nav-link.active {
        color: #00d4ff !important;
    }
    
    .nav-link.active::after {
        width: 100% !important;
    }
`;
document.head.appendChild(style);

// Preloader (optional)
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Mobile menu toggle (if you want to add mobile menu later)
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// Add some interactive hover effects
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Skill tags hover effect
document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('mouseenter', () => {
        tag.style.transform = 'scale(1.1)';
        tag.style.background = 'rgba(0, 212, 255, 0.2)';
    });
    
    tag.addEventListener('mouseleave', () => {
        tag.style.transform = 'scale(1)';
        tag.style.background = 'rgba(0, 212, 255, 0.1)';
    });
});

// Add cursor trail effect (optional)
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Create floating particles effect
function createParticle() {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.width = '4px';
    particle.style.height = '4px';
    particle.style.background = '#00d4ff';
    particle.style.borderRadius = '50%';
    particle.style.pointerEvents = 'none';
    particle.style.opacity = '0.7';
    particle.style.left = mouseX + 'px';
    particle.style.top = mouseY + 'px';
    particle.style.zIndex = '9999';
    
    document.body.appendChild(particle);
    
    // Animate particle
    let opacity = 0.7;
    let size = 4;
    
    const animate = () => {
        opacity -= 0.02;
        size -= 0.1;
        
        particle.style.opacity = opacity;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        if (opacity <= 0) {
            particle.remove();
        } else {
            requestAnimationFrame(animate);
        }
    };
    
    requestAnimationFrame(animate);
}

// Add particle effect on mouse move (throttled)
let lastParticleTime = 0;
document.addEventListener('mousemove', (e) => {
    const now = Date.now();
    if (now - lastParticleTime > 50) { // Throttle to every 50ms
        createParticle();
        lastParticleTime = now;
    }
});

