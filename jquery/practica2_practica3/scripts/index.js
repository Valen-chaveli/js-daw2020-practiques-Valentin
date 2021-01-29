$(() => {
  //----------- | PRACTICA 2 | ----------------

  //Lista
  $('ul#selected-plays > li').addClass('horizontal');

  $('ul#selected-plays > li > ul').addClass('sub-level');

  $('ul:nth-child(1)').parent('li').addClass('big-letter');

  //Links
  $('a[href^=mailto]').addClass('mailto');
  $('a[href$=pdf]').addClass('pdflink');
  $('a[href^=http], a[href~="henry"').addClass('henrylink');

  //Tabla
  $('table tr:nth-child(odd)').addClass('alt');
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
