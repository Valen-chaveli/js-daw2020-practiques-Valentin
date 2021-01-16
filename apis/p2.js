'use strict';

let cuentaAtras = document.querySelector('cuentaAtras');

let esperarNotificacion = (segundos = 0, contador = 5) => {
  do {
    var promesa = new Promise((resolv, reject) => {
      setTimeout(() => {
        resolv(new Notification('Hola'));
      }, segundos);
    });
    cuentaAtras.textContent = contador;
    contador--;
  } while (contador >= 0);

  promesa.then((notificacion) => {
    notificacion;
  });
};

esperarNotificacion(5000);
