document.querySelectorAll('video').forEach((video) => {
  video.playbackRate = video.src.includes('summer-tshirts') ? 2 : 1;
  video.addEventListener('loadedmetadata', () => { video.playbackRate = video.src.includes('summer-tshirts') ? 2 : 1; });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('in-view'); });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

const nav = document.querySelector('.nav');
addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 30), { passive: true });

const glow = document.querySelector('.cursor-glow');
addEventListener('pointermove', (event) => {
  glow.style.left = `${event.clientX}px`;
  glow.style.top = `${event.clientY}px`;
}, { passive: true });
