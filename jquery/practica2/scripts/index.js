$(() => {
  //----------- | PRACTICA 2 | ----------------

  //Lista
  $('ul#selected-plays > *').addClass('horizontal');
  $('ul#selected-plays li > ul').addClass('sub-level');
  $('ul#selected-plays > li').addClass('big-letter');

  //Links
  $('a[href^=mailto]').addClass('mailto');
  $('a[href$=pdf]').addClass('pdflink');
  $('a[href^=http]:contains("Henry")').addClass('henrylink');

  //Tabla
  $('table:first tr:even, table:last tr:even').addClass('alt');
  $('table tr td:contains("Henry")').addClass('highlight');

  //-------------------------------------

  //--------- | PRACTICA 3 | -------------
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

  //-------------------------------------
});
