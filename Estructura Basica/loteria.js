'use strict';

//Creo las variables
var numeros = [];
var valortemporal;
var boletosLoteria = [];

//Relleno el array de numeros no repetidos
for (let index = 0; index < 50; index++) {
  numeros[index] = index + 1;
}

//Bucle para generar los 50 boletos de loteria
for (let index = 1; index <= 50; index++) {
  //Recorro 500 veces para desordenar el array
  for (let index2 = 1; index2 <= 500; index2++) {
    //Genero numero aleatorio entre 1 y 49 y lo asigno a la posicion
    let posicion1 = Math.floor(Math.random() * 49);
    let posicion2 = Math.floor(Math.random() * 49);

    //Hago el intercambio en las posiciones para mezclar el array
    [numeros[posicion1], numeros[posicion2]] = [
      numeros[posicion2],
      numeros[posicion1],
    ];
  } //Cierre for para generar todos los numeros aleatorios

  //Obtengo los 6 primeros elementos del array y se los asigno a un boleto
  boletosLoteria[index] = numeros.slice(0, 6);
} //Cierre for que nos crea los boletos

//Muestro por consola los arrays que corresponden a cada boleto
console.log('---------------------');
for (const boleto of boletosLoteria) {
  console.log(boleto);
}
