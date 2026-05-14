// ScrollReveal Animations
ScrollReveal().reveal('.hero-content', {
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: false
});

ScrollReveal().reveal('.hero-image', {
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: false
});

ScrollReveal().reveal('.pain-item', {
    interval: 200,
    origin: 'bottom',
    distance: '50px',
    duration: 1000
});

ScrollReveal().reveal('.module-card', {
    interval: 200,
    origin: 'bottom',
    distance: '50px',
    duration: 1000
});

ScrollReveal().reveal('.section-title', {
    origin: 'top',
    distance: '30px',
    duration: 1000
});

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        
        // Close other items
        document.querySelectorAll('.faq-item').forEach(item => {
            if (item !== faqItem) item.classList.remove('active');
        });

        faqItem.classList.toggle('active');
    });
});

// Payment Method Toggle
document.querySelectorAll('.payment-method').forEach(method => {
    method.addEventListener('click', () => {
        document.querySelectorAll('.payment-method').forEach(m => m.classList.remove('active'));
        method.classList.add('active');
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = '#ffffff';
        navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
    } else {
        navbar.style.background = 'rgba(251, 249, 248, 0.8)';
        navbar.style.boxShadow = 'none';
    }
});
