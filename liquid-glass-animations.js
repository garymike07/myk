// Liquid Glass Animations and Interactive Effects

class LiquidGlassEffects {
    constructor() {
        this.init();
        this.setupEventListeners();
        this.createFloatingElements();
        this.initScrollAnimations();
        this.setupMouseTracker();
    }

    init() {
        // Add liquid glass classes to body when loaded
        document.addEventListener('DOMContentLoaded', () => {
            document.body.classList.add('liquid-glass-loaded');
            this.createLiquidLoader();
            this.initParallaxEffects();
        });
    }

    createLiquidLoader() {
        const loader = document.createElement('div');
        loader.className = 'liquid-loader';
        document.body.appendChild(loader);
        
        // Remove loader after page load
        window.addEventListener('load', () => {
            setTimeout(() => {
                loader.style.opacity = '0';
                setTimeout(() => loader.remove(), 500);
            }, 1000);
        });
    }

    setupEventListeners() {
        // Enhanced glass card hover effects
        document.querySelectorAll('.glass-card').forEach(card => {
            card.addEventListener('mouseenter', (e) => {
                this.createRippleEffect(e.target, e);
                this.addGlowEffect(e.target);
            });
            
            card.addEventListener('mouseleave', (e) => {
                this.removeGlowEffect(e.target);
            });
            
            card.addEventListener('mousemove', (e) => {
                this.updateCardTilt(e.target, e);
            });
        });

        // Enhanced button interactions
        document.querySelectorAll('.btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.createButtonWave(e.target, e);
            });
        });

        // Social link liquid effects
        document.querySelectorAll('.social-link').forEach(link => {
            link.addEventListener('mouseenter', (e) => {
                this.createLiquidBubble(e.target);
            });
        });

        // Project card liquid animations
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('mouseenter', (e) => {
                this.activateLiquidFlow(e.target);
            });
            
            card.addEventListener('mouseleave', (e) => {
                this.deactivateLiquidFlow(e.target);
            });
        });
    }

    createRippleEffect(element, event) {
        const ripple = document.createElement('div');
        const rect = element.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: radial-gradient(circle, rgba(0, 102, 204, 0.3), transparent 70%);
            border-radius: 50%;
            transform: scale(0);
            animation: liquidRipple 0.8s ease-out;
            pointer-events: none;
            z-index: 1;
        `;
        
        element.style.position = 'relative';
        element.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 800);
    }

    addGlowEffect(element) {
        element.style.boxShadow = `
            0 20px 40px rgba(0, 102, 204, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.3),
            0 0 0 1px rgba(0, 102, 204, 0.4),
            0 0 30px rgba(0, 102, 204, 0.2)
        `;
    }

    removeGlowEffect(element) {
        element.style.boxShadow = '';
    }

    updateCardTilt(element, event) {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = (event.clientX - centerX) / (rect.width / 2);
        const deltaY = (event.clientY - centerY) / (rect.height / 2);
        
        const tiltX = deltaY * 5; // Max 5 degrees
        const tiltY = deltaX * -5; // Max 5 degrees
        
        element.style.transform = `
            perspective(1000px) 
            rotateX(${tiltX}deg) 
            rotateY(${tiltY}deg) 
            translateY(-8px) 
            scale(1.02)
        `;
        
        // Reset on mouse leave
        element.addEventListener('mouseleave', () => {
            element.style.transform = '';
        }, { once: true });
    }

    createButtonWave(button, event) {
        const wave = document.createElement('div');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height) * 2;
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;
        
        wave.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: radial-gradient(circle, rgba(255, 255, 255, 0.3), transparent 70%);
            border-radius: 50%;
            transform: scale(0);
            animation: liquidWave 0.6s ease-out;
            pointer-events: none;
            z-index: 1;
        `;
        
        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        button.appendChild(wave);
        
        setTimeout(() => wave.remove(), 600);
    }

    createLiquidBubble(element) {
        const bubble = document.createElement('div');
        bubble.style.cssText = `
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background: radial-gradient(circle at 30% 30%, rgba(0, 102, 204, 0.4), transparent 70%);
            border-radius: 50%;
            animation: liquidBubble 1s ease-out;
            pointer-events: none;
            z-index: 0;
        `;
        
        element.style.position = 'relative';
        element.appendChild(bubble);
        
        setTimeout(() => bubble.remove(), 1000);
    }

    activateLiquidFlow(card) {
        const flow = document.createElement('div');
        flow.className = 'liquid-flow-active';
        flow.style.cssText = `
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: 
                radial-gradient(circle at 30% 70%, rgba(0, 102, 204, 0.2), transparent 50%),
                radial-gradient(circle at 70% 30%, rgba(0, 166, 147, 0.2), transparent 50%);
            animation: liquidFlowActive 3s ease-in-out infinite;
            pointer-events: none;
            z-index: 0;
        `;
        
        card.appendChild(flow);
    }

    deactivateLiquidFlow(card) {
        const flow = card.querySelector('.liquid-flow-active');
        if (flow) {
            flow.style.animation = 'liquidFlowDeactive 0.5s ease-out forwards';
            setTimeout(() => flow.remove(), 500);
        }
    }

    createFloatingElements() {
        const container = document.querySelector('.hero-section');
        if (!container) return;
        
        for (let i = 0; i < 15; i++) {
            const element = document.createElement('div');
            element.className = 'floating-liquid-element';
            element.style.cssText = `
                position: absolute;
                width: ${Math.random() * 20 + 10}px;
                height: ${Math.random() * 20 + 10}px;
                background: radial-gradient(circle, rgba(0, 102, 204, 0.3), transparent);
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: floatingLiquid ${Math.random() * 10 + 15}s linear infinite;
                pointer-events: none;
                z-index: 1;
            `;
            
            container.appendChild(element);
        }
    }

    initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('liquid-reveal');
                    this.animateProgressBars(entry.target);
                }
            });
        }, observerOptions);
        
        document.querySelectorAll('.glass-card, .project-card, .skill-category').forEach(el => {
            observer.observe(el);
        });
    }

    animateProgressBars(container) {
        const progressBars = container.querySelectorAll('.progress-bar');
        progressBars.forEach((bar, index) => {
            setTimeout(() => {
                const width = bar.style.width;
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.width = width;
                    bar.style.transition = 'width 1.5s ease-out';
                }, 100);
            }, index * 200);
        });
    }

    initParallaxEffects() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.floating-particles');
            
            parallaxElements.forEach(element => {
                const speed = 0.5;
                element.style.transform = `translateY(${scrolled * speed}px)`;
            });
            
            // Liquid background parallax
            document.body.style.backgroundPosition = `
                ${scrolled * 0.1}px ${scrolled * 0.1}px,
                ${scrolled * -0.1}px ${scrolled * -0.1}px,
                ${scrolled * 0.05}px ${scrolled * 0.05}px
            `;
        });
    }

    setupMouseTracker() {
        let mouseX = 0;
        let mouseY = 0;
        
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX / window.innerWidth;
            mouseY = e.clientY / window.innerHeight;
            
            // Update CSS custom properties for mouse-based effects
            document.documentElement.style.setProperty('--mouse-x', mouseX);
            document.documentElement.style.setProperty('--mouse-y', mouseY);
            
            this.updateLiquidCursor(e.clientX, e.clientY);
        });
    }

    updateLiquidCursor(x, y) {
        let cursor = document.querySelector('.liquid-cursor');
        if (!cursor) {
            cursor = document.createElement('div');
            cursor.className = 'liquid-cursor';
            cursor.style.cssText = `
                position: fixed;
                width: 20px;
                height: 20px;
                background: radial-gradient(circle, rgba(0, 102, 204, 0.5), transparent 70%);
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                transition: transform 0.1s ease;
                mix-blend-mode: screen;
            `;
            document.body.appendChild(cursor);
        }
        
        cursor.style.left = `${x - 10}px`;
        cursor.style.top = `${y - 10}px`;
    }

    // Enhanced time display with liquid effects
    updateTimeDisplay() {
        const timeElement = document.getElementById('currentTime');
        if (!timeElement) return;
        
        const now = new Date();
        const timeString = now.toLocaleTimeString('en-US', {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        
        const dateString = now.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        timeElement.innerHTML = `
            <div class="time-main">${timeString}</div>
            <div class="date-sub">${dateString}</div>
        `;
        
        // Add liquid pulse effect every second
        timeElement.style.animation = 'liquidPulse 0.3s ease-out';
        setTimeout(() => {
            timeElement.style.animation = '';
        }, 300);
    }

    // Initialize enhanced features
    initEnhancedFeatures() {
        // Update time every second
        setInterval(() => this.updateTimeDisplay(), 1000);
        this.updateTimeDisplay();
        
        // Add liquid glass effect to navbar on scroll
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        });
        
        // Enhanced dark mode toggle with liquid transition
        const darkModeToggle = document.getElementById('darkModeToggle');
        if (darkModeToggle) {
            darkModeToggle.addEventListener('click', () => {
                this.createLiquidTransition();
            });
        }
    }

    createLiquidTransition() {
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle at center, rgba(0, 102, 204, 0.8), transparent 70%);
            z-index: 9998;
            pointer-events: none;
            animation: liquidTransition 0.8s ease-out;
        `;
        
        document.body.appendChild(overlay);
        setTimeout(() => overlay.remove(), 800);
    }
}

// CSS Animations (to be added to the stylesheet)
const liquidAnimations = `
@keyframes liquidRipple {
    0% { transform: scale(0); opacity: 1; }
    100% { transform: scale(1); opacity: 0; }
}

@keyframes liquidWave {
    0% { transform: scale(0); opacity: 1; }
    100% { transform: scale(1); opacity: 0; }
}

@keyframes liquidBubble {
    0% { transform: scale(0) rotate(0deg); opacity: 1; }
    100% { transform: scale(1.2) rotate(180deg); opacity: 0; }
}

@keyframes liquidFlowActive {
    0% { transform: rotate(0deg) scale(1); opacity: 0.7; }
    50% { transform: rotate(180deg) scale(1.1); opacity: 1; }
    100% { transform: rotate(360deg) scale(1); opacity: 0.7; }
}

@keyframes liquidFlowDeactive {
    0% { opacity: 1; transform: scale(1); }
    100% { opacity: 0; transform: scale(0.8); }
}

@keyframes floatingLiquid {
    0% { 
        transform: translateY(100vh) rotate(0deg) scale(1);
        opacity: 0;
    }
    10% { opacity: 1; }
    90% { opacity: 1; }
    100% { 
        transform: translateY(-100px) rotate(360deg) scale(1.2);
        opacity: 0;
    }
}

@keyframes liquidReveal {
    0% { 
        opacity: 0; 
        transform: translateY(50px) scale(0.9);
        filter: blur(10px);
    }
    100% { 
        opacity: 1; 
        transform: translateY(0) scale(1);
        filter: blur(0);
    }
}

@keyframes liquidTransition {
    0% { 
        transform: scale(0);
        opacity: 0;
    }
    50% { 
        transform: scale(1.5);
        opacity: 1;
    }
    100% { 
        transform: scale(3);
        opacity: 0;
    }
}

.liquid-reveal {
    animation: liquidReveal 1s ease-out forwards;
}

.navbar-scrolled {
    background: rgba(15, 23, 42, 0.95);
    backdrop-filter: blur(30px) saturate(200%);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

.time-main {
    font-size: 1.8rem;
    font-weight: 600;
    background: linear-gradient(45deg, #0066CC, #00A693);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.date-sub {
    font-size: 0.9rem;
    color: var(--gray-text);
    margin-top: 0.25rem;
}
`;

// Add animations to stylesheet
const style = document.createElement('style');
style.textContent = liquidAnimations;
document.head.appendChild(style);

// Initialize liquid glass effects
const liquidGlass = new LiquidGlassEffects();
liquidGlass.initEnhancedFeatures();

// Export for potential external use
window.LiquidGlassEffects = LiquidGlassEffects;

