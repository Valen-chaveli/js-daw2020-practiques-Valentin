'use strict';
Array.prototype.avg = function () {
  return this.reduce((acu, valor) => acu + valor, 0) / this.length;
};

const a = [10, 5, 5, 4, 4, 2, 4, 6, 8];
console.log('La media de los numeros: ' + a + ' es:');
console.log(a.avg());
