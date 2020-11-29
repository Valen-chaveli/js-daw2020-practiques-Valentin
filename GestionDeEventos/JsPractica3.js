'use srtict';

var form = document.getElementById('form');
var txtEmail = document.getElementById('email');
let txtPassword = document.getElementById('password');
let mensaje = document.getElementById('mensaje');

let patronEmail = /^[0-9a-zA-Z]{4}@[0-9a-zA-Z]{4}[.]{1}[0-9a-zA-Z]{4}$/;
let patronPassword = /^.{8,10}$/;

//----------- | Eventos asociados | ---------------
txtEmail.addEventListener('change', comprobarEmail);
txtEmail.addEventListener('focus', quitarError);
txtPassword.addEventListener('change', comprobarPassword);
txtPassword.addEventListener('focus', quitarError);
form.addEventListener('submit', desactivarEnvio);
//-------------------------------------------------

/**
 * Comprueba que se cumple el patron de email especificado.
 * En caso contrario escribe un mensaje de error
 * @param {event} evento Elemento que desencadena la accion
 */
function comprobarEmail(evento) {
  let texto = evento.target.value;
  if (!patronEmail.test(texto)) mensajeError('email');
}

/**
 * Comprueba que se cumple el patron de contraseña especificado.
 * En caso contrario escribe un mensaje de error
 * @param {event} evento Elemento que desencadena la accion
 */
function comprobarPassword(evento) {
  let texto = evento.target.value;
  if (!patronPassword.test(texto)) mensajeError('password');
}

/**
 * Desactiva la accion (por defecto) de enviar el formulario aunque los campos esten correctos a no
 * @param {event} event Elemento que desencadena la accion por defecto
 */
function desactivarEnvio(event) {
  //El campo sea correcto o incorrecto se anulara la accion por defecto
  if (patronEmail.test(txtEmail.value) || !patronEmail.test(txtEmail.value)) {
    event.preventDefault();
  }
  if (
    patronPassword.test(txtPassword.value) ||
    !patronPassword.test(txtPassword.value)
  ) {
    event.preventDefault();
  }
}

/**
 * Escribe en un parrafo del DOM el mensaje de error con el nombre que le pasemos
 * @param {string} nombre Nombre del mensaje de error que queremos mostrar
 */
function mensajeError(nombre) {
  if (nombre === 'email') {
    mensaje.innerHTML = `<strong style="color:red">Ingrese un patron correcto para ${nombre} | FORMATO ESPERADO: xxxx@yyyy.zzzz</strong>`;
  }
  if (nombre === 'password') {
    mensaje.innerHTML = `<strong style="color:red">Ingrese un patron correcto para ${nombre} | FORMATO ESPERADO: Cadena entre 8 y 10 caracteres</strong>`;
  }
}

/**
 * Quita el mansaje de error
 */
function quitarError() {
  mensaje.innerHTML = '';
}
