import express from 'express';

const app = express();

/**
 * Maneja las solicitudes GET a la ruta raíz.
 * 
 * @name get/
 * @function
 * @param {Object} req - El objeto de la solicitud.
 * @param {Object} res - El objeto de la respuesta.
 */
app.get('/', (req, res) => {
  res.send('Hello World!');
});

/**
 * Maneja las solicitudes GET a la ruta /saludo/:nombre.
 * 
 * @name get/saludo/:nombre
 * @function
 * @param {Object} req - El objeto de la solicitud.
 * @param {Object} res - El objeto de la respuesta.
 */
app.get('/saludo/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  res.send(`Hola ${nombre}, ¿Como estas?`);
});

/**
 * Inicia el servidor y escucha en el puerto 3000.
 * 
 * @name listen
 * @function
 * @param {number} port - El puerto en el que el servidor escucha.
 * @param {Function} callback - La función a ejecutar una vez que el servidor esté escuchando.
 */
app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
