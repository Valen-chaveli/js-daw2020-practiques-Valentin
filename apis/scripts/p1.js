'use strict';

const inputUsuario = document.querySelector('#nombre');
const pusuarioGuardado = document.querySelector('#nombreGuardado');

//Cuando se de a ENTER el usuario se guardara en el sessionStorage
window.addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    guardarUsuario();
    mostrarMensaje();
  }
});

//Cuando se recagargue la pagina se mostrara el usuario guardado en el sessionStorage
window.addEventListener('load', (event) => {
  if (sessionStorage.getItem('usuario') === undefined) {
    return;
  } else {
    mostrarUsuario();
  }
});

/**
 * Guarda el usuario introducido en el input en el sessionStorage como clave "usuario"
 */
function guardarUsuario() {
  let nombreUsuario = inputUsuario.value;
  sessionStorage.setItem('usuario', nombreUsuario);
}

/**
 * Obtiene del sessionStorage el nombre de usuario guardado y lo muestra
 */
function mostrarUsuario() {
  let usuarioGuardado = sessionStorage.getItem('usuario');
  pusuarioGuardado.textContent = usuarioGuardado;
}

/**
 * Muestra mensaje al usuario que tiene que refresacar la pagina para ver los cambios
 */
function mostrarMensaje() {
  const mensaje = document.querySelector('#mensaje');
  mensaje.textContent = 'Refresca la ventana para ver el usuario guardado';
}
