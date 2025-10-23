// Header cambia al hacer scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("scrolled", window.scrollY > 50);
});

// Menú hamburguesa
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// ======================
// CARRUSEL DE IMÁGENES
// ======================
const track = document.querySelector('.carousel-track');
const images = document.querySelectorAll('.carousel-img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0;

function updateCarousel() {
  const width = images[0].clientWidth;
  track.style.transform = `translateX(-${currentIndex * width}px)`;
}

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateCarousel();
});

window.addEventListener('resize', updateCarousel);

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
  });
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});