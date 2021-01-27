'use strict';
$(() => {
  let destino = $('#container');

  //Creo el enlace

  let $enlace = $('<a href="">back to the top</a>');

  //Inserto el enlace despues de cada parrafo
  $('p').after($enlace);
});
