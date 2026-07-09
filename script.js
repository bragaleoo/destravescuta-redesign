// ScrollReveal Animations
ScrollReveal().reveal('.info-column', {
    origin: 'left',
    distance: '80px',
    duration: 1500,
    reset: false
});

ScrollReveal().reveal('.offer-column', {
    origin: 'right',
    distance: '80px',
    duration: 1500,
    reset: false
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 30) {
        navbar.style.background = '#ffffff';
        navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
    } else {
        navbar.style.background = 'rgba(251, 249, 248, 0.85)';
        navbar.style.boxShadow = 'none';
    }
});
