
        // Your existing JavaScript code for menu, scroll reveal, typed.js, etc.
        // Toggle menu icon and navbar
        let menuIcon = document.querySelector('#menu-icon');
        let navbar = document.querySelector('.navbar');

        menuIcon.onclick = () => {
            menuIcon.classList.toggle('bx-x');
            navbar.classList.toggle('active');
        };

        // Scroll sections active link
        let sections = document.querySelectorAll('section');
        let navLinks = document.querySelectorAll('header nav a');

        window.onscroll = () => {
            sections.forEach(sec => {
                let top = window.scrollY;
                let offset = sec.offsetTop - 150;
                let height = sec.offsetHeight;
                let id = sec.getAttribute('id');

                if (top >= offset && top < offset + height) {
                    navLinks.forEach(links => {
                        links.classList.remove('active');
                        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                    });
                }
            });

            // Sticky navbar
            let header = document.querySelector('header');
            header.classList.toggle('sticky', window.scrollY > 100);

            // Remove toggle icon and navbar when click navbar link (scroll)
            menuIcon.classList.remove('bx-x');
            navbar.classList.remove('active');
        };

        // Scroll reveal
        ScrollReveal({
            reset: true,
            distance: '80px',
            duration: 2000,
            delay: 200
        });

        ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
        ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
        ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
        ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
        ScrollReveal().reveal('.skills-container, .tools-section, .tech-skills-grid', { origin: 'bottom' });

        // Typed js
        const typed = new Typed('.multiple-text', {
            strings: ['Web Developer', 'Java Developer', 'Python Developer', 'ML Engineer'],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true
        });

        // Animate skill bars when in viewport
        function animateSkillBars() {
            const skillProgresses = document.querySelectorAll('.skill-progress');
            
            skillProgresses.forEach(progress => {
                const width = progress.getAttribute('data-width');
                progress.style.width = width;
            });
        }

        // Initialize skill bars animation
        window.addEventListener('load', animateSkillBars);
        document.addEventListener('DOMContentLoaded', animateSkillBars);
    