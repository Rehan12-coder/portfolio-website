document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.right');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
        this.setAttribute('aria-expanded', this.classList.contains('active'));
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.right a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 90,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Back to Top Button
    const backToTopBtn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // Button functionality
    const downloadResumeBtn = document.getElementById('downloadResume');
    const visitGithubBtn = document.getElementById('visitGithub');
    
    if (downloadResumeBtn) {
        downloadResumeBtn.addEventListener('click', function() {
            // Replace 'resume.pdf' with your actual resume path
            const resumeUrl = 'resume.pdf';
            const link = document.createElement('a');
            link.href = resumeUrl;
            link.download = 'Rehan_Malik_Resume.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            // Track download event
            console.log('Resume downloaded');
        });
    }
    
    if (visitGithubBtn) {
        visitGithubBtn.addEventListener('click', function() {
            window.open('https://github.com/Rehan12-coder', '_blank');
            
            // Track GitHub visit event
            console.log('GitHub profile opened');
        });
    }

    // Animation on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.vertical');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Initialize elements with opacity 0
    document.querySelectorAll('.vertical').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease';
    });

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
});