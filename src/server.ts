// Importamos nuestra aplicación que creamos en app.ts
// Es como traer toda la configuración y rutas que definimos anteriormente
import app from './app';

// Iniciamos nuestro servidor en el puerto 3000
// app.listen() es como decir "quiero que mi aplicación empiece a escuchar peticiones"
// El puerto 3000 es como la dirección donde la gente puede encontrar nuestra aplicación
app.listen(3000, () => {
  // Este mensaje aparecerá en la consola cuando el servidor esté listo
  // Es como una señal que nos dice "¡ya puedes empezar a usar la aplicación!"
  console.log('Servidor escuchando en http://localhost:3000');
});