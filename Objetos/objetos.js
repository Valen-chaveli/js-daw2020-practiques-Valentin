'use strict';
/**
 * Funcion constructora que se encarga de crear un objeto para
 * represetar puntos de 2 coordenadas
 * @param {number} x Representa la coordenada x
 * @param {number} y Representa la coordenada y
 */
function Punto(x, y) {
  //Compruebo si es un numero
  if (isNaN(x) || isNaN(y)) {
    this.x = 0;
    this.y = 0;
  } else {
    this.x = x;
    this.y = y;
  }

  this.copiar = () => {
    //Creo un nuevo punto con las coordenadas del punto actual y lo retorno
    return new Punto(this.x, this.y);
  };

  /**
   *Cambia las coordenadas x e y del objeto
   * @param {nt} x2 Representa la coordenada  x a la cual se desea cambiar
   * @param {Int} y2 Representa la coordenada yx a la cual se desea cambiar
   */
  this.cambiar = (x2, y2) => {
    this.x = x2;
    this.y = y2;
  };

  //Accedo a las propiedades del punto pasado y se las sumo a las del objeto desde el que se llama
  this.suma = (punto2) => {
    return new Punto(punto2.x + this.x, punto2.y + this.y);
  };

  this.mostrarCoordenadas = () => this.x + ' | ' + this.y;
}

console.log('------- PRUEBAS DE FUNCIONAMIENTO -----');
var P1 = new Punto(5, 10);
var P2 = new Punto(2, 4);

console.log('Valores del Punto 1: | X = ' + P1.x + ' | Y = ' + P1.y + ' |');
console.log('<<Cambio los valores del Punto 1>>');
P1.cambiar(15, 30);
console.log(
  'Valores del Punto 1 cambiados: | X = ' + P1.x + ' | Y = ' + P1.y + ' |'
);
var P1Copia = P1.copiar();

console.log(
  'Valores del la copia del Punto 1: | X = ' +
    P1Copia.x +
    ' | Y = ' +
    P1Copia.y +
    ' |'
);

var P3 = new Punto(10, 20);

console.log('Valores del Punto 3: | X = ' + P3.x + ' | Y = ' + P3.y + ' |');

console.log(' <<Sumo la copia del Punto 1 y el Punto 3>>');
var PuntoSuma = P1Copia.suma(P3);

console.log('Resultado de la suma de las coordenadas de la copia de P1 y P3');
console.log(
  'Coordenada X: ' + PuntoSuma.x + '  | ' + ' Coordenada Y: ' + PuntoSuma.y
);
console.log('--------------------------------------------');
