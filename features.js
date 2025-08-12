// Additional Creative Features for Portfolio Website
// These features are added without modifying existing HTML/CSS structure

// 1. Advanced Keyboard Shortcuts System
class KeyboardShortcuts {
    constructor() {
        this.shortcuts = new Map();
        this.init();
    }
    
    init() {
        // Register shortcuts
        this.register('ctrl+k', () => this.showCommandPalette());
        this.register('ctrl+/', () => this.showShortcutsHelp());
        this.register('ctrl+1', () => this.navigateToSection('hero'));
        this.register('ctrl+2', () => this.navigateToSection('about'));
        this.register('ctrl+3', () => this.navigateToSection('skills'));
        this.register('ctrl+4', () => this.navigateToSection('projects'));
        this.register('ctrl+5', () => this.navigateToSection('contact'));
        this.register('escape', () => this.closeModals());
        
        document.addEventListener('keydown', (e) => this.handleKeydown(e));
    }
    
    register(shortcut, callback) {
        this.shortcuts.set(shortcut, callback);
    }
    
    handleKeydown(e) {
        const key = this.getKeyString(e);
        if (this.shortcuts.has(key)) {
            e.preventDefault();
            this.shortcuts.get(key)();
        }
    }
    
    getKeyString(e) {
        let key = '';
        if (e.ctrlKey || e.metaKey) key += 'ctrl+';
        if (e.shiftKey) key += 'shift+';
        if (e.altKey) key += 'alt+';
        key += e.key.toLowerCase();
        return key;
    }
    
    navigateToSection(sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
    
    closeModals() {
        const modals = document.querySelectorAll('.modal.show');
        modals.forEach(modal => {
            const bsModal = bootstrap.Modal.getInstance(modal);
            if (bsModal) bsModal.hide();
        });
    }
    
    showCommandPalette() {
        this.createCommandPalette();
    }
    
    showShortcutsHelp() {
        this.createShortcutsModal();
    }
    
    createCommandPalette() {
        if (document.getElementById('commandPalette')) return;
        
        const palette = document.createElement('div');
        palette.id = 'commandPalette';
        palette.className = 'command-palette';
        palette.innerHTML = `
            <div class="command-palette-content glass-card">
                <input type="text" placeholder="Type a command..." class="command-input">
                <div class="command-results"></div>
            </div>
        `;
        
        const style = document.createElement('style');
        style.textContent = `
            .command-palette {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.8);
                display: flex;
                align-items: flex-start;
                justify-content: center;
                padding-top: 10vh;
                z-index: 9999;
            }
            .command-palette-content {
                width: 90%;
                max-width: 600px;
                padding: 20px;
                border-radius: 12px;
            }
            .command-input {
                width: 100%;
                padding: 15px;
                border: none;
                border-radius: 8px;
                background: rgba(255, 255, 255, 0.1);
                color: white;
                font-size: 16px;
                outline: none;
            }
            .command-results {
                margin-top: 10px;
                max-height: 300px;
                overflow-y: auto;
            }
            .command-item {
                padding: 10px;
                border-radius: 6px;
                cursor: pointer;
                margin: 5px 0;
                background: rgba(255, 255, 255, 0.05);
            }
            .command-item:hover {
                background: rgba(255, 255, 255, 0.1);
            }
        `;
        document.head.appendChild(style);
        
        document.body.appendChild(palette);
        
        const input = palette.querySelector('.command-input');
        const results = palette.querySelector('.command-results');
        
        const commands = [
            { name: 'Go to Home', action: () => this.navigateToSection('hero') },
            { name: 'Go to About', action: () => this.navigateToSection('about') },
            { name: 'Go to Skills', action: () => this.navigateToSection('skills') },
            { name: 'Go to Projects', action: () => this.navigateToSection('projects') },
            { name: 'Go to Contact', action: () => this.navigateToSection('contact') },
            { name: 'Toggle Dark Mode', action: () => document.getElementById('darkModeToggle').click() },
            { name: 'Generate UUID', action: () => document.getElementById('generateUuid')?.click() }
        ];
        
        input.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            const filtered = commands.filter(cmd => 
                cmd.name.toLowerCase().includes(query)
            );
            
            results.innerHTML = filtered.map(cmd => 
                `<div class="command-item" data-command="${cmd.name}">${cmd.name}</div>`
            ).join('');
        });
        
