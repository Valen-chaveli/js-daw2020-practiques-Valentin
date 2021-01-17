'use strict';

let video = document.querySelector('#video');
let duracion = document.querySelector('#duracion');

/**
 * Al dar click izquierdo se reproducira o pausara el video
 */
video.addEventListener('click', () => {
  if (video.paused) video.play();
  else video.pause();
});

/**
 * Al dar click derecho se mostrará la duracion del video en concreto
 */
video.addEventListener('contextmenu', (ev) => {
  //Para que no salga el menu contextual al dar click
  ev.preventDefault();

  //Obtengo los datos de la duracuion del video en segundos
  let duracionVideo = parseInt(video.duration);
  let minutos = '';
  let segundos = '';

  //Si es mayor a 59 segundos el video durará un minuto
  if (video.duracion > 59) {
    //Obtengo los minutos
    minutos = duracionVideo / 60;

    //Obtengo los segundos
    segundos = minutos / 60;

    //Si no el video no llega a un minuto
  } else {
    minutos = 0;
    segundos = duracionVideo;
  }

  //Se muestra la duracion
  duracion.textContent = `Duracion: ${minutos} : ${segundos}`;
});
