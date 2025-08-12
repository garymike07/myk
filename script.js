// Mobile menu toggle
document.querySelector('.mobile-menu-toggle').addEventListener('click', function() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('active');
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        // Close mobile menu after clicking
        document.querySelector('nav ul').classList.remove('active');
    });
});



// Fade in animations for hero section
window.addEventListener('load', function() {
    document.querySelectorAll('#hero .fade-in').forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('visible');
        }, index * 200);
    });
});



// Modal functionality
function openModal(projectId) {
    const modal = document.getElementById(projectId + '-modal');
    if (modal) {
        modal.style.display = 'block';
    }
}

// Close modal when clicking the X or outside the modal
document.querySelectorAll('.close').forEach(closeBtn => {
    closeBtn.addEventListener('click', function() {
        this.closest('.modal').style.display = 'none';
    });
});

window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
});

// Prevent modal from closing when clicking inside modal content
document.querySelectorAll('.modal-content').forEach(content => {
    content.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});

function updateTimeAndGreeting() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    let greeting;
    if (hours < 12) {
        greeting = 'Good morning!';
    } else if (hours < 18) {
        greeting = 'Good afternoon!';
    } else {
        greeting = 'Good evening!';
    }

    const timeDisplay = document.getElementById('time-display');
    if(timeDisplay) {
        timeDisplay.textContent = `${hours % 12 || 12}:${minutes}:${seconds} ${hours >= 12 ? 'PM' : 'AM'}`;
    }

    const greetingDisplay = document.getElementById('greeting-display')
    if(greetingDisplay) {
        greetingDisplay.textContent = greeting;
    }
}

setInterval(updateTimeAndGreeting, 1000);
updateTimeAndGreeting(); // Initial call to display immediately

