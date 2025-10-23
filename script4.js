document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();

  const header = document.querySelector(".site-header");

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href").slice(1);
      if (!targetId) return;
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Reveal on scroll
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
});
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Cambiar header al hacer scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Animación de secciones al aparecer
const faders = document.querySelectorAll(".fade-in");
const appearOptions = { threshold: 0.2 };
const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, appearOptions);
faders.forEach((fader) => appearOnScroll.observe(fader));

// Menú responsive
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const overlay = document.getElementById("overlay");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
  overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navLinks.classList.remove("active");
  overlay.classList.remove("active");
});

// Cambiar header al hacer scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});


// ======================
// CARRUSEL DE IMÁGENES
// ======================
const track = document.querySelector('.carousel-track');
const images = document.querySelectorAll('.carousel-img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0;
let autoplayInterval;

// Actualiza la posición del carrusel
function updateCarousel() {
  const width = images[0].clientWidth;
  track.style.transform = `translateX(-${currentIndex * width}px)`;
}

// Avanza automáticamente cada 5 segundos
function startAutoplay() {
  autoplayInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
  }, 5000); // cada 5 segundos
}

// Detiene el autoplay (por ejemplo, al interactuar)
function stopAutoplay() {
  clearInterval(autoplayInterval);
}

nextBtn.addEventListener('click', () => {
  stopAutoplay();
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
  startAutoplay();
});

prevBtn.addEventListener('click', () => {
  stopAutoplay();
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateCarousel();
  startAutoplay();
});

window.addEventListener('resize', updateCarousel);
updateCarousel();
startAutoplay();

// ======================
// MODAL DE IMAGEN AMPLIADA
// ======================
const modal = document.getElementById('image-modal');
const modalImg = document.getElementById('modal-img');
const closeModal = document.querySelector('.close');

images.forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImg.src = img.src;
    stopAutoplay(); // pausa el autoplay cuando se abre el modal
  });
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
  startAutoplay(); // reanuda autoplay al cerrar
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
    startAutoplay(); // reanuda autoplay al cerrar
  }
});