// Jahr im Footer
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile-Nav (kein Animation, nur ein-/ausblenden)
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
  });
}

// Lightbox für die Galerie
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');

if (lightbox) {
  document.querySelectorAll('.img-item img').forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.classList.add('open');
    });
  });

  lightboxClose.addEventListener('click', () => {
    lightbox.classList.remove('open');
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) lightbox.classList.remove('open');
  });
}
