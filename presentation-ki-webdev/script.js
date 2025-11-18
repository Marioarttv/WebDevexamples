// Slide Navigation Script
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const slideCounter = document.getElementById('slide-number');
const progressBar = document.getElementById('progress');

// Initialize
function init() {
    showSlide(currentSlide);
    updateCounter();
    updateProgress();
}

// Show specific slide
function showSlide(n) {
    // Remove active class from all slides
    slides.forEach(slide => {
        slide.classList.remove('active');
    });

    // Ensure slide number is within bounds
    if (n >= totalSlides) {
        currentSlide = totalSlides - 1;
    } else if (n < 0) {
        currentSlide = 0;
    } else {
        currentSlide = n;
    }

    // Add active class to current slide
    slides[currentSlide].classList.add('active');
    updateCounter();
    updateProgress();
}

// Next slide
function nextSlide() {
    if (currentSlide < totalSlides - 1) {
        showSlide(currentSlide + 1);
    }
}

// Previous slide
function prevSlide() {
    if (currentSlide > 0) {
        showSlide(currentSlide - 1);
    }
}

// Update slide counter
function updateCounter() {
    slideCounter.textContent = `${currentSlide + 1} / ${totalSlides}`;
}

// Update progress bar
function updateProgress() {
    const progress = ((currentSlide + 1) / totalSlides) * 100;
    progressBar.style.width = `${progress}%`;
}

// Event Listeners
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    switch(e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case ' ': // Spacebar
        case 'PageDown':
            e.preventDefault();
            nextSlide();
            break;
        case 'ArrowLeft':
        case 'ArrowUp':
        case 'PageUp':
            e.preventDefault();
            prevSlide();
            break;
        case 'Home':
            e.preventDefault();
            showSlide(0);
            break;
        case 'End':
            e.preventDefault();
            showSlide(totalSlides - 1);
            break;
        case 'Escape':
            // Toggle fullscreen
            toggleFullscreen();
            break;
    }
});

// Touch/Swipe support for mobile
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const swipeDistance = touchEndX - touchStartX;

    if (Math.abs(swipeDistance) > swipeThreshold) {
        if (swipeDistance > 0) {
            // Swipe right - previous slide
            prevSlide();
        } else {
            // Swipe left - next slide
            nextSlide();
        }
    }
}

// Fullscreen toggle
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            console.log(`Error attempting to enable fullscreen: ${err.message}`);
        });
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

// Mouse wheel navigation (optional)
let scrollTimeout;
document.addEventListener('wheel', (e) => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        if (e.deltaY > 0) {
            nextSlide();
        } else if (e.deltaY < 0) {
            prevSlide();
        }
    }, 100);
}, { passive: true });

// Prevent scrolling on slides
document.addEventListener('wheel', (e) => {
    const slideContent = e.target.closest('.slide-content');
    if (!slideContent) {
        e.preventDefault();
    }
}, { passive: false });

// URL hash navigation
function updateHash() {
    window.location.hash = currentSlide;
}

function checkHash() {
    const hash = parseInt(window.location.hash.substring(1));
    if (!isNaN(hash) && hash >= 0 && hash < totalSlides) {
        showSlide(hash);
    }
}

// Listen for hash changes
window.addEventListener('hashchange', checkHash);

// Check hash on load
window.addEventListener('load', () => {
    checkHash();
});

// Update hash when slide changes
slides.forEach((slide, index) => {
    slide.addEventListener('transitionend', () => {
        if (slide.classList.contains('active')) {
            updateHash();
        }
    });
});

// Print all slides
function printPresentation() {
    window.print();
}

// Add keyboard shortcut for printing
document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault();
        printPresentation();
    }
});

// Show help on ? key
document.addEventListener('keydown', (e) => {
    if (e.key === '?') {
        e.preventDefault();
        alert(`Tastaturkürzel:

← / ↑ / PageUp: Vorherige Folie
→ / ↓ / Leertaste / PageDown: Nächste Folie
Home: Erste Folie
End: Letzte Folie
Esc: Vollbild ein/aus
Strg+P: Drucken
?: Diese Hilfe anzeigen

Du kannst auch die Buttons unten oder Wischen auf Touch-Geräten nutzen!`);
    }
});

// Initialize presentation
init();

console.log('🎉 Präsentation geladen! Nutze die Pfeiltasten oder Buttons zur Navigation.');
console.log('Drücke "?" für Tastaturkürzel-Hilfe.');
