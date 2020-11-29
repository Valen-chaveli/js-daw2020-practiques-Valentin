'use strict';
/**
 * Evento que añade un evento a la ventana
 * y detecta si se han pulsado la tecla ALT y F12
 * Si es el caso, cambia el fondo del body a una imagen aleatoria
 */
window.addEventListener('keyup', function () {
  //Si se pulsan la tecla ALt y F12 a la vez se cambia el fondo
  if (event.altKey && event.keyCode === 123) {
    document.body.style.backgroundImage =
      'url("https://source.unsplash.com/random")';
  }
});