        results.addEventListener('click', (e) => {
            if (e.target.classList.contains('command-item')) {
                const commandName = e.target.dataset.command;
                const command = commands.find(cmd => cmd.name === commandName);
                if (command) {
                    command.action();
                    palette.remove();
                }
            }
        });
        
        palette.addEventListener('click', (e) => {
            if (e.target === palette) {
                palette.remove();
            }
        });
        
        input.focus();
    }
    
    createShortcutsModal() {
        if (document.getElementById('shortcutsModal')) return;
        
        const modal = document.createElement('div');
        modal.id = 'shortcutsModal';
        modal.className = 'modal fade';
        modal.innerHTML = `
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content glass-card">
                    <div class="modal-header border-0">
                        <h5 class="modal-title">Keyboard Shortcuts</h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <div class="shortcuts-list">
                            <div class="shortcut-item">
                                <kbd>Ctrl + K</kbd>
                                <span>Open Command Palette</span>
                            </div>
                            <div class="shortcut-item">
                                <kbd>Ctrl + /</kbd>
                                <span>Show Shortcuts Help</span>
                            </div>
                            <div class="shortcut-item">
                                <kbd>Ctrl + 1-5</kbd>
                                <span>Navigate to Sections</span>
                            </div>
                            <div class="shortcut-item">
                                <kbd>Ctrl + D</kbd>
                                <span>Toggle Dark Mode</span>
                            </div>
                            <div class="shortcut-item">
                                <kbd>Escape</kbd>
                                <span>Close Modals</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        const style = document.createElement('style');
        style.textContent = `
            .shortcuts-list {
                display: flex;
                flex-direction: column;
                gap: 10px;
            }
            .shortcut-item {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 10px;
                background: rgba(255, 255, 255, 0.05);
                border-radius: 6px;
            }
            .shortcut-item kbd {
                background: rgba(255, 255, 255, 0.1);
                padding: 4px 8px;
                border-radius: 4px;
                font-family: monospace;
                font-size: 12px;
            }
        `;
        document.head.appendChild(style);
        
        document.body.appendChild(modal);
        new bootstrap.Modal(modal).show();
    }
}

// 2. Advanced Search Functionality
class SiteSearch {
    constructor() {
        this.searchData = this.buildSearchIndex();
        this.init();
    }
    
    init() {
        this.createSearchWidget();
    }
    
    buildSearchIndex() {
        const sections = document.querySelectorAll('section');
        const searchData = [];
        
        sections.forEach(section => {
            const title = section.querySelector('h2, h3, h4')?.textContent || '';
            const content = section.textContent || '';
            const id = section.id || '';
            
            if (title && content) {
                searchData.push({
                    title,
                    content: content.toLowerCase(),
                    id,
                    element: section
                });
            }
        });
        
        return searchData;
    }
    
    createSearchWidget() {
        const searchWidget = document.createElement('div');
        searchWidget.id = 'searchWidget';
        searchWidget.className = 'search-widget';
        searchWidget.innerHTML = `
            <button class="search-toggle glass-card" title="Search Site (Ctrl+F)">
                <i class="fas fa-search"></i>
            </button>
            <div class="search-panel glass-card" style="display: none;">
                <input type="text" placeholder="Search..." class="search-input">
                <div class="search-results"></div>
            </div>
        `;
        
        const style = document.createElement('style');
        style.textContent = `
            .search-widget {
                position: fixed;
                top: 50%;
                right: 20px;
                transform: translateY(-50%);
                z-index: 1000;
            }
            .search-toggle {
                width: 50px;
                height: 50px;
                border: none;
                border-radius: 50%;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                transition: all 0.3s ease;
            }
            .search-toggle:hover {
                transform: scale(1.1);
            }
            .search-panel {
                position: absolute;
                right: 60px;
                top: 0;
                width: 300px;
                padding: 20px;
                border-radius: 12px;
                max-height: 400px;
                overflow-y: auto;
            }
            .search-input {
                width: 100%;
                padding: 10px;
                border: none;
                border-radius: 6px;
                background: rgba(255, 255, 255, 0.1);
                color: white;
                outline: none;
            }
            .search-results {
                margin-top: 10px;
            }
            .search-result-item {
                padding: 10px;
                border-radius: 6px;
                cursor: pointer;
                margin: 5px 0;
                background: rgba(255, 255, 255, 0.05);
                border-left: 3px solid transparent;
            }
            .search-result-item:hover {
                background: rgba(255, 255, 255, 0.1);
                border-left-color: #667eea;
            }
            .search-result-title {
                font-weight: bold;
                margin-bottom: 5px;
            }
            .search-result-snippet {
                font-size: 12px;
                opacity: 0.8;
            }
        `;
        document.head.appendChild(style);
        
        document.body.appendChild(searchWidget);
        
        const toggle = searchWidget.querySelector('.search-toggle');
        const panel = searchWidget.querySelector('.search-panel');
        const input = searchWidget.querySelector('.search-input');
        const results = searchWidget.querySelector('.search-results');
        
        toggle.addEventListener('click', () => {
            const isVisible = panel.style.display !== 'none';
            panel.style.display = isVisible ? 'none' : 'block';
            if (!isVisible) input.focus();
        });
        
        input.addEventListener('input', (e) => {
            this.performSearch(e.target.value, results);
        });
        
        // Add keyboard shortcut
        document.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
                e.preventDefault();
                toggle.click();
            }
        });
    }
    
    performSearch(query, resultsContainer) {
        if (!query.trim()) {
            resultsContainer.innerHTML = '';
            return;
        }
        
        const results = this.searchData.filter(item => 
            item.content.includes(query.toLowerCase()) ||
            item.title.toLowerCase().includes(query.toLowerCase())
        );
        
        resultsContainer.innerHTML = results.map(result => {
            const snippet = this.getSnippet(result.content, query);
            return `
                <div class="search-result-item" data-section="${result.id}">
                    <div class="search-result-title">${result.title}</div>
                    <div class="search-result-snippet">${snippet}</div>
                </div>
            `;
        }).join('');
        
        resultsContainer.addEventListener('click', (e) => {
            const item = e.target.closest('.search-result-item');
            if (item) {
                const sectionId = item.dataset.section;
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                    document.querySelector('.search-panel').style.display = 'none';
                }
            }
        });
    }
    
    getSnippet(content, query) {
        const index = content.toLowerCase().indexOf(query.toLowerCase());
        if (index === -1) return content.substring(0, 100) + '...';
        
        const start = Math.max(0, index - 50);
        const end = Math.min(content.length, index + query.length + 50);
        return '...' + content.substring(start, end) + '...';
    }
}

// 3. Performance Monitor
class PerformanceMonitor {
    constructor() {
        this.metrics = {};
        this.init();
    }
    
    init() {
        this.measurePageLoad();
        this.createPerformanceWidget();
        this.startMonitoring();
    }
    
    measurePageLoad() {
        window.addEventListener('load', () => {
            const navigation = performance.getEntriesByType('navigation')[0];
            this.metrics.loadTime = navigation.loadEventEnd - navigation.loadEventStart;
            this.metrics.domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
            this.metrics.firstPaint = performance.getEntriesByType('paint')[0]?.startTime || 0;
        });
    }
    
    createPerformanceWidget() {
        const widget = document.createElement('div');
        widget.id = 'performanceWidget';
        widget.className = 'performance-widget';
        widget.innerHTML = `
            <button class="performance-toggle glass-card" title="Performance Metrics">
                <i class="fas fa-tachometer-alt"></i>
            </button>
            <div class="performance-panel glass-card" style="display: none;">
                <h6>Performance Metrics</h6>
                <div class="metric">
                    <span>Load Time:</span>
                    <span id="loadTime">-</span>
                </div>
                <div class="metric">
                    <span>DOM Ready:</span>
                    <span id="domTime">-</span>
                </div>
                <div class="metric">
                    <span>First Paint:</span>
                    <span id="paintTime">-</span>
                </div>
                <div class="metric">
                    <span>Memory Usage:</span>
                    <span id="memoryUsage">-</span>
                </div>
            </div>
        `;
        
        const style = document.createElement('style');
        style.textContent = `
            .performance-widget {
                position: fixed;
                bottom: 20px;
                left: 20px;
                z-index: 1000;
            }
            .performance-toggle {
                width: 50px;
                height: 50px;
                border: none;
                border-radius: 50%;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
            }
            .performance-panel {
                position: absolute;
                bottom: 60px;
                left: 0;
                width: 250px;
                padding: 15px;
                border-radius: 12px;
            }
            .performance-panel h6 {
                margin-bottom: 10px;
                color: #667eea;
            }
            .metric {
                display: flex;
                justify-content: space-between;
                margin: 5px 0;
                font-size: 12px;
            }
        `;
        document.head.appendChild(style);
        
        document.body.appendChild(widget);
        
        const toggle = widget.querySelector('.performance-toggle');
        const panel = widget.querySelector('.performance-panel');
        
        toggle.addEventListener('click', () => {
            const isVisible = panel.style.display !== 'none';
            panel.style.display = isVisible ? 'none' : 'block';
            if (!isVisible) this.updateMetrics();
        });
    }
    
    updateMetrics() {
        document.getElementById('loadTime').textContent = 
            this.metrics.loadTime ? `${this.metrics.loadTime.toFixed(2)}ms` : 'N/A';
        document.getElementById('domTime').textContent = 
            this.metrics.domContentLoaded ? `${this.metrics.domContentLoaded.toFixed(2)}ms` : 'N/A';
        document.getElementById('paintTime').textContent = 
            this.metrics.firstPaint ? `${this.metrics.firstPaint.toFixed(2)}ms` : 'N/A';
        
        if (performance.memory) {
            const memory = (performance.memory.usedJSHeapSize / 1024 / 1024).toFixed(2);
            document.getElementById('memoryUsage').textContent = `${memory}MB`;
        }
    }
    
    startMonitoring() {
        setInterval(() => {
            if (document.querySelector('.performance-panel').style.display !== 'none') {
                this.updateMetrics();
            }
        }, 1000);
    }
}

// 4. Easter Eggs and Fun Features
class EasterEggs {
    constructor() {
        this.konamiCode = [];
        this.konamiSequence = [
            'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
            'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
            'KeyB', 'KeyA'
        ];
        this.init();
    }
    
    init() {
        this.setupKonamiCode();
        this.setupClickCounter();
        this.setupSecretMessage();
    }
    
    setupKonamiCode() {
        document.addEventListener('keydown', (e) => {
            this.konamiCode.push(e.code);
            if (this.konamiCode.length > this.konamiSequence.length) {
                this.konamiCode.shift();
            }
            
            if (this.konamiCode.join(',') === this.konamiSequence.join(',')) {
                this.activateKonamiMode();
                this.konamiCode = [];
            }
        });
    }
    
    activateKonamiMode() {
        // Add rainbow animation to the entire page
        const style = document.createElement('style');
        style.textContent = `
            @keyframes rainbow {
                0% { filter: hue-rotate(0deg); }
                100% { filter: hue-rotate(360deg); }
            }
            .konami-mode {
                animation: rainbow 2s linear infinite;
            }
        `;
        document.head.appendChild(style);
        
        document.body.classList.add('konami-mode');
        
        // Show celebration message
        this.showCelebration('🎉 Konami Code Activated! 🎉');
        
        // Remove after 10 seconds
        setTimeout(() => {
            document.body.classList.remove('konami-mode');
        }, 10000);
    }
    
    setupClickCounter() {
        let clickCount = 0;
        const logo = document.querySelector('.profile-nav-img');
        
        if (logo) {
            logo.addEventListener('click', () => {
                clickCount++;
                if (clickCount === 10) {
                    this.showCelebration('🎯 You found the secret! 🎯');
                    clickCount = 0;
                }
            });
        }
    }
    
    setupSecretMessage() {
        // Add secret message in console
        console.log('%c🕵️ Looking for secrets? Try the Konami Code!', 
                   'color: #ff6b6b; font-size: 16px; font-weight: bold;');
        console.log('%c⬆️⬆️⬇️⬇️⬅️➡️⬅️➡️BA', 
                   'color: #4ecdc4; font-size: 14px;');
    }
    
    showCelebration(message) {
        const celebration = document.createElement('div');
        celebration.className = 'celebration-message';
        celebration.textContent = message;
        
        const style = document.createElement('style');
        style.textContent = `
            .celebration-message {
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                padding: 20px 40px;
                border-radius: 12px;
                font-size: 24px;
                font-weight: bold;
                z-index: 10000;
                animation: celebrationPulse 0.5s ease-in-out;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            }
            @keyframes celebrationPulse {
                0% { transform: translate(-50%, -50%) scale(0.5); opacity: 0; }
                50% { transform: translate(-50%, -50%) scale(1.1); }
                100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
        
        document.body.appendChild(celebration);
        
        setTimeout(() => {
            celebration.remove();
        }, 3000);
    }
}

