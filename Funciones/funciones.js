'use strict';

//Defino las constantes y las variables
const arrayPalabras = [];
var palabra = '';
var valorIndefinido = false;

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
console.log(arrayPalabras);

console.log('|--------ARRAY SIN REPETICIONES PRACTICA 1---------|');

function eliminarDuplicados(array) {
  //Hago un filtro para crear un nuevo array que cumple la condicion para que no se repitan
  const araryNoRepetido = array.filter(
    (valor, index) => array.indexOf(valor) === index
  );
  return araryNoRepetido;
}

//Llamo al metodo para eliminar duplicados
const arraySinRepeticiones = eliminarDuplicados(arrayPalabras);

//Transformo a mayusulas los valores del array antes de ordenarlo
const arraySinRepeticionesMayus = arraySinRepeticiones.map((valor) =>
  valor.toUpperCase()
);

//Obengo el array completo ordenado a la inversa
var arrayOrdenadoInversa = arraySinRepeticionesMayus.sort().reverse();

//Llamo al metodo para recorrer el resultado dado por la funcion anterior
recorrerArray(arrayOrdenadoInversa);

console.log('------------------------------------------');

//Recorro el array para que imprima los resultados
function recorrerArray(array) {
  for (let index = 0; index < array.length; index++) {
    console.log(array[index] + ', ');
  }
}
