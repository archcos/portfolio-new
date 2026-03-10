/* ========================
   Modal Management Variables
   ======================== */

let currentSlideIndex = 0;
let slideImages = [];
let slideNames = [];

/* ========================
   Video Modal Management
   ======================== */

function openVideoModal(event, videoUrl, videoTitle) {
    event.preventDefault();
    
    const modal = document.getElementById("videoModal");
    const frame = document.getElementById("videoFrame");
    const title = document.getElementById("videoTitle");
    
    // Set the video source and title
    frame.src = videoUrl;
    title.textContent = videoTitle || "Project Demo";
    
    // Show modal
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeVideoModal() {
    const modal = document.getElementById("videoModal");
    const frame = document.getElementById("videoFrame");
    
    // Hide modal
    modal.classList.remove("active");
    
    // Clear video source to stop playback
    frame.src = "";
    document.body.style.overflow = "auto";
}

/* ========================
   Image Slideshow Management
   ======================== */

function openImageSlideshow(event, images, imageNames, projectTitle) {
    event.preventDefault();
    
    const modal = document.getElementById("slideshowModal");
    const titleEl = document.getElementById("slideshowTitle");
    
    // Store slideshow data
    slideImages = images;
    slideNames = imageNames;
    currentSlideIndex = 0;
    
    // Set title
    titleEl.textContent = projectTitle || "Project Gallery";
    
    // Initialize slideshow
    createDots();
    showSlide(0);
    
    // Show modal
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeSlideshowModal() {
    const modal = document.getElementById("slideshowModal");
    
    // Hide modal
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
    
    // Clear data
    slideImages = [];
    slideNames = [];
    currentSlideIndex = 0;
}

function showSlide(index) {
    if (slideImages.length === 0) return;
    
    // Wrap around
    if (index >= slideImages.length) {
        currentSlideIndex = 0;
    } else if (index < 0) {
        currentSlideIndex = slideImages.length - 1;
    } else {
        currentSlideIndex = index;
    }
    
    // Update image and name
    const image = document.getElementById("slideshowImage");
    const nameEl = document.getElementById("imageName");
    
    image.src = slideImages[currentSlideIndex];
    image.alt = slideNames[currentSlideIndex] || `Slide ${currentSlideIndex + 1}`;
    nameEl.textContent = slideNames[currentSlideIndex] || `Image ${currentSlideIndex + 1}`;
    
    // Update dots
    updateDots(currentSlideIndex);
}

function nextSlide() {
    showSlide(currentSlideIndex + 1);
}

function previousSlide() {
    showSlide(currentSlideIndex - 1);
}

function goToSlide(index) {
    showSlide(index);
}

function createDots() {
    const dotsContainer = document.getElementById("dotsContainer");
    dotsContainer.innerHTML = "";
    
    slideImages.forEach((_, index) => {
        const dot = document.createElement("div");
        dot.className = "dot";
        dot.onclick = () => goToSlide(index);
        dotsContainer.appendChild(dot);
    });
}

function updateDots(activeIndex) {
    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot, index) => {
        dot.classList.remove("active");
        if (index === activeIndex) {
            dot.classList.add("active");
        }
    });
}

/* ========================
   Email Modal Management
   ======================== */

function openEmailModal(event) {
    event.preventDefault();
    const modal = document.getElementById("emailModal");
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeEmailModal() {
    const modal = document.getElementById("emailModal");
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
    document.getElementById("emailSubject").value = "";
    document.getElementById("emailBody").value = "";
}

function sendViaGmail() {
    const subject = encodeURIComponent(document.getElementById("emailSubject").value);
    const body = encodeURIComponent(document.getElementById("emailBody").value);
    const gmailUrl = `https://mail.google.com/mail/?view=cm&to=arjay.charcos25@gmail.com&su=${subject}&body=${body}`;
    window.open(gmailUrl, "_blank");
    closeEmailModal();
}

/* ========================
   Modal Event Listeners
   ======================== */

document.addEventListener("DOMContentLoaded", function() {
    setupScrollAnimations();
    setupNavigation();
    setupModalListeners();
});

function setupModalListeners() {
    // Video modal click outside to close
    const videoModal = document.getElementById("videoModal");
    videoModal.addEventListener("click", function(event) {
        if (event.target === videoModal) {
            closeVideoModal();
        }
    });
    
    // Slideshow modal click outside to close
    const slideshowModal = document.getElementById("slideshowModal");
    slideshowModal.addEventListener("click", function(event) {
        if (event.target === slideshowModal) {
            closeSlideshowModal();
        }
    });

    // Email modal click outside to close
    const emailModal = document.getElementById("emailModal");
    emailModal.addEventListener("click", function(event) {
        if (event.target === emailModal) {
            closeEmailModal();
        }
    });
    
    // Close modals on Escape key
    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape") {
            closeVideoModal();
            closeSlideshowModal();
            closeEmailModal();
        }
    });
    
    // Keyboard navigation for slideshow (arrow keys)
    document.addEventListener("keydown", function(event) {
        const slideshowModal = document.getElementById("slideshowModal");
        if (slideshowModal.classList.contains("active")) {
            if (event.key === "ArrowLeft") {
                previousSlide();
            } else if (event.key === "ArrowRight") {
                nextSlide();
            }
        }
    });
}

/* ========================
   Navigation - Highlight Active Section
   ======================== */

function setupNavigation() {
    const navLinks = document.querySelectorAll('nav a');
    
    // Highlight active nav link on scroll
    window.addEventListener('scroll', () => {
        highlightActiveNav();
    });

    // Smooth scroll for nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
}

function highlightActiveNav() {
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

/* ========================
   Scroll Animations
   ======================== */

function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe animatable elements
    const animatables = document.querySelectorAll('.project-card, .skill-tag');
    animatables.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}