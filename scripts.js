// Enhanced Portfolio JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initializeTheme();
    initializeClock();
    initializeAnimations();
    initializeSmoothScrolling();
    initializeBackToTop();
    initializeContactForm();
    initializeDeveloperTools();
    initializeProgressBars();
    
    console.log('Portfolio initialized successfully!');
});

// Dark Mode Toggle
function initializeTheme() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const icon = darkModeToggle.querySelector('i');
    
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
    
    darkModeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            localStorage.setItem('theme', 'light');
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    });
}

// Real-time Clock
function initializeClock() {
    const timeDisplay = document.getElementById('currentTime');
    
    function updateTime() {
        const now = new Date();
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        };
        
        timeDisplay.textContent = now.toLocaleDateString('en-US', options);
    }
    
    updateTime();
    setInterval(updateTime, 1000);
}

// Scroll Animations
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    animatedElements.forEach(el => observer.observe(el));
}

// Smooth Scrolling for Navigation Links
function initializeSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navbarHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                    bsCollapse.hide();
                }
            }
        });
    });
}

// Back to Top Button
function initializeBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Contact Form Handling
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Basic validation
        if (!name || !email || !subject || !message) {
            showFormMessage('Please fill in all required fields.', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showFormMessage('Please enter a valid email address.', 'error');
            return;
        }
        
        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Sending...';
        submitBtn.disabled = true;
        
        // Simulate form submission (replace with actual Formspree endpoint)
        setTimeout(() => {
            showFormMessage('Thank you for your message! I\'ll get back to you soon.', 'success');
            contactForm.reset();
            
            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
    
    function showFormMessage(message, type) {
        formMessage.style.display = 'block';
        formMessage.className = `alert alert-${type === 'error' ? 'danger' : 'success'}`;
        formMessage.textContent = message;
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}

// Developer Tools Demo
function initializeDeveloperTools() {
    // Character & Word Counter
    const textCounter = document.getElementById('textCounter');
    const wordCount = document.getElementById('wordCount');
    const charCount = document.getElementById('charCount');
    
    if (textCounter && wordCount && charCount) {
        textCounter.addEventListener('input', function() {
            const text = this.value;
            const words = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
            const characters = text.length;
            
            wordCount.textContent = words;
            charCount.textContent = characters;
        });
    }
    
    // UUID/GUID Generator
    const generateUUIDBtn = document.getElementById('generateUUID');
    const generatedUUID = document.getElementById('generatedUUID');
    const copyUUIDBtn = document.getElementById('copyUUID');
    
    if (generateUUIDBtn && generatedUUID) {
        generateUUIDBtn.addEventListener('click', function() {
            const uuid = generateUUID();
            generatedUUID.value = uuid;
        });
        
        // Generate initial UUID
        generatedUUID.value = generateUUID();
    }
    
    if (copyUUIDBtn && generatedUUID) {
        copyUUIDBtn.addEventListener('click', function() {
            generatedUUID.select();
            document.execCommand('copy');
            
            // Show feedback
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fas fa-check me-1"></i>Copied!';
            this.classList.add('btn-success');
            this.classList.remove('btn-outline-secondary');
            
            setTimeout(() => {
                this.innerHTML = originalText;
                this.classList.remove('btn-success');
                this.classList.add('btn-outline-secondary');
            }, 2000);
        });
    }
    
    function generateUUID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            const r = Math.random() * 16 | 0;
            const v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}

// Animate Progress Bars on Scroll
function initializeProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');
    
    const progressObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const width = progressBar.style.width;
                
                // Reset width to 0 and animate
                progressBar.style.width = '0%';
                setTimeout(() => {
                    progressBar.style.width = width;
                }, 100);
                
                // Unobserve after animation
                progressObserver.unobserve(progressBar);
            }
        });
    }, {
        threshold: 0.5
    });
    
    progressBars.forEach(bar => progressObserver.observe(bar));
}

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(20px)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.08)';
        navbar.style.backdropFilter = 'blur(20px)';
    }
});

// Project card hover effects
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Blog card hover effects
document.addEventListener('DOMContentLoaded', function() {
    const blogCards = document.querySelectorAll('.blog-card');
    
    blogCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Testimonial carousel auto-play
document.addEventListener('DOMContentLoaded', function() {
    const testimonialCarousel = document.getElementById('testimonialCarousel');
    if (testimonialCarousel) {
        const carousel = new bootstrap.Carousel(testimonialCarousel, {
            interval: 5000,
            wrap: true
        });
    }
});

// Add typing effect to hero tagline
function initializeTypingEffect() {
    const taglineElement = document.querySelector('.tagline-text');
    if (!taglineElement) return;
    
    const originalText = taglineElement.textContent;
    taglineElement.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < originalText.length) {
            taglineElement.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    // Start typing effect after a delay
    setTimeout(typeWriter, 2000);
}

// Initialize typing effect when hero section is visible
const heroObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            initializeTypingEffect();
            heroObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', function() {
    const heroSection = document.getElementById('hero');
    if (heroSection) {
        heroObserver.observe(heroSection);
    }
});

// Add particle effect (optional enhancement)
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    document.body.appendChild(particlesContainer);
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particle.style.width = particle.style.height = Math.random() * 4 + 2 + 'px';
        particlesContainer.appendChild(particle);
    }
}

// Initialize particles in dark mode
document.addEventListener('DOMContentLoaded', function() {
    if (document.body.classList.contains('dark-mode')) {
        createParticles();
    }
    
    // Add particles when switching to dark mode
    const darkModeToggle = document.getElementById('darkModeToggle');
    darkModeToggle.addEventListener('click', function() {
        setTimeout(() => {
            const existingParticles = document.querySelector('.particles');
            if (document.body.classList.contains('dark-mode') && !existingParticles) {
                createParticles();
            } else if (!document.body.classList.contains('dark-mode') && existingParticles) {
                existingParticles.remove();
            }
        }, 100);
    });
});

// Add CSS for particles
const particleCSS = `
.particles {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
}

.particle {
    position: absolute;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    animation: float 20s infinite linear;
}

@keyframes float {
    0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
    10% { opacity: 1; }
    90% { opacity: 1; }
    100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
}
`;

// Inject particle CSS
const style = document.createElement('style');
style.textContent = particleCSS;
document.head.appendChild(style);

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(function() {
    // Scroll-based animations and effects
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Error handling for missing elements
function safeQuerySelector(selector, callback) {
    const element = document.querySelector(selector);
    if (element && callback) {
        callback(element);
    }
    return element;
}

// Use safe selectors for critical elements
document.addEventListener('DOMContentLoaded', function() {
    safeQuerySelector('#darkModeToggle', (toggle) => {
        console.log('Dark mode toggle initialized');
    });
    
    safeQuerySelector('#currentTime', (clock) => {
        console.log('Clock initialized');
    });
    
    safeQuerySelector('#contactForm', (form) => {
        console.log('Contact form initialized');
    });
});

// Add smooth reveal animation for sections
const revealSections = function() {
    const sections = document.querySelectorAll('section');
    const windowHeight = window.innerHeight;
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const revealPoint = 150;
        
        if (sectionTop < windowHeight - revealPoint) {
            section.classList.add('revealed');
        }
    });
};

window.addEventListener('scroll', debounce(revealSections, 50));
window.addEventListener('load', revealSections);

// Console welcome message
console.log(`
🚀 Welcome to Gary Mike's Portfolio!
🌟 Built with modern web technologies
💡 Featuring interactive tools and responsive design
📧 Contact: wrootmike@gmail.com
🔗 GitHub: https://github.com/garymike07
`);

// Analytics tracking (placeholder)
function trackEvent(eventName, eventData = {}) {
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, eventData);
    }
    console.log('Event tracked:', eventName, eventData);
}

// Track important interactions
document.addEventListener('DOMContentLoaded', function() {
    // Track project card clicks
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', function() {
            const projectTitle = this.querySelector('.project-title').textContent;
            trackEvent('project_view', {
                project_name: projectTitle
            });
        });
    });
    
    // Track contact form submissions
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function() {
            trackEvent('contact_form_submit');
        });
    }
    
    // Track tool usage
    document.getElementById('generateUUID')?.addEventListener('click', function() {
        trackEvent('tool_usage', { tool: 'uuid_generator' });
    });
    
    document.getElementById('textCounter')?.addEventListener('input', debounce(function() {
        trackEvent('tool_usage', { tool: 'text_counter' });
    }, 1000));
});

