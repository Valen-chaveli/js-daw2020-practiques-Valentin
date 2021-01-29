'use strict';
$(() => {
  //------- | PRIMER PUNTO | ----------
  //Creo el enlace
  //let $enlace = $(`<a href=#container>Back to the top</a>`);

  //Inserto el enlace despues de cada parrafo
  //$('div.chapter').find('p').after($enlace);

  //------- | SEGUNDO PUNTO | ----------

  //Guardo los footnotes
  //let footnotes = $('span.footnote');

  //Muevo e inserto los 3 footnotes despues del .chapter y antes del footer
  //$('div.chapter').after(footnotes);

  //-------------------------------------

  //------- | TERCER PUNTO | ----------

  //$(footnotes).wrapAll('<ol></ol>');

  //$(footnotes).wrapInner('<li></li>');

  //-------------------------------------

  //------- | CUARTO PUNTO | ----------

  $('div.chapter')
    .after($('span.footnote'))
    .nextAll(':not(#footer)')
    .wrapAll('<ol></ol>')
    .wrapInner('<li></li>');

  //-------------------------------------

  //------- | QUINTO PUNTO | ----------
  let $enlace = $(`<a href=#container>Back to the top</a>`);

  $($enlace).insertAfter('div.chapter > p');

  //-------------------------------------
});
