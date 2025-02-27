// Initialize AOS
AOS.init({
  duration: 1000,
  once: true,
});

// Initialize Typed.js
new Typed('.typed', {
  strings: ['Prabawikan Azhar H', 'Web Developer', 'Backend Developer'],
  typeSpeed: 50,
  backSpeed: 30,
  loop: true,
});

// Navbar Scroll Effect
window.addEventListener('scroll', function () {
  if (window.scrollY > 50) {
    document.querySelector('.navbar').classList.add('scrolled');
  } else {
    document.querySelector('.navbar').classList.remove('scrolled');
  }
});

// Initialize Tooltips
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

// Initialize the project modal
const projectModal = new bootstrap.Modal(
  document.getElementById('projectModal')
);

function openProjectModal(title, description, technologies, image) {
  // Update modal content
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalDescription').textContent = description;
  document.getElementById('modalImage').src = image;

  // Clear and update technologies list
  const techList = document.getElementById('modalTechnologies');
  techList.innerHTML = '';
  technologies.forEach((tech) => {
    const pill = document.createElement('span');
    pill.className = 'tech-pill';
    pill.textContent = tech;
    techList.appendChild(pill);
  });

  // Show the modal
  projectModal.show();
}

// Initialize Particles.js
particlesJS('particles-js', {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: '#ffd700',
    },
    shape: {
      type: 'circle',
    },
    opacity: {
      value: 0.5,
      random: false,
    },
    size: {
      value: 3,
      random: true,
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#ffd700',
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'repulse',
      },
      onclick: {
        enable: true,
        mode: 'push',
      },
      resize: true,
    },
  },
  retina_detect: true,
});

// Form Validation and Animation
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function (e) {
  e.preventDefault();
  if (!this.checkValidity()) {
    e.stopPropagation();
    this.classList.add('was-validated');
    this.querySelector('button[type="submit"]').classList.add('shake');
    setTimeout(() => {
      this.querySelector('button[type="submit"]').classList.remove('shake');
    }, 500);
  } else {
    // Handle form submission
    console.log('Form submitted');
    this.reset();
  }
});
