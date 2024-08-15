// Seleccionamos todos los enlaces del menú
const links = document.querySelectorAll('header nav ul li a');

// Agregamos un evento de click a cada enlace
links.forEach((link) => {
  link.addEventListener('click', (e) => {
    // Eliminamos la clase "active" de todos los enlaces
    links.forEach((otherLink) => {
      otherLink.classList.remove('active');
    });
    // Agregamos la clase "active" al enlace que se hizo click
    e.target.classList.add('active');
  });
});