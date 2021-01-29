$(() => {
  //----------- | PRACTICA 2 | ----------------

  //Lista
  $('ul#selected-plays > li').addClass('horizontal');

  $('ul#selected-plays > li > ul').addClass('sub-level');

  //Primera letra del los elementos de nivel superior
  $(' ul.clear-after > li').addClass('big-letter');

  //Links

  //Links que su href empiece por mailto
  $('a[href^=mailto]').addClass('mailto');

  //Links que su href termine en pdf
  $('a[href$=pdf]').addClass('pdflink');

  //Links en el cual su href empiece en http y contengan la palabra henry
  $('a[href^=http], a[href~="henry"').addClass('henrylink');

  //Tabla

  //Filas impares hijas de una tabla
  $('table tr:nth-child(odd)').addClass('alt');

  //Obras que contengan la palabra Henry
  $('table tr td:contains("Henry")').addClass('highlight');

  //---------------------------------------

  //--------- | PRACTICA 3 | ---------------
  $('table')
    .first()
    .find('tr')
    .children('td:contains("Henry")')
    .next()
    .addClass('highlight');

  $('table')
    .first()
    .find("tr > td:contains('et')")
    .nextAll()
    .addClass('highlight');

  //---------------------------------------
});
