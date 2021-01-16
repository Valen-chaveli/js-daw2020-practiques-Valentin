'use strict';

const inputUsuario = document.querySelector('#nombre');
const pusuarioGuardado = document.querySelector('#nombreGuardado');

//Cuando se de a ENTER el usuario se guardara en el sessionStorage
window.addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    guardarUsuario();
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