// 5. Accessibility Enhancements
class AccessibilityEnhancements {
    constructor() {
        this.init();
    }
    
    init() {
        this.addSkipLinks();
        this.enhanceKeyboardNavigation();
        this.addFocusIndicators();
        this.createAccessibilityPanel();
    }
    
    addSkipLinks() {
        const skipLinks = document.createElement('div');
        skipLinks.className = 'skip-links';
        skipLinks.innerHTML = `
            <a href="#main-content" class="skip-link">Skip to main content</a>
            <a href="#navigation" class="skip-link">Skip to navigation</a>
        `;
        
        const style = document.createElement('style');
        style.textContent = `
            .skip-links {
                position: absolute;
                top: -100px;
                left: 0;
                z-index: 10000;
            }
            .skip-link {
                position: absolute;
                top: -100px;
                left: 10px;
                background: #000;
                color: #fff;
                padding: 10px;
                text-decoration: none;
                border-radius: 4px;
            }
            .skip-link:focus {
                top: 10px;
            }
        `;
        document.head.appendChild(style);
        
        document.body.insertBefore(skipLinks, document.body.firstChild);
    }
    
    enhanceKeyboardNavigation() {
        // Add tabindex to interactive elements
        const interactiveElements = document.querySelectorAll(
            '.project-card, .skill-category, .timeline-item'
        );
        
        interactiveElements.forEach((element, index) => {
            element.setAttribute('tabindex', '0');
            element.setAttribute('role', 'button');
        });
    }
    
    addFocusIndicators() {
        const style = document.createElement('style');
        style.textContent = `
            *:focus {
                outline: 2px solid #667eea !important;
                outline-offset: 2px !important;
            }
            .project-card:focus,
            .skill-category:focus,
            .timeline-item:focus {
                transform: translateY(-5px);
                box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
            }
        `;
        document.head.appendChild(style);
    }
    
    createAccessibilityPanel() {
        const panel = document.createElement('div');
        panel.id = 'accessibilityPanel';
        panel.className = 'accessibility-panel';
        panel.innerHTML = `
            <button class="accessibility-toggle glass-card" title="Accessibility Options">
                <i class="fas fa-universal-access"></i>
            </button>
            <div class="accessibility-options glass-card" style="display: none;">
                <h6>Accessibility Options</h6>
                <label>
                    <input type="range" id="fontSizeSlider" min="12" max="24" value="16">
                    Font Size
                </label>
                <label>
                    <input type="checkbox" id="highContrastToggle">
                    High Contrast
                </label>
                <label>
                    <input type="checkbox" id="reduceMotionToggle">
                    Reduce Motion
                </label>
            </div>
        `;
        
        const style = document.createElement('style');
        style.textContent = `
            .accessibility-panel {
                position: fixed;
                top: 20px;
                left: 20px;
                z-index: 1000;
            }
            .accessibility-toggle {
                width: 50px;
                height: 50px;
                border: none;
                border-radius: 50%;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
            }
            .accessibility-options {
                position: absolute;
                top: 60px;
                left: 0;
                width: 200px;
                padding: 15px;
                border-radius: 12px;
            }
            .accessibility-options h6 {
                margin-bottom: 10px;
                color: #667eea;
            }
            .accessibility-options label {
                display: block;
                margin: 10px 0;
                font-size: 12px;
            }
            .accessibility-options input {
                margin-right: 5px;
            }
            .high-contrast {
                filter: contrast(150%) brightness(120%);
            }
            .reduce-motion * {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
            }
        `;
        document.head.appendChild(style);
        
        document.body.appendChild(panel);
        
        this.setupAccessibilityControls(panel);
    }
    
    setupAccessibilityControls(panel) {
        const toggle = panel.querySelector('.accessibility-toggle');
        const options = panel.querySelector('.accessibility-options');
        const fontSizeSlider = panel.querySelector('#fontSizeSlider');
        const highContrastToggle = panel.querySelector('#highContrastToggle');
        const reduceMotionToggle = panel.querySelector('#reduceMotionToggle');
        
        toggle.addEventListener('click', () => {
            const isVisible = options.style.display !== 'none';
            options.style.display = isVisible ? 'none' : 'block';
        });
        
        fontSizeSlider.addEventListener('input', (e) => {
            document.documentElement.style.fontSize = e.target.value + 'px';
        });
        
        highContrastToggle.addEventListener('change', (e) => {
            document.body.classList.toggle('high-contrast', e.target.checked);
        });
        
        reduceMotionToggle.addEventListener('change', (e) => {
            document.body.classList.toggle('reduce-motion', e.target.checked);
        });
    }
}

// Initialize all features when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    new KeyboardShortcuts();
    new SiteSearch();
    new PerformanceMonitor();
    new EasterEggs();
    new AccessibilityEnhancements();
    
    console.log('🚀 All creative features initialized!');
});

