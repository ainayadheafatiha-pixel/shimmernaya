const cards = document.querySelectorAll('.stack-card');
let currentIndex = 0;

function updateStack() {
    cards.forEach((card, index) => {
        card.classList.remove('active', 'prev', 'next');
        if (index === currentIndex) {
            card.classList.add('active');
        } else if (index === (currentIndex - 1 + cards.length) % cards.length) {
            card.classList.add('prev');
        } else {
            card.classList.add('next');
        }
    });
}

cards.forEach((card, index) => {
    card.addEventListener('click', () => {
        currentIndex = index;
        updateStack();
    });
});

// Run once to set initial positions
updateStack();

// Re-enable smooth scroll for nav links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});


// Background Slider Logic
const bgSlides = document.querySelectorAll('.bg-slide');
let currentBgIndex = 0;

function changeBackground() {
    // Remove active class from current
    bgSlides[currentBgIndex].classList.remove('active');
    
    // Move to next index
    currentBgIndex = (currentBgIndex + 1) % bgSlides.length;
    
    // Add active class to next
    bgSlides[currentBgIndex].classList.add('active');
}

// Change background every 5 seconds
setInterval(changeBackground, 5000);