// Modern Portfolio Script - Clean Version without Animations

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializePortfolio();
});

// Initialize all portfolio functionality
function initializePortfolio() {
    initializeNavigation();
    initializeProjectFilters();
    initializeContactForm();
    initializeDarkModeToggle();
    initializeTimeDisplay();
    initializeSkillBars();
    initializeThemeSwitcher();
    initializeMobileMenu();
    initializeParticleBackground();
    initializeTypingAnimation();
}

// Navigation functionality
function initializeNavigation() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Update active nav link
                updateActiveNavLink(targetId);
            }
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Update active nav link based on scroll position
        updateActiveNavOnScroll();
    });
}

// Update active navigation link
function updateActiveNavLink(targetId) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === targetId) {
            link.classList.add('active');
        }
    });
}

// Update active nav link on scroll
function updateActiveNavOnScroll() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            updateActiveNavLink(`#${sectionId}`);
        }
    });
}

// Mobile menu functionality
function initializeMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('nav ul');
    
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on nav links
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
            });
        });
    }
}

// Project filtering functionality
function initializeProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active filter button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter projects
            projectItems.forEach(item => {
                const techStack = item.getAttribute('data-tech');
                
                if (filter === 'all' || techStack.includes(filter)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// Contact form functionality
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;
            });
            
            // Show loading state
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.innerHTML;
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Sending...';
            submitButton.disabled = true;
            
            // Simulate form submission (replace with actual form handling)
            setTimeout(() => {
                // Show success message
                showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
                
                // Reset form
                this.reset();
                
                // Reset button
                submitButton.innerHTML = originalText;
                submitButton.disabled = false;
            }, 2000);
        });
    }
}

// Dark mode toggle
function initializeDarkModeToggle() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.toggle('light-mode', savedTheme === 'light');
        updateDarkModeIcon(savedTheme === 'light');
    }
    
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function() {
            body.classList.toggle('light-mode');
            const isLightMode = body.classList.contains('light-mode');
            
            // Save theme preference
            localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
            
            // Update icon
            updateDarkModeIcon(isLightMode);
        });
    }
}

// Update dark mode toggle icon
function updateDarkModeIcon(isLightMode) {
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle) {
        const icon = darkModeToggle.querySelector('i');
        icon.className = isLightMode ? 'fas fa-sun' : 'fas fa-moon';
    }
}

// Time display functionality
function initializeTimeDisplay() {
    const timeDisplay = document.getElementById('currentTime');
    
    if (timeDisplay) {
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
                timeZone: 'Africa/Nairobi'
            };
            
            timeDisplay.textContent = now.toLocaleDateString('en-US', options);
        }
        
        updateTime();
        setInterval(updateTime, 1000);
    }
}

// Skill bars functionality (without animation)
function initializeSkillBars() {
    const skillBars = document.querySelectorAll('.progress-bar');
    
    // Simply set the width immediately without animation
    skillBars.forEach(bar => {
        const width = bar.getAttribute('data-width') || bar.style.width;
        if (width) {
            bar.style.width = width;
        }
    });
}

// Theme switcher functionality
function initializeThemeSwitcher() {
    const themeSwitcher = document.getElementById('themeSwitcher');
    const body = document.body;

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('colorTheme');
    if (savedTheme) {
        body.classList.toggle('modern-theme', savedTheme === 'modern');
    }

    if (themeSwitcher) {
        themeSwitcher.addEventListener('click', function() {
            body.classList.toggle('modern-theme');
            const isModernTheme = body.classList.contains('modern-theme');

            // Save theme preference
            localStorage.setItem('colorTheme', isModernTheme ? 'modern' : 'default');
        });
    }
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'} me-2"></i>
            ${message}
        </div>
        <button class="notification-close" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Add notification styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--bg-glass);
        backdrop-filter: blur(20px);
        border: 1px solid var(--border-primary);
        border-radius: var(--radius-md);
        padding: var(--spacing-md);
        color: var(--text-primary);
        z-index: 9999;
        max-width: 400px;
        box-shadow: var(--shadow-primary);
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// Project modal functionality
function initializeProjectModal() {
    const projectCards = document.querySelectorAll('.project-card[data-project-id]');
    
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            const projectData = {
                id: this.dataset.projectId,
                title: this.dataset.projectTitle,
                description: this.dataset.projectDescription,
                tech: this.dataset.projectTech,
                image: this.dataset.projectImage
            };
            
            showProjectModal(projectData);
        });
    });
}

// Show project modal
function showProjectModal(projectData) {
    const modal = document.createElement('div');
    modal.className = 'project-modal';
    modal.innerHTML = `
        <div class="modal-overlay" onclick="this.parentElement.remove()"></div>
        <div class="modal-content">
            <button class="modal-close" onclick="this.closest('.project-modal').remove()">
                <i class="fas fa-times"></i>
            </button>
            <div class="modal-body">
                <img src="${projectData.image}" alt="${projectData.title}" class="modal-image">
                <h3>${projectData.title}</h3>
                <p>${projectData.description}</p>
                <div class="modal-tech">
                    ${projectData.tech.split(', ').map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="modal-actions">
                    <a href="#" class="btn btn-primary">Live Demo</a>
                    <a href="#" class="btn btn-outline-primary">View Code</a>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

// Search functionality
function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const searchableElements = document.querySelectorAll('[data-searchable]');
            
            searchableElements.forEach(element => {
                const text = element.textContent.toLowerCase();
                const isVisible = text.includes(searchTerm);
                element.style.display = isVisible ? 'block' : 'none';
            });
        });
    }
}

// Performance monitoring
function initializePerformanceMonitoring() {
    // Monitor page load performance
    window.addEventListener('load', function() {
        const loadTime = performance.now();
        console.log(`Page loaded in ${loadTime.toFixed(2)}ms`);
        
        // Send analytics if available
        if (typeof gtag !== 'undefined') {
            gtag('event', 'page_load_time', {
                value: Math.round(loadTime)
            });
        }
    });
}

// Error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    
    // Show user-friendly error message
    showNotification('Something went wrong. Please refresh the page.', 'error');
});

// Initialize additional features when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initializeProjectModal();
    initializeSearch();
    initializePerformanceMonitoring();
});

// Particle background functionality
function initializeParticleBackground() {
    const particleContainer = document.querySelector('.floating-particles');
    if (!particleContainer) return;

    const particleCount = 50; // Number of particles

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        // Random size
        const size = Math.random() * 5 + 1;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        // Random position
        particle.style.left = `${Math.random() * 100}%`;

        // Random animation delay and duration
        particle.style.animationDelay = `${Math.random() * 20}s`;
        particle.style.animationDuration = `${10 + Math.random() * 10}s`;

        particleContainer.appendChild(particle);
    }
}

// Typing animation functionality
function initializeTypingAnimation() {
    const rolesTextElement = document.querySelector('.roles-text');
    if (!rolesTextElement) return;

    const roles = ["Full-stack Developer", "ICT Officer", "Network Administrator", "Web3 Enthusiast"];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentRole = roles[roleIndex];
        let displayText = '';

        if (isDeleting) {
            displayText = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            displayText = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }

        rolesTextElement.innerHTML = `${displayText}<span class="cursor"></span>`;

        let typeSpeed = 200;
        if (isDeleting) {
            typeSpeed /= 2;
        }

        if (!isDeleting && charIndex === currentRole.length) {
            typeSpeed = 2000; // Pause at the end of the word
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typeSpeed = 500; // Pause before typing new word
        }

        setTimeout(type, typeSpeed);
    }

    type();
}

// Export functions for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializePortfolio,
        showNotification,
        updateActiveNavLink
    };
}

