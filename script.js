document.addEventListener('DOMContentLoaded',()=>{
document.getElementById('year').textContent = new Date().getFullYear();


const header = document.querySelector('.site-header');
// window.addEventListener('scroll',()=>{
// if(window.scrollY > 50){
// header.classList.remove('transparent');
// header.classList.add('solid');
// }else{
// header.classList.remove('solid');
// header.classList.add('transparent');
// }
// });


// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link=>{
link.addEventListener('click',e=>{
const targetId = link.getAttribute('href').slice(1);
if(!targetId) return;
const target = document.getElementById(targetId);
if(target){
e.preventDefault();
target.scrollIntoView({behavior:'smooth'});
}
});
});


// Reveal on scroll
const observer = new IntersectionObserver((entries)=>{
entries.forEach(entry=>{
if(entry.isIntersecting){entry.target.classList.add('show');}
});
},{threshold:0.15});


document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
});
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});