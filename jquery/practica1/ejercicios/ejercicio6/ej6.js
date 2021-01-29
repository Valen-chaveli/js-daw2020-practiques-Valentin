'use strict';
$(() => {
  let btn = $('#button1');

  btn.one('click', () => {
    let contenedorSegundo = $('body').find('.div');
    let contenedorTercero = $('body').find('div').last();
    let numElementos = contenedorSegundo.children().length;

    let mensaje = $(`<p>En el segundo div hay ${numElementos} elementos</p>`);

    contenedorTercero.append(mensaje);
  });
});
