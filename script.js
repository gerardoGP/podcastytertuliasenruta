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