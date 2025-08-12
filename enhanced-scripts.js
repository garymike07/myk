// Enhanced Portfolio JavaScript with Stunning Animations
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
    initializeParticles();
    initializeProjectCards();
    
    console.log('Enhanced Portfolio initialized successfully!');
});

// Enhanced Dark Mode Toggle with Smooth Transitions
function initializeTheme() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const icon = darkModeToggle.querySelector('i');
    
    // Check for saved theme preference or default to dark mode for better experience
    const savedTheme = localStorage.getItem('theme') || 'dark';
    
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
    
    darkModeToggle.addEventListener('click', function() {
        // Add transition class for smooth theme switching
        body.style.transition = 'all 0.3s ease';
        
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
        
        // Remove transition class after animation
        setTimeout(() => {
            body.style.transition = '';
        }, 300);
    });
}

// Enhanced Real-time Clock with Better Formatting
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
            timeZoneName: 'short'
        };
        
        const timeString = now.toLocaleDateString('en-US', options);
        if (timeDisplay) {
            timeDisplay.textContent = timeString;
        }
    }
    
    updateTime();
    setInterval(updateTime, 1000);
}

// Enhanced Animations with Intersection Observer
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationDelay = '0s';
                entry.target.classList.add('animate');
                
                // Add staggered animation for child elements
                const children = entry.target.querySelectorAll('.fade-in');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.style.animationDelay = `${index * 0.1}s`;
                        child.classList.add('animate');
                    }, index * 100);
                });
            }
        });
    }, observerOptions);
    
    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// Enhanced Smooth Scrolling
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Enhanced Back to Top Button
function initializeBackToTop() {
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTop.className = 'back-to-top back-to-top-glass';
    backToTop.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: none;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
    `;
    
    document.body.appendChild(backToTop);
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.style.opacity = '1';
            backToTop.style.visibility = 'visible';
        } else {
            backToTop.style.opacity = '0';
            backToTop.style.visibility = 'hidden';
        }
    });
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Enhanced Contact Form
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Add loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Simulate form submission
            setTimeout(() => {
                submitBtn.textContent = 'Message Sent!';
                submitBtn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
                
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.background = '';
                    contactForm.reset();
                }, 2000);
            }, 1500);
        });
    }
}

// Enhanced Developer Tools
function initializeDeveloperTools() {
    // Add keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        // Ctrl/Cmd + D for dark mode toggle
        if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
            e.preventDefault();
            document.getElementById('darkModeToggle').click();
        }
        
        // Ctrl/Cmd + H for home
        if ((e.ctrlKey || e.metaKey) && e.key === 'h') {
            e.preventDefault();
            document.querySelector('a[href="#hero"]').click();
        }
    });
    
    // Add developer console message
    console.log('%c🚀 Welcome to Gary Mike\'s Portfolio!', 'color: #667eea; font-size: 20px; font-weight: bold;');
    console.log('%cKeyboard Shortcuts:', 'color: #764ba2; font-size: 14px; font-weight: bold;');
    console.log('%c• Ctrl/Cmd + D: Toggle Dark Mode', 'color: #6366f1; font-size: 12px;');
    console.log('%c• Ctrl/Cmd + H: Go to Home', 'color: #6366f1; font-size: 12px;');
}

// Enhanced Progress Bars Animation
function initializeProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');
    
    const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const width = progressBar.style.width;
                
                // Reset and animate
                progressBar.style.width = '0%';
                setTimeout(() => {
                    progressBar.style.width = width;
                }, 200);
                
                progressObserver.unobserve(progressBar);
            }
        });
    }, { threshold: 0.5 });
    
    progressBars.forEach(bar => {
        progressObserver.observe(bar);
    });
}

// Enhanced Project Cards with 3D Effects
function initializeProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02) rotateX(5deg)';
            this.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1) rotateX(0deg)';
        });
        
        // Add mouse move effect for subtle 3D tilt
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            this.style.transform = `translateY(-15px) scale(1.02) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
    });
}

