'use strict';
$(() => {
  let $pHTML = $('p').html();
  let palabras = $pHTML.split(/[,.]/);

  $(palabras).each(function (indice, palabra) {
    $(palabra).wrapInner('<b></b>');
    console.log(palabra);
  });

  console.log('-------');
  $('body').append(palabras);
});
