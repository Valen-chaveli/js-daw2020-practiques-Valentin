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
