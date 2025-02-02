// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS
    AOS.init({
        duration: 800,
        once: true,
        easing: 'ease-in-out-quad'
    });

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form Validation
    const form = document.querySelector('.contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your form submission logic here
        alert('Message sent successfully!');
        form.reset();
    });

    // Dynamic Year
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // Scroll Animation
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        document.documentElement.style.setProperty('--scroll', scrollPosition + 'px');
    });
});