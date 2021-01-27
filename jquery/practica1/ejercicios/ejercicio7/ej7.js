'use strict';
$(() => {
  $('#boton1').click(() => {
    let select = $('select');

    //Elimino todos los option
    select.children().remove();

    //Creo un nuevo option
    let nuevoOption = $('<option selected>Blanco</option>');

    //Lo agrego al select
    select.append(nuevoOption);
  });
});
