'use strict';

$(() => {
  //Primer elemento
  $('ul').find('li').first().css('background-color', 'red');

  //Elemento con id
  $('#3').css('background-color', 'yellow');

  //Ultimo elemento
  $('ul').find('li').last().css('background-color', 'blue');
});
