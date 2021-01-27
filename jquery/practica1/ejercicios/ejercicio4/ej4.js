'use strict';

$(() => {
  //Ultima lista el primer elemento
  $('ul').last().find('li').first().css('background-color', 'red');

  //Primera lista el ultimo elemento
  $('ul').first().find('li').last().css('background-color', 'blue');

  //Segunda lista el tercer elemento
  $('ul').eq(1).find('li').last().prev().css('background-color', 'yellow');
});
