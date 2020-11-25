/** Obtiene la fecha para dentro de un mes
 * @returns {date} fechaActual
 */
function obtenerCaducacion() {
  //Obtengo la fecha actual y la agrego le establezco para dentro de un mes
  var fechaActual = new Date();
  fechaActual.setTime(fechaActual.getTime() + 30 * 24 * 60 * 60 * 1000);
  return fechaActual.toUTCString();
}
/**
 * Crea y devuelve una cookie con el nombre que se le pase
 * @param {string} nombreCookie Nombre que tendra la cookie
 */
function getCookie(nombreCookie) {
  //Creo una cookie vacia
  var cookiestring = document.cookie;

  var index1 = cookiestring.indexOf(nombreCookie);
  var index2 = cookiestring.indexOf(';', index1);
  if (index2 == -1) index2 = cookiestring.length;

  //Devuelvo la cookie completa
  return cookiestring.substring(index1 + nombreCookie.length + 1, index2);
}

/**
 * Crea o actualiza una cookie a partir de los valores pasados como parametro
 * Por defecto, la fecha de caducidad de la cookie sera dentro de un mes
 * @param {string} nombre
 * @param {number} valor
 *
 */
function setCookie(nombre, valor, expiracion = obtenerCaducacion()) {
  cookiestring = nombre + '=' + valor + ';expires=' + expiracion;
  document.cookie = cookiestring;
}

/**
 * Caduca y elimina la cookie que se le pase por parametro
 * @param {string} nombreCookie Nombre de la cookie a eliminar
 */
function caducarCookie(nombreCookie) {
  //Le establezco la fecha de caducidad en 0 para caducar y eliminar la cookie
  setCookie(nombreCookie, contador, 0);
}

//Obtengo una cookie
count = getCookie('cookieContador');

//Comprueba que el valor de la cookie no sea mayor a 10
if (count >= 10) {
  count = 0;
  document.write(
    '<h1 style="color:red;">Cookie eliminada - Elimina los datos de cookie del navegador</h1>'
  );
  //Llamo a la funcion para caducar y eliminar la cookie
  caducarCookie(count);
}
count++;
document.write(
  '<h1 style="color:green;">Has visitado la pagina ' + count + ' veces</h1>'
);

//Actualizo la cookie existente con el valor del nuevo contador
setCookie('cookieContador', count);
