// Importamos express, que es el framework que usamos para crear nuestra API
// Es como traer todas las herramientas que necesitamos para construir nuestra aplicación web
import express from 'express';

// Importamos las rutas que definimos para las tareas
// Es como traer el mapa de rutas que creamos en tareas.routes.ts
import tareasRoutes from './routes/tareas.routes';

// Creamos nuestra aplicación usando express
// Es como decir "quiero crear una nueva aplicación web"
const app = express();

// Le decimos a nuestra aplicación que puede recibir datos en formato JSON
// Esto es necesario para que podamos recibir información de formularios o apps móviles
// Por ejemplo, cuando alguien quiera crear una nueva tarea
app.use(express.json());

// Conectamos las rutas de tareas a nuestra aplicación
// Es como decir "quiero que mi aplicación use todas las rutas que definimos para las tareas"
// Ahora cuando alguien visite /tareas, la aplicación sabrá qué hacer
app.use(tareasRoutes);

// Exportamos nuestra aplicación para poder usarla en el servidor
// Es como decir "aquí tienes mi aplicación completa, úsala para crear el servidor"
export default app;