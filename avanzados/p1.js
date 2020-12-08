/**
 * Define un temporizador que toma el tiempo pasado por parametro, tiempo que se tardará en ejecutar la tarea
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

//Si la promesa se cumple crea un elementro <p> en el body con un mensaje de exito
//Si no, mensaje de error
tiempo(5000)
  .then((respuesta) => {
    let p = document.createElement('p');
    p.innerHTML = respuesta;
    document.body.appendChild(p);
  })
  .catch((error) => {
    let p = document.createElement('p');
    p.innerHTML = error.message;
    document.body.appendChild(p);
  });
