// Seleccionamos todos los elementos h1 y p que queremos que aparezcan al scrollear
var elements = $('h1, p');

// Función que se encargará de mostrar los elementos al scrollear
function showElements() {
  // Obtenemos la posición actual del scroll
  var scrollTop = $(window).scrollTop();

  // Iteramos sobre los elementos seleccionados
  elements.each(function() {
    // Obtenemos la posición del elemento en la página
    var elementTop = $(this).offset().top;

    // Si el elemento está dentro de la zona de visibilidad, lo mostramos
    if (elementTop <= scrollTop + $(window).height() - 200) {
      $(this).addClass('visible');
    } else {
      $(this).removeClass('visible');
    }
  });
}

// Asignamos la función showElements al evento scroll de la ventana
$(window).scroll(showElements);

// Llamamos a la función showElements una vez para que se muestren los elementos iniciales
showElements();