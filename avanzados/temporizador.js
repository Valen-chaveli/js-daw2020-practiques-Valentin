/**
 * Define un temporizador que toma el tiempo pasado por parametro para resolver una tarea
 * @param {number} temp Numero en milisegundos que indica que tardará en ejecutar la funcion
 */
function tiempo(temp) {
  var promesa = new Promise((resolver, reject) => {
    setTimeout(() => {
      resolver('Tiempo concluido');
    }, temp);

    setTimeout(() => {
      reject(new Error('El tiempo no va bien'));
    }, temp * 2);
  });
  return promesa;
}
/**
 * Realiza una cuenta atrás y la escribe en pantalla
 *
 * La cuenta atrás es personalizavble dependiendo el numero en milisegundos que le posemos
 *
 * @param {number} numeroInicio El numero con el que se inicia el contador
 * @param {Node} elementoEscribir El elemento en el que se va a escribir la informacion del contador
 * @param {number} intervalo Cada cuanto tiempo en milisegundos se va a decrementar el contador
 * @param {Function} funcionExecutar Funcion callback que se ejecutará cuando el contador termine
 */
async function cuenta(
  numeroInicio,
  elementoEscribir = document.querySelector('body'),
  intervalo = 1000,
  funcionExecutar = () => {}
) {
  var contador = numeroInicio;

  do {
    let promesa = await new Promise((resolver) => {
      setTimeout(() => resolver('Exito'), intervalo);
    }) //Cuando se resuelve se ejecuta el resolv y luego vuelve a ejecutarse en bucle
      .then((resolv) => {
        elementoEscribir.textContent = contador--;
      })
      .catch((reject) => {
        console.log(reject.message);
      });
    //Cuando llega a 0 se termina el bucle
  } while (contador >= 0);

  //Ejecuto la funcion de callback cuando se sale del bucle
  funcionExecutar();
}

//Se indica que funciones del fichero son exportables
export { tiempo, cuenta };
