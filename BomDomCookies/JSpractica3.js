'use strict';
var mensaje;
var opcion = confirm('Quiere ordenar las palabras?');
if (opcion == true) {
  setTimeout(() => {
    cambiarLista();
  }, 3000);
  document.write(
    '<strong style="color:green">Se van a ordenar las palabras ... espere</strong>'
  );
} else {
  document.write(
    '<strong style="color:red">No es han ordenado las palabras</strong>'
  );
}
/**
 * Obtiene los elementos li de una lista, los mete en un array y los ordenada alfabeticamente
 * @returns {Array} ListaArray
 */
function ordenar() {
  const arrayLista = [];
  //Convierto los elementos li en un array
  var lista = [...document.getElementsByTagName('li')];
  //Inserto en un array solo el contendio de cada li (cada palabra de la lista en un array)
  for (let index = 0; index < lista.length; index++) {
    arrayLista[index] = lista[index].innerHTML;
  }
  //Ordeno alfabeticamente
  arrayLista.sort();
  return arrayLista;
}

/**
 * Manipula los elementos. Elimina la lista definida y crea una nueva a partir de
 * las palabras ordenadas
 */
function cambiarLista() {
  //---- | Para ordenar | ----
  const arrayLista = ordenar();

  //----------- | Para eliminar la lista | --------------
  let capa = document.getElementById('contenedor');
  let listaEntera = document.querySelectorAll('#contenedor-lista')[0];
  //se elimina la lista entera
  capa.removeChild(listaEntera);
  //----------------------------------------------------

  //---------- | Crear la nueva lista ordenada | ----------
  let capaContenedora = document.getElementById('contenedor');

  //Creo e inserto nuevos elementos li a partir de la lista ordenada en la capa padre
  for (let i = 0; i < arrayLista.length; i++) {
    let nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = arrayLista[i];
    capaContenedora.appendChild(nuevoElemento);
  }
  //----------------------------------------------------
}
