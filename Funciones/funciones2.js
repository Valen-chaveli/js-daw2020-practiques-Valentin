'use strict';

//Defino las constantes y las variables
const arrayPalabras = [];
var palabra = '';
var valorIndefinido = false;
var contadorPalabraRepetida = 1;
var contador = 1;

do {
  palabra = prompt('Escribe una serie de palabras');

  //Agrego la palabra al array
  arrayPalabras.push(palabra);

  //Recorro el array
  for (let index = 0; index < arrayPalabras.length; index++) {
    //Si la cadena esta vacia indefinido pasa a TRUE y se elimina del array
    if (arrayPalabras[index] == '') {
      //Se elimina para no afectar al ordenamiento posterior
      arrayPalabras.pop();
      valorIndefinido = true;
    }

    //Si esta nulo es que se ha cancelado el popup
    if (arrayPalabras[index] === null) {
      //Se elimina para no afectar al ordenamiento posterior
      arrayPalabras.pop();
      valorIndefinido = true;
    }
  }

  //Si se establece un valor vacio o indefinido sale del bucle
} while (valorIndefinido != true);

palabrasRepetidas(arrayPalabras);

function palabrasRepetidas(arrayPalabras) {
  const mapa = new Map();

  for (let index = 0; index < arrayPalabras.length; index++) {
    //Si la clave no se repite entonces se establece como 1
    if (!mapa.has(arrayPalabras[index])) {
      mapa.set(arrayPalabras[index], 1);

      //Si la clave se introduce de nuevo entonces aumenta el contador
    } else {
      //Recorro el mapa obteniendo los valores para sumar
      for (const valor of mapa.valors()) {
        var contadorNumero = parseInt(valor);
        mapa.set(arrayPalabras[index], contadorNumero + 1);
      }
    }
  }

  for (const key of mapa.keys()) {
    document.write(key + ' | ');
  }

  document.write('<br>');

  for (const valor of mapa.valors()) {
    document.write(valor + '   ' + '| ');
  }
}
