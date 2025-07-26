// Portfolio Website JavaScript
class PortfolioApp {
    constructor() {
        this.data = {};
        this.init();
    }

    async init() {
        await this.loadData();
        this.render();
        this.setupEventListeners();
        this.setupIntersectionObserver();
    }

    async loadData() {
        try {
            const response = await fetch("assets/data.json");
            this.data = await response.json();
        } catch (error) {
            console.error('Error loading data:', error);
            this.data = this.getDefaultData();
        }
    }

    getDefaultData() {
        return {
            about: {
                name: "ICT Professional",
                title: "System Developer & IT Support Specialist",
                description: "ICT professional with expertise in system development, app development, database management, IT infrastructure support, and user training. I have a problem-solving mindset, collaborative spirit, and passion for using ICT to improve public service delivery, drive organizational efficiency, and empower users with smart, sustainable tech solutions.",
                profilePicture: "assets/profile.webp"
            },
            skills: {
                technical: ["App Development", "Database Management", "IT Infrastructure Support", "Technical Troubleshooting", "System Development"],
                soft: ["Communication", "Teamwork", "Problem-solving", "Time Management", "Self-discipline"],
                languages: ["English", "Kiswahili"]
            },
            experience: [
                {
                    role: "Freelance Graphic Designer",
                    date: "Feb 2021 - Present",
                    description: "Worked with various clients to create engaging and effective visual content. Developed strong technical skills in graphic design software and design principles, as well as soft skills such as communication, collaboration, and project management."
                },
                {
                    role: "Academic Writer",
                    date: "Apr 2021 - Dec 2021",
                    description: "Completed academic writing assignments, including proper formatting, referencing, and research for various assignments from job suppliers."
                },
                {
                    role: "Tutor (Peer Teacher)",
                    date: "Jan 2021 - Mar 2021",
                    description: "Coached high school students while pursuing a university degree, providing academic support and guidance."
                }
            ],
            projects: [
                {
                    title: "Sample Project 1",
                    thumbnail: "assets/projects/project1-placeholder.jpg",
                    description: "A sample project showcasing system development skills."
                },
                {
                    title: "Sample Project 2",
                    thumbnail: "assets/projects/project2-placeholder.jpg",
                    description: "A sample project demonstrating app development capabilities."
                },
                {
                    title: "Sample Project 3",
                    thumbnail: "assets/projects/project3-placeholder.jpg",
                    description: "A sample project highlighting database management expertise."
                }
            ],
            competencyVideo: {
                url: "assets/videos/competency-placeholder.mp4"
            },
            socialLinks: [
                { platform: "LinkedIn", url: "https://linkedin.com/in/username", icon: "linkedin" },
                { platform: "GitHub", url: "https://github.com/username", icon: "github" },
                { platform: "Twitter", url: "https://twitter.com/username", icon: "twitter" },
                { platform: "WhatsApp", url: "https://wa.me/1234567890", icon: "whatsapp" }
            ],
            resume: {
                thumbnail: "assets/resumes/resume-thumb-placeholder.jpg",
                pdf: "assets/resumes/resume-placeholder.pdf"
            },
            blogs: [
                {
                    title: "Sample Blog Post 1",
                    thumbnail: "assets/blogs/blog1-placeholder.jpg",
                    excerpt: "A brief overview of the latest trends in ICT and system development."
                },
                {
                    title: "Sample Blog Post 2",
                    thumbnail: "assets/blogs/blog2-placeholder.jpg",
                    excerpt: "Exploring the future of digital transformation in public service delivery."
                }
            ]
        };
    }

    render() {
        const root = document.getElementById('root');
        root.innerHTML = `
            ${this.renderNavbar()}
            ${this.renderHero()}

            ${this.renderAbout()}
            ${this.renderSkills()}
            ${this.renderExperience()}
            ${this.renderProjects()}
            ${this.renderBlogs()}
            ${this.renderComments()}
            ${this.renderFooter()}
        `;
    }

    renderNavbar() {
        return `
            <nav class="navbar fixed top-0 left-0 right-0 z-50 py-4">
                <div class="container mx-auto px-6 flex justify-between items-center">
                    <div class="text-2xl font-bold text-gradient"><img src="assets/logo.jpg" alt="Logo" class="inline-block h-8 w-8 mr-2 rounded-full">Mike portfolio site</div>
                    <div class="hidden md:flex space-x-8">
                        <a href="#about" class="hover:text-[var(--primary-color)] transition-colors">About</a>
                        <a href="#skills" class="hover:text-[var(--primary-color)] transition-colors">Skills</a>
                        <a href="#experience" class="hover:text-[var(--primary-color)] transition-colors">Experience</a>
                        <a href="#projects" class="hover:text-[var(--primary-color)] transition-colors">Projects</a>
                        <a href="#contact" class="hover:text-[var(--primary-color)] transition-colors">Contact</a>
                    </div>

                </div>
            </nav>
        `;
    }

    renderHero() {
        return `
            <section class="hero-bg min-h-screen flex items-center justify-center pt-20">
                <div class="container mx-auto px-6 text-center">
                    <div class="animate-fadeInUp">
                        <img src="assets/profile_picture.jpg" alt="Profile Picture" 
                             class="profile-picture w-32 h-32 rounded-full mx-auto mb-8 object-cover">
                        <div class="time-greeting-container mb-6">
                            <div id="current-time" class="text-2xl font-bold text-[#00b7eb] mb-2"></div>
                            <div id="greeting" class="text-xl text-gray-300"></div>
                        </div>
                        <h1 class="text-5xl md:text-6xl font-bold mb-4">
                            <span class="gradient-text-animated">${this.data.about.name}</span>
                        </h1>
                        <h2 class="text-2xl md:text-3xl mb-6 text-[var(--text-secondary)] glow-text">
                            ${this.data.about.title}
                        </h2>
                        <p class="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
                            Transforming Challenges into Tech Solutions
                        </p>
                        <div class="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="#projects" class="btn-primary">View My Work</a>
                            <a href="#contact" class="btn-secondary">Get In Touch</a>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    renderAbout() {
        return `
            <section id="about" class="py-20">
                <div class="container mx-auto px-6">
                    <div class="text-center mb-16">
                        <h2 class="text-4xl font-bold mb-4 text-gradient">About Me</h2>
                        <div class="w-20 h-1 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] mx-auto"></div>
                    </div>
                    <div class="max-w-4xl mx-auto">
                        <div class="card animate-fadeInUp">
                            <p class="text-lg leading-relaxed mb-8">
                                ${this.data.about.description}
                            </p>
                            <div class="flex flex-wrap gap-4 justify-center">
                                ${this.data.socialLinks.map(link => `
                                    <a href="${link.url}" target="_blank" class="social-link">
                                        ${this.getSocialIcon(link.icon)}
                                    </a>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    renderSkills() {
        return `
            <section id="skills" class="py-20 bg-[var(--card-bg)]">
                <div class="container mx-auto px-6">
                    <div class="text-center mb-16">
                        <h2 class="text-4xl font-bold mb-4 text-gradient">Skills & Expertise</h2>
                        <div class="w-20 h-1 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] mx-auto"></div>
                    </div>
                    <div class="grid md:grid-cols-3 gap-8">
                        <div class="animate-fadeInUp">
                            <h3 class="text-2xl font-semibold mb-6 text-[var(--primary-color)]">Technical Skills</h3>
                            <div class="flex flex-wrap gap-2">
                                ${this.data.skills.technical.map(skill => `
                                    <span class="skill-tag">${skill}</span>
                                `).join('')}
                            </div>
                        </div>
                        <div class="animate-fadeInUp" style="animation-delay: 0.2s">
                            <h3 class="text-2xl font-semibold mb-6 text-[var(--primary-color)]">Soft Skills</h3>
                            <div class="flex flex-wrap gap-2">
                                ${this.data.skills.soft.map(skill => `
                                    <span class="skill-tag">${skill}</span>
                                `).join('')}
                            </div>
                        </div>
                        <div class="animate-fadeInUp" style="animation-delay: 0.4s">
                            <h3 class="text-2xl font-semibold mb-6 text-[var(--primary-color)]">Languages</h3>
                            <div class="flex flex-wrap gap-2">
                                ${this.data.skills.languages.map(lang => `
                                    <span class="skill-tag">${lang}</span>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    renderExperience() {
        return `
            <section id="experience" class="py-20">
                <div class="container mx-auto px-6">
                    <div class="text-center mb-16">
                        <h2 class="text-4xl font-bold mb-4 text-gradient">Experience</h2>
                        <div class="w-20 h-1 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] mx-auto"></div>
                    </div>
                    <div class="max-w-4xl mx-auto">
                        ${this.data.experience.map((exp, index) => `
                            <div class="timeline-item animate-fadeInUp" style="animation-delay: ${index * 0.2}s">
                                <div class="card">
                                    <h3 class="text-xl font-semibold mb-2 text-[var(--primary-color)]">${exp.role}</h3>
                                    <p class="text-[var(--text-secondary)] mb-4">${exp.date}</p>
                                    <p class="leading-relaxed">${exp.description}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>
        `;
    }

    renderProjects() {
        return `
            <section id="projects" class="py-20 bg-[var(--card-bg)]">
                <div class="container mx-auto px-6">
                    <div class="text-center mb-16">
                        <h2 class="text-4xl font-bold mb-4 text-gradient">Projects</h2>
                        <div class="w-20 h-1 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] mx-auto"></div>
                    </div>
                    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        ${this.data.projects.map((project, index) => `
                            <a href="${project.url}" target="_blank" class="block">
                                <div class="project-card animate-fadeInUp" style="animation-delay: ${index * 0.2}s">
                                    <img src="${project.thumbnail}" alt="${project.title}" 
                                         onerror="this.src=\'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMmEyYTJhIi8+Cjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmaWxsPSIjMDBiN2ViIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0Ij5Qcm9qZWN0IEltYWdlPC90ZXh0Pgo8L2Nzdmc+CjwnLz4n\'">
                                    <div class="p-6">
                                        <h3 class="text-xl font-semibold mb-3 text-[var(--primary-color)]">${project.title}</h3>
                                        <p class="text-[var(--text-secondary)] leading-relaxed">${project.description}</p>
                                    </div>
                                </div>
                            </a>
                        `).join('')}
                    </div>
                </div>
            </section>
        `;
    }

    renderBlogs() {
        return `
            <section id="blogs" class="py-20">
                <div class="container mx-auto px-6">
                    <div class="text-center mb-16">
                        <h2 class="text-4xl font-bold mb-4 text-gradient">Blog Posts</h2>
                        <div class="w-20 h-1 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] mx-auto"></div>
                    </div>
                    <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        ${this.data.blogs.map((blog, index) => `
                            <div class="card animate-fadeInUp" style="animation-delay: ${index * 0.2}s">
                                <img src="${blog.thumbnail}" alt="${blog.title}" 
                                     class="w-full h-48 object-cover rounded-lg mb-4"
                                     onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMmEyYTJhIi8+Cjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmaWxsPSIjMDBiN2ViIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0Ij5CbG9nIEltYWdlPC90ZXh0Pgo8L3N2Zz4K'">
                                <h3 class="text-xl font-semibold mb-3 text-[var(--primary-color)]">${blog.title}</h3>
                                <p class="text-[var(--text-secondary)] leading-relaxed">${blog.excerpt}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>
        `;
    }

    renderComments() {
        return `
            <section id="contact" class="py-20 bg-[var(--card-bg)]">
                <div class="container mx-auto px-6">
                    <div class="text-center mb-16">
                        <h2 class="text-4xl font-bold mb-4 text-gradient">Get In Touch</h2>
                        <div class="w-20 h-1 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] mx-auto"></div>
                    </div>
                    <div class="max-w-2xl mx-auto">
                        <div class="card animate-fadeInUp">
                            <form action="https://formcarry.com/s/YOUR_FORM_ID" method="POST" class="space-y-6">
                                <div class="form-group">
                                    <label class="form-label">Name</label>
                                    <input type="text" name="name" class="form-input" required>
                                </div>
                                <div class="form-group">
                                    <label class="form-label">Email</label>
                                    <input type="email" name="email" class="form-input" required>
                                </div>
                                <div class="form-group">
                                    <label class="form-label">Message</label>
                                    <textarea name="message" class="form-input form-textarea" required></textarea>
                                </div>
                                <button type="submit" class="btn-primary w-full">Send Message</button>
                            </form>
                        </div>
                        <div id="comments-section" class="mt-12">
                            <h3 class="text-2xl font-semibold mb-6 text-[var(--primary-color)]">Visitor Comments</h3>
                            <div id="comments-list">
                                <!-- Comments will be loaded here -->
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    renderFooter() {
        return `
            <footer class="py-12 border-t border-[var(--primary-color)] border-opacity-20">
                <div class="container mx-auto px-6">
                    <div class="text-center">
                        <div class="flex justify-center space-x-6 mb-8">
                            ${this.data.socialLinks.map(link => `
                                <a href="${link.url}" target="_blank" class="social-link">
                                    ${this.getSocialIcon(link.icon)}
                                </a>
                            `).join('')}
                        </div>
                        <p class="text-[var(--text-secondary)]">
                            © 2024 ${this.data.about.name}. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        `;
    }

    getSocialIcon(iconName) {
        const icons = {
            linkedin: '<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
            github: '<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>',
            twitter: '<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>',
            instagram: '<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>'
        };
        return icons[iconName] || '';
    }

    renderDashboard() {
        return `
            <div id="dashboard-overlay" class="fixed inset-0 bg-black bg-opacity-50 z-50 hidden">
                <div class="dashboard fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 max-w-4xl p-6">
                    <div class="flex justify-between items-center mb-6">
                        <h2 class="text-2xl font-bold text-gradient">Content Dashboard</h2>
                        <button id="dashboard-close" class="text-2xl hover:text-[var(--primary-color)]">&times;</button>
                    </div>
                    
                    <div class="flex flex-wrap gap-2 mb-6 border-b border-[var(--primary-color)] border-opacity-20">
                        <button class="dashboard-tab active" data-tab="about">About</button>
                        <button class="dashboard-tab" data-tab="skills">Skills</button>
                        <button class="dashboard-tab" data-tab="experience">Experience</button>
                        <button class="dashboard-tab" data-tab="projects">Projects</button>
                        <button class="dashboard-tab" data-tab="blogs">Blogs</button>
                        <button class="dashboard-tab" data-tab="social">Social</button>
                    </div>
                    
                    <div id="dashboard-content" class="max-h-96 overflow-y-auto">
                        <!-- Dashboard content will be loaded here -->
                    </div>
                    
                    <div class="flex justify-end gap-4 mt-6">
                        <button id="save-changes" class="btn-primary">Save Changes</button>
                        <button id="dashboard-close-btn" class="btn-secondary">Close</button>
                    </div>
                </div>
            </div>
        `;
    }

    setupEventListeners() {
        // Smooth scrolling for navigation links
        document.addEventListener('click', (e) => {
            if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = e.target.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });

        // Update time and greeting
        this.updateTimeAndGreeting();
        setInterval(() => this.updateTimeAndGreeting(), 1000);
    }

    updateTimeAndGreeting() {
        const now = new Date();
        const timeString = now.toLocaleTimeString();
        const hour = now.getHours();
        
        let greeting;
        if (hour < 12) {
            greeting = "Good morning! Welcome to my portfolio";
        } else if (hour < 17) {
            greeting = "Good afternoon! Welcome to my portfolio";
        } else {
            greeting = "Good evening! Welcome to my portfolio";
        }
        
        const timeElement = document.getElementById('current-time');
        const greetingElement = document.getElementById('greeting');
        
        if (timeElement) timeElement.textContent = timeString;
        if (greetingElement) greetingElement.textContent = greeting;
    }

    setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fadeInUp');
                    
                    // Add staggered animations to cards within sections
                    const cards = entry.target.querySelectorAll('.card, .project-card, .blog-card');
                    cards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('enhanced-hover', 'scroll-reveal', 'revealed');
                        }, index * 100);
                    });
                    
                    // Add special animations to specific elements
                    const skillItems = entry.target.querySelectorAll('.skill-item');
                    skillItems.forEach((item, index) => {
                        setTimeout(() => {
                            item.style.animation = `slideInLeft 0.6s ease forwards`;
                            item.style.animationDelay = `${index * 0.1}s`;
                        }, 200);
                    });
                }
            });
        }, observerOptions);

        // Observe all sections
        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });

        // Add scroll-based parallax effect
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.parallax');
            
            parallaxElements.forEach(element => {
                const speed = element.dataset.speed || 0.5;
                element.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });

        // Add enhanced hover effects to navigation
        const navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(link => {
            link.addEventListener('mouseenter', () => {
                link.style.transform = 'translateY(-2px)';
            });
            
            link.addEventListener('mouseleave', () => {
                link.style.transform = 'translateY(0)';
            });
        });

        // Add typewriter effect to hero title
        setTimeout(() => {
            const heroTitle = document.querySelector('.hero-bg h1');
            if (heroTitle) {
                heroTitle.classList.add('typewriter');
            }
        }, 1000);

        // Add floating animation to profile picture
        const profilePic = document.querySelector('.profile-picture');
        if (profilePic) {
            profilePic.classList.add('enhanced-hover');
        }

        // Add shimmer effect to buttons
        const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
        buttons.forEach(btn => {
            btn.classList.add('btn-enhanced', 'btn-shimmer');
        });
    }

    getSocialIcon(iconName) {
        const icons = {
            linkedin: '<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
            github: '<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>',
            twitter: '<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>',
            instagram: '<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>'
        };
        return icons[iconName] || '';
    }

    // Function to update time and greeting
    updateTimeAndGreeting() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        const timeString = `${hours}:${minutes}:${seconds}`;

        let greeting;
        if (hours < 12) {
            greeting = "Good Morning!";
        } else if (hours < 18) {
            greeting = "Good Afternoon!";
        } else {
            greeting = "Good Evening!";
        }

        const timeDisplayElement = document.getElementById('time-display');
        if (timeDisplayElement) {
            timeDisplayElement.textContent = timeString;
        }

        const greetingElement = document.getElementById('greeting');
        if (greetingElement) {
            greetingElement.textContent = greeting;
        }
    }

    startTimeUpdates() {
        // Call updateTimeAndGreeting initially and then every second
        this.updateTimeAndGreeting();
        setInterval(() => this.updateTimeAndGreeting(), 1000);
    }

}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const app = new PortfolioApp();
    // Start time updates after app initialization
    setTimeout(() => {
        app.startTimeUpdates();
    }, 1000);
});


