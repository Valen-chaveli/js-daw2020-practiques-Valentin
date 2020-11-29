'use strict';
let capa1 = document.getElementById('capa1');
let capa2 = document.getElementById('capa2');

/**
 * Cuando inicia el arrastre sobre la capa 1 se aplica opacidad
 */
capa1.addEventListener('drag', function () {
  capa1.style.opacity = '50%';
});

/**
 * Cuando la capa1 entra a la capa2 cambia el color
 */
capa2.addEventListener('dragenter', function () {
  capa2.style.backgroundColor = 'red';
});

/**
 *Cuando la capa sale y entra en la nueva capa se aplican 
 los estilos correspondientes
 */
capa2.addEventListener('dragleave', function () {
  capa1.style.display = 'none';
  capa2.style.backgroundColor = 'yellow';
  capa2.innerHTML = 'Lo has logrado';
});
