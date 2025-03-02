// JavaScript for contact buttons
function contactCall() {
    window.location.href = 'tel:+919834462031';
}

function contactWhatsApp() {
    window.location.href = 'https://wa.me/919834462031';
}

// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle Marketing Subtypes
document.querySelectorAll(".learn-more").forEach(button => {
    button.addEventListener("click", function() {
        let subtypes = this.nextElementSibling;
        if (subtypes.style.display === "block") {
            subtypes.style.display = "none";
        } else {
            subtypes.style.display = "block";
        }
    });
});


//target-audience

//order-process

document.addEventListener("DOMContentLoaded", function() {
    function createSlider(selector) {
        let slider = document.querySelector(selector);
        let cards = Array.from(slider.children);
        let interval;
        
        function slide() {
            let firstCard = cards.shift();
            slider.appendChild(firstCard); // Move the first card to the end
            cards.push(firstCard);
            slider.style.transition = "none";
            slider.style.transform = "translateX(0)";
        }
        
        function start() {
            interval = setInterval(slide, 800);
        }
        
        function stop() {
            clearInterval(interval);
        }
        
        slider.addEventListener("mouseenter", stop);
        slider.addEventListener("mouseleave", start);
        
        start();
    }
    
    createSlider(".audience-slider");
    createSlider(".order-process-slider");
});







// Animation on scroll
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.product, .hero, .about, .contact').forEach(section => {
    observer.observe(section);
});

// Smart slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slider img');

function changeSlide() {
    slides.forEach((slide, index) => {
        slide.style.opacity = index === currentSlide ? '1' : '0';
    });
    currentSlide = (currentSlide + 1) % slides.length;
}

setInterval(changeSlide, 3000);