// Particle Background Effect
function initializeParticles() {
    const canvas = document.createElement('canvas');
    canvas.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
        opacity: 0.3;
    `;
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    let particles = [];
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    function createParticle() {
        return {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            size: Math.random() * 2 + 1,
            opacity: Math.random() * 0.5 + 0.2
        };
    }
    
    function initParticles() {
        particles = [];
        for (let i = 0; i < 50; i++) {
            particles.push(createParticle());
        }
    }
    
    function updateParticles() {
        particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        });
    }
    
    function drawParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(102, 126, 234, ${particle.opacity})`;
            ctx.fill();
        });
        
        // Draw connections
        particles.forEach((particle, i) => {
            particles.slice(i + 1).forEach(otherParticle => {
                const dx = particle.x - otherParticle.x;
                const dy = particle.y - otherParticle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 100) {
                    ctx.beginPath();
                    ctx.moveTo(particle.x, particle.y);
                    ctx.lineTo(otherParticle.x, otherParticle.y);
                    ctx.strokeStyle = `rgba(102, 126, 234, ${0.1 * (1 - distance / 100)})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            });
        });
    }
    
    function animate() {
        updateParticles();
        drawParticles();
        requestAnimationFrame(animate);
    }
    
    resizeCanvas();
    initParticles();
    animate();
    
    window.addEventListener('resize', () => {
        resizeCanvas();
        initParticles();
    });
}

// Enhanced Navigation Scroll Effect
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.glass-nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(0, 0, 0, 0.5)';
        nav.style.backdropFilter = 'blur(25px)';
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.08)';
        nav.style.backdropFilter = 'blur(20px)';
    }
});

// Enhanced Typing Effect for Hero Section
function initializeTypingEffect() {
    const roles = [
        'Full-stack Developer',
        'ICT Officer', 
        'Network Administrator',
        'Web 3 Enthusiast',
        'Tech Innovator'
    ];
    
    const rolesElement = document.querySelector('.roles-text');
    if (rolesElement) {
        let currentRole = 0;
        let currentChar = 0;
        let isDeleting = false;
        
        function typeRole() {
            const role = roles[currentRole];
            
            if (isDeleting) {
                rolesElement.textContent = role.substring(0, currentChar - 1);
                currentChar--;
            } else {
                rolesElement.textContent = role.substring(0, currentChar + 1);
                currentChar++;
            }
            
            let typeSpeed = isDeleting ? 50 : 100;
            
            if (!isDeleting && currentChar === role.length) {
                typeSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && currentChar === 0) {
                isDeleting = false;
                currentRole = (currentRole + 1) % roles.length;
                typeSpeed = 500;
            }
            
            setTimeout(typeRole, typeSpeed);
        }
        
        typeRole();
    }
}

// Initialize typing effect after DOM is loaded
setTimeout(initializeTypingEffect, 1000);



// Project Modal Functionality
function initializeProjectModals() {
    const projectModal = document.getElementById('projectModal');
    const blogModal = document.getElementById('blogModal');
    
    // Project details modal
    document.querySelectorAll('.view-details-btn').forEach(button => {
        button.addEventListener('click', function() {
            const projectCard = this.closest('.project-card');
            const projectId = projectCard.getAttribute('data-project-id');
            const projectTitle = projectCard.getAttribute('data-project-title');
            const projectDescription = projectCard.getAttribute('data-project-description');
            const projectTech = projectCard.getAttribute('data-project-tech');
            const projectImage = projectCard.getAttribute('data-project-image');
            
            // Populate modal with project data
            document.getElementById('projectModalLabel').textContent = projectTitle;
            document.getElementById('modalProjectImage').src = projectImage;
            document.getElementById('modalProjectDescription').textContent = projectDescription;
            document.getElementById('modalProjectTech').textContent = projectTech;
            
            // Add detailed project information based on project ID
            const detailedInfo = getProjectDetails(projectId);
            if (detailedInfo) {
                document.getElementById('modalProjectDescription').innerHTML = detailedInfo;
            }
        });
    });
    
    // Blog post modal handlers
    document.querySelectorAll('.blog-read-more').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const blogPost = this.closest('.blog-post');
            const blogTitle = blogPost.querySelector('.blog-title').textContent;
            const blogContent = getBlogContent(blogTitle);
            
            document.getElementById('blogModalLabel').textContent = blogTitle;
            document.getElementById('modalBlogContent').innerHTML = blogContent;
        });
    });
}

// Get detailed project information
function getProjectDetails(projectId) {
    const projectDetails = {
        'ml-api': `
            <h6>Project Overview</h6>
            <p>A comprehensive machine learning API platform designed for scalable image recognition and natural language processing. This project demonstrates advanced ML engineering practices with production-ready architecture.</p>
            
            <h6>Key Features</h6>
            <ul>
                <li>Real-time image classification with 95% accuracy</li>
                <li>Natural Language Processing for sentiment analysis</li>
                <li>Auto-scaling infrastructure using Docker containers</li>
                <li>RESTful API with comprehensive documentation</li>
                <li>Real-time monitoring and logging</li>
                <li>Rate limiting and authentication</li>
            </ul>
            
            <h6>Technical Implementation</h6>
            <p>Built using TensorFlow for model training and inference, FastAPI for high-performance API endpoints, and Docker for containerization. The system handles over 1000 requests per minute with sub-second response times.</p>
            
            <h6>Impact</h6>
            <p>Successfully deployed to production serving 10,000+ daily users with 99.9% uptime. Reduced image processing time by 70% compared to previous solutions.</p>
        `,
        'ecommerce-platform': `
            <h6>Project Overview</h6>
            <p>A full-stack e-commerce solution featuring modern design, secure payment processing, and comprehensive inventory management. Built with scalability and user experience in mind.</p>
            
            <h6>Key Features</h6>
            <ul>
                <li>Responsive design optimized for all devices</li>
                <li>Secure payment processing with Stripe integration</li>
                <li>Real-time inventory management</li>
                <li>Advanced search and filtering capabilities</li>
                <li>Admin dashboard with analytics</li>
                <li>Order tracking and management</li>
            </ul>
            
            <h6>Technical Implementation</h6>
            <p>Frontend built with React and modern CSS, backend powered by Node.js and Express, with MongoDB for data persistence. Implements JWT authentication and follows REST API best practices.</p>
            
            <h6>Impact</h6>
            <p>Increased client's online sales by 150% within the first quarter. Improved user engagement with 40% reduction in cart abandonment rate.</p>
        `,
        'mental-health-app': `
            <h6>Project Overview</h6>
            <p>A comprehensive mental health tracking and support application designed to help users monitor their emotional well-being and connect with mental health resources.</p>
            
            <h6>Key Features</h6>
            <ul>
                <li>Daily mood tracking with visual analytics</li>
                <li>Guided meditation and breathing exercises</li>
                <li>Appointment booking with healthcare providers</li>
                <li>Crisis support and emergency contacts</li>
                <li>Progress tracking and insights</li>
                <li>Secure data encryption and privacy protection</li>
            </ul>
            
            <h6>Technical Implementation</h6>
            <p>Cross-platform mobile app built with React Native, Firebase for real-time data synchronization, and Node.js backend with MongoDB. Implements end-to-end encryption for sensitive health data.</p>
            
            <h6>Impact</h6>
            <p>Currently in beta testing with 500+ users. Preliminary results show 60% improvement in user-reported mental health awareness and 80% user retention rate.</p>
        `
    };
    
    return projectDetails[projectId] || null;
}

// Get blog post content
function getBlogContent(title) {
    const blogContents = {
        'The Future of Web Development': `
            <p>The web development landscape is evolving at an unprecedented pace, with new technologies and frameworks emerging regularly. As we look toward the future, several key trends are shaping how we build and interact with web applications.</p>
            
            <h6>WebAssembly Revolution</h6>
            <p>WebAssembly (WASM) is transforming web performance by allowing near-native speed execution in browsers. This technology enables complex applications like video editors, games, and scientific simulations to run efficiently in web browsers.</p>
            
            <h6>Progressive Web Apps (PWAs)</h6>
            <p>PWAs continue to bridge the gap between web and native applications, offering offline functionality, push notifications, and app-like experiences while maintaining the accessibility of web technologies.</p>
            
            <h6>AI-Powered Development</h6>
            <p>Artificial intelligence is revolutionizing how we write code, with tools like GitHub Copilot and ChatGPT assisting developers in writing more efficient and bug-free code. AI-powered testing and optimization are becoming standard practices.</p>
            
            <h6>Edge Computing</h6>
            <p>The shift toward edge computing is reducing latency and improving user experiences by processing data closer to users. This trend is particularly important for real-time applications and IoT devices.</p>
            
            <h6>Conclusion</h6>
            <p>The future of web development is bright, with technologies that promise faster, more efficient, and more accessible web experiences. Staying current with these trends is essential for any web developer looking to remain competitive in this rapidly evolving field.</p>
        `,
        'Building Scalable APIs': `
            <p>Creating scalable APIs is crucial for modern web applications that need to handle growing user bases and increasing data loads. This comprehensive guide covers best practices for designing and implementing APIs that can scale effectively.</p>
            
            <h6>RESTful Design Principles</h6>
            <p>Following REST principles ensures your API is intuitive and maintainable. Use proper HTTP methods, status codes, and resource naming conventions to create APIs that developers love to use.</p>
            
            <h6>Caching Strategies</h6>
            <p>Implement multiple layers of caching including browser caching, CDN caching, and server-side caching with Redis or Memcached. Proper caching can reduce server load by up to 90%.</p>
            
            <h6>Database Optimization</h6>
            <p>Optimize database queries with proper indexing, query optimization, and consider using read replicas for read-heavy workloads. Database performance is often the bottleneck in API scalability.</p>
            
            <h6>Microservices Architecture</h6>
            <p>Break down monolithic APIs into smaller, focused microservices that can be scaled independently. This approach improves maintainability and allows teams to work on different services simultaneously.</p>
            
            <h6>Monitoring and Analytics</h6>
            <p>Implement comprehensive monitoring with tools like Prometheus, Grafana, and ELK stack to track API performance, identify bottlenecks, and ensure optimal user experience.</p>
            
            <h6>Security Considerations</h6>
            <p>Secure your APIs with proper authentication, authorization, rate limiting, and input validation. Security should be built into the API design from the beginning, not added as an afterthought.</p>
        `,
        'Modern CSS Techniques': `
            <p>CSS has evolved significantly in recent years, introducing powerful new features that enable developers to create stunning, responsive designs with less code and better performance.</p>
            
            <h6>CSS Grid Layout</h6>
            <p>CSS Grid revolutionizes layout design by providing a two-dimensional grid system that makes complex layouts simple and intuitive. Grid is perfect for creating responsive designs that adapt to different screen sizes.</p>
            
            <h6>Flexbox Mastery</h6>
            <p>Flexbox excels at one-dimensional layouts and is perfect for component-level design. Understanding when to use Grid vs. Flexbox is key to efficient CSS architecture.</p>
            
            <h6>Custom Properties (CSS Variables)</h6>
            <p>CSS custom properties enable dynamic theming, easier maintenance, and more flexible designs. They're particularly powerful when combined with JavaScript for interactive themes.</p>
            
            <h6>Container Queries</h6>
            <p>Container queries allow components to respond to their container's size rather than the viewport size, enabling truly modular and reusable components.</p>
            
            <h6>Advanced Animations</h6>
            <p>Modern CSS animations using @keyframes, transforms, and the Web Animations API create smooth, performant animations that enhance user experience without compromising performance.</p>
            
            <h6>CSS-in-JS and Styled Components</h6>
            <p>Explore modern approaches to styling with CSS-in-JS libraries that provide component-scoped styles, dynamic styling, and better developer experience in component-based frameworks.</p>
            
            <h6>Performance Optimization</h6>
            <p>Learn techniques for optimizing CSS performance including critical CSS, CSS containment, and efficient selector strategies that keep your websites fast and responsive.</p>
        `
    };
    
    return blogContents[title] || '<p>Blog content coming soon...</p>';
}

// Character and word counter functionality
function initializeDeveloperToolsEnhanced() {
    const textInput = document.getElementById('textInput');
    const wordCount = document.getElementById('wordCount');
    const charCount = document.getElementById('charCount');
    
    if (textInput && wordCount && charCount) {
        textInput.addEventListener('input', function() {
            const text = this.value;
            const words = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
            const characters = text.length;
            
            wordCount.textContent = words;
            charCount.textContent = characters;
        });
    }
    
    // UUID Generator functionality
    const generateUuidBtn = document.getElementById('generateUuid');
    const uuidOutput = document.getElementById('uuidOutput');
    const copyUuidBtn = document.getElementById('copyUuid');
    
    if (generateUuidBtn && uuidOutput) {
        generateUuidBtn.addEventListener('click', function() {
            const uuid = generateUUID();
            uuidOutput.value = uuid;
        });
    }
    
    if (copyUuidBtn && uuidOutput) {
        copyUuidBtn.addEventListener('click', function() {
            uuidOutput.select();
            document.execCommand('copy');
            
            // Visual feedback
            const originalText = this.textContent;
            this.textContent = 'Copied!';
            setTimeout(() => {
                this.textContent = originalText;
            }, 2000);
        });
    }
}

// Generate UUID function
function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

// Initialize modal functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeProjectModals();
    initializeDeveloperToolsEnhanced();
});

