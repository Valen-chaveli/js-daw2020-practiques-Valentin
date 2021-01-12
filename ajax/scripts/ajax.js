const BASE_URL = 'https://reqres.in/api/users/';
const POSTMAN_URL = 'https://httpbin.org/post';
const status = document.querySelector('#status');

//Código principal dentro del evento load
// para asegurar la carga de los componentes
window.addEventListener('load', (ev) => {
  let numsecs = document.getElementById('numsecs');
  let user = document.getElementById('user');
  let boton = document.querySelector('button');

  boton.addEventListener('click', (ev) => {
    ev.preventDefault();
    clearFields();
    procesarFetch(numsecs.value, user.value);
  });
});

/**
 * Limpia texto y la información de los campos
 */
function clearFields() {
  document.querySelectorAll('span').forEach((element) => {
    element.innerHTML = '';
  });
}

/**
 * Realiza la llamada a las API para obtener los datos pedidos y mostrarlos en el documento
 * @param {Number} numsecs Indica el tiempo de retraso en segundos para la peticion
 * @param {Number} user Indica el Id del usuario que se quiere obtener
 */
function procesarFetch(numsecs, user) {
  //Realiza la llamada a la API
  fetch(`${BASE_URL}${user}?delay=${numsecs}`)
    .then((response) => {
      //Si el estado es OK devuelve una promesa con los datos en json
      if (response.ok) {
        return response.json();
        //Si el estado es incorrecto se crea un error y se salta al catch
      } else {
        status.textContent = response.status;
        throw new Error('Error al obtener los datos');
      }
    })
    .then((data) => {
      //---- OBTENGO ELEMENTOS DEL BODY ----
      const txtId = document.querySelector('#id');
      const txtEmail = document.querySelector('#email');
      //-------------------------------------------

      //--- MUESTRO LOS DATOS ENVIADOS DESDE EL SERVIDOR----
      txtId.textContent = data.data.id;
      txtEmail.textContent = data.data.email;
      //------------------------------------------------

      //REALIZO LA SEGUNDA LLAMADA QUE HARÁ UN POST DEL USUARIO ENCONTRADO
      fetch(POSTMAN_URL, {
        method: 'POST', //Para enviar datos
        body: JSON.stringify(data.data),
        headers: {
          'Content-type': 'application/json',
        },
      })
        .then((response) => {
          if (response.ok) {
            //Muestro el estado al usuario
            status.textContent = response.status;
            return response.json();
          } else throw new Error('Error al agregar el usuario');
        })
        .then((dataPost) => {
          const idName = document.querySelector('#name');
          idName.textContent = dataPost.json.first_name;
        })
        .catch((error) => console.log(error));
    })
    .catch((error) => {
      console.log(error);
    });
}
