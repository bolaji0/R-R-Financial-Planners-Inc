// Toggle Mobile Menu
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
  mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
});

// Close mobile menu when a link is clicked
const mobileLinks = document.querySelectorAll('.mobile-link');
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
  });
});

// Navigation Active State
function updateNavLinks() { 
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');
  
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (window.pageYOffset >= (sectionTop - 200)) {
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

// Shrink Navbar on Scroll
function shrinkNavbar() {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

// Testimonial Carousel
const testimonialCards = document.querySelectorAll('.testimonial-card');
const navDots = document.querySelectorAll('.nav-dot');
let currentTestimonial = 0;
let testimonialInterval;

function showTestimonial(index) {
  testimonialCards.forEach(card => {
    card.classList.remove('active');
  });
  
  navDots.forEach(dot => {
    dot.classList.remove('active');
  });
  
  testimonialCards[index].classList.add('active');
  navDots[index].classList.add('active');
  currentTestimonial = index;
}

function nextTestimonial() {
  currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
  showTestimonial(currentTestimonial);
}

function startTestimonialInterval() {
  testimonialInterval = setInterval(nextTestimonial, 5000);
}

navDots.forEach(dot => {
  dot.addEventListener('click', function() {
    clearInterval(testimonialInterval);
    showTestimonial(parseInt(this.getAttribute('data-index')));
    startTestimonialInterval();
  });
});

startTestimonialInterval();

// Accessibility Popup
const accessibilityToggle = document.getElementById('accessibility-toggle');
const accessibilityToggle1 = document.getElementById('accessibility-toggle1');

const accessibilityPopup = document.getElementById('accessibility-popup');
const accessibilityPopup1 = document.getElementById('accessibility-popup1');


const closePopup = document.getElementById('close-popup');
const closePopup1 = document.getElementById('close-popup1');



accessibilityToggle.addEventListener('click', () => {
  accessibilityPopup.style.display = accessibilityPopup.style.display === 'block' ? 'none' : 'block';
  
  // Stop jiggling after first click
  document.querySelector('.wheelchair-icon').classList.remove('jiggle');
});

accessibilityToggle1.addEventListener('click', () => {
  accessibilityPopup1.style.display = accessibilityPopup1.style.display === 'block' ? 'none' : 'block';
  
  // Stop jiggling after first click
  document.querySelector('.wheelchair-icon').classList.remove('jiggle');
});


closePopup1.addEventListener('click', () => {
  accessibilityPopup1.style.display = 'none';
});

closePopup.addEventListener('click', () => {
  accessibilityPopup.style.display = 'none';
});

// Form Validation
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  let isValid = true;
  
  // Validate Name
  const nameInput = document.getElementById('name');
  const nameError = document.getElementById('name-error');
  
  if (nameInput.value.trim() === '') {
    nameInput.classList.add('invalid');
    nameError.style.display = 'block';
    isValid = false;
  } else {
    nameInput.classList.remove('invalid');
    nameError.style.display = 'none';
  }
  
  // Validate Email
  const emailInput = document.getElementById('email');
  const emailError = document.getElementById('email-error');
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!emailPattern.test(emailInput.value)) {
    emailInput.classList.add('invalid');
    emailError.style.display = 'block';
    isValid = false;
  } else {
    emailInput.classList.remove('invalid');
    emailError.style.display = 'none';
  }
  
  // Validate Phone
  const phoneInput = document.getElementById('phone');
  const phoneError = document.getElementById('phone-error');
  const phonePattern = /^[\d\s\-\(\)]+$/;
  
  if (!phonePattern.test(phoneInput.value) || phoneInput.value.trim().length < 10) {
    phoneInput.classList.add('invalid');
    phoneError.style.display = 'block';
    isValid = false;
  } else {
    phoneInput.classList.remove('invalid');
    phoneError.style.display = 'none';
  }
  
  // Validate Message
  const messageInput = document.getElementById('message');
  const messageError = document.getElementById('message-error');
  
  if (messageInput.value.trim() === '') {
    messageInput.classList.add('invalid');
    messageError.style.display = 'block';
    isValid = false;
  } else {
    messageInput.classList.remove('invalid');
    messageError.style.display = 'none';
  }
  
  // If valid, would submit form here (but we're preventing the actual submission for this demo)
  if (isValid) {
    alert('Thank you for your message! We will contact you shortly.');
    contactForm.reset();
  }
});

// Back to Top Button
const backToTopButton = document.getElementById('back-to-top');

function showBackToTopButton() {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
}

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


function showNote() {
    const note = document.getElementById('note');
    note.style.opacity = 1;
    setTimeout(() => {
      note.style.opacity = 0;
    }, 2000);
}



// Footer Year
document.getElementById('year').textContent = new Date().getFullYear();

// Event Listeners for Scroll
window.addEventListener('scroll', () => {
  updateNavLinks();
  shrinkNavbar();
  showBackToTopButton();
});

// Initialize all scroll functions
updateNavLinks();
shrinkNavbar();
showBackToTopButton();