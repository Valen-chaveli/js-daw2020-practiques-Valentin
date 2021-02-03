'use strict';
$(() => {
  //Se obtiene el párrafo
  let $pHTML = $('p');

  //Se obtiene el texto del parrafo
  let textP = $pHTML.html().trim();

  //Se obtiene cada palabra del parrafo y se almacena en un array
  let wordsP = textP.split(' ');

  //Se "encapsula"cada palabra en un contenedor span
  let wordsWithContainer = wordsP.map((word) => `<span>${word}</span> `);

  //Se agrega al parrafo las palabras encapsuladas
  $pHTML.html(wordsWithContainer);

  //Se agrega a cada span del parrafo un evento de click
  $pHTML.on('click', 'span', function () {
    $(this).css({
      'background-color': 'yellow',
      'font-weight': 'bold',
    });
  });
});
