'use strict';
$(() => {
  setTimeout(() => {
    if (confirm('¿Quieres ordenar las palabras ?')) {
      ordenarlista();
    }
  }, 3000);
});

/**
 * Ordena una lista de palabras de la A - Z
 */
function ordenarlista() {
  //Obtengo la lista
  let lista = $('#contenedor-lista');

  //Obtengo un array de Objetos JQUERY
  let palabrasLista = lista.children('li').get();

  //Elimino los hijos de la lista
  $('#contenedor-lista').find('li').remove();

  //Funcion para ordenar las palabras
  let listaOrdenada = palabrasLista.sort((a, b) => {
    let A = $(a).text().toUpperCase();
    let B = $(b).text().toUpperCase();
    return A < B ? -1 : A > B ? 1 : 0;
  });

  //Recorro la lista ordenada y inserto el valor en el contenedor de la lista
  $.each(listaOrdenada, (clave, valor) => {
    $(lista).append(valor);
  });

  //Elimino el mensaje de espera
  $('#contenedor p').remove();
}
