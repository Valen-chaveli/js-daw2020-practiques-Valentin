'use strict';

let cuentaAtras = document.querySelector('#cuentaAtras');

//Permiso al usuario para recibir notificaciones
let permiso = Notification.permission;

if (permiso == 'default') {
  Notification.requestPermission();
}

/**
 * Realiza una cuenta atras con los milisigundos que se le pasen
 * @param {Number} milisegundos Milisegundos para el temporizador
 * @returns {Promise}
 */
function temporizador(milisegundos) {
  return new Promise(function (resolv, reject) {
    setTimeout(() => {
      resolv();
    }, milisegundos);
  });
}

decrementar();

/**
 * Decrementa el valor del contador hasta llegar a 0 y muestra
 * la notificacion
 */
async function decrementar() {
  let contador = 5;
  cuentaAtras.innerHTML = contador;

  //Se crea una promsea de 1 segundo mientras que el contador no sea 0
  do {
    let promesa = temporizador(1000);

    await promesa
      .then(() => {
        //Decremeto el contador y muestro por pantalla
        contador--;
        cuentaAtras.innerHTML = contador;
      })
      .catch((error) => {
        console.log(error);
      });
  } while (contador > 0);

  mostrarNotificacion();
}

/**
 * Muestra una notificacion de un nuevo video al usuario
 */
function mostrarNotificacion() {
  //Se crea una Notificacion
  let notificacion = new Notification('Nuevo video', {
    body: 'Se publico un nuevo video',
  });

  //Al hacer click se redirigira al usuario al video
  notificacion.addEventListener('click', (event) => {
    location.href = 'ventanaVideo.html';
  });
}
