document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Open/Close Logic
    const hamburger = document.getElementById('hamburgerMenu');
    const navLinks = document.getElementById('navLinks');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('mobile-active');
            // Animate hamburger bars into an 'X'
            hamburger.classList.toggle('toggle-bars');
        });
    }

    // 2. Scroll-Driven Fade-In Effect Animation (Intersection Observer)
    const fadeSections = document.querySelectorAll('.animate-on-scroll');
    
    const scrollOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
                observer.unobserve(entry.target); // Stops tracking once animated
            }
        });
    }, scrollOptions);

    fadeSections.forEach(section => {
        scrollObserver.observe(section);
    });
});