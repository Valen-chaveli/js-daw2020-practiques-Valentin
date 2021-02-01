'use strict';

$(() => {
  let $switcher = $('.switcher');
  let $switcherBtnsDefautlt = $('.switcher').children('button');
  let $main = $('main');

  //Se borrar los botones por defecto
  $switcherBtnsDefautlt.remove();

  //Se crean el array de botones para que cuando se quieran agregar mas se haga aqui
  let objButtons = [
    $('<button class="selected" data-style="default">Defecto</button>'),
    $('<button data-style="narrow">Estrecho</button>'),
    $('<button data-style="large">Grande</button>'),
  ];

  //Se agregan los botones al switch
  $(objButtons).each(function (indice, elemento) {
    $switcher.append(elemento);
  });

  //Se obtienen los botones nuevos del Switcher
  let $switcherBtns = $('.switcher').children('button');

  //Se les agrega la clase hidden al principio
  $switcherBtns.toggleClass('hidden');

  //Se le agrega el efeco de hover para el swithcer
  $switcher.hover(
    function () {
      // over
      $(this).addClass('hover');
    },
    function () {
      // out
      $(this).removeClass('hover');
    }
  );

  //Al pulsar en el swithcer se mostraran los botones
  $switcher.on('click', function (ev) {
    $switcherBtns.toggleClass('hidden');
  });

  //Al pulsar en los botones se aplicara un estilo distinto en el docuemento
  $switcher.on('click', 'button', function (ev) {
    //Se cancela la propagacion
    ev.stopPropagation();
    //Se elimina la clase que indica que boton esta seleccionado en todos los botones
    $('button').removeClass('selected');

    //Se Agrega la clase para el boton que se ha pulsado
    $(this).toggleClass('selected');

    //Si el boton es el estrecho se eliminará la clase large y se agregara la clase narrow
    if ($(this).text() === 'Estrecho') {
      $main.removeClass('large');
      $main.addClass('narrow');
      //Si el boton es el large se eliminará la clase narrow y se agregara la clase large
    } else if ($(this).text() === 'Grande') {
      $main.removeClass('narrow');
      $main.addClass('large');
    } else {
      //Si no es ninguno de los dos, es el boton por defecto y se eliminan ambas clases
      $main.removeClass('narrow').removeClass('large');
    }
  });
});
