const toggleNav = document.getElementById('toggle-nav');
const nav = document.getElementById('nav');

toggleNav.addEventListener('click', () => {
  nav.classList.toggle('show');
});

// Agrega la clase 'show' a #nav cuando se hace clic en #toggle-nav