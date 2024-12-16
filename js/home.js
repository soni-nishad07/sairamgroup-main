document.addEventListener("DOMContentLoaded", function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    // Show the first slide initially
    slides[currentSlide].classList.add('active');

    setInterval(() => {
        slides[currentSlide].classList.remove('active'); // Hide current slide
        currentSlide = (currentSlide + 1) % totalSlides; // Move to the next slide
        slides[currentSlide].classList.add('active'); // Show next slide
    }, 3000); // Change image every 3 seconds
});
