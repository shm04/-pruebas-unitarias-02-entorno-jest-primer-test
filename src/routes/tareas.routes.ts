// Importamos express para crear nuestro router
// El router nos ayuda a organizar todas las rutas (URLs) de nuestra aplicación
import express from 'express';

// Importamos la función obtenerTareas que creamos en el controlador
// Esta función se encargará de manejar la lógica cuando alguien pida ver las tareas
import { obtenerTareas } from '../controllers/tareas.controller';

// Creamos un nuevo router usando express.Router()
// Es como crear un mapa de todas las rutas que vamos a manejar
const router = express.Router();

// Aquí definimos que cuando alguien haga una petición GET a /tareas
// (por ejemplo: http://localhost:3000/tareas)
// se ejecutará la función obtenerTareas que importamos
router.get('/tareas', obtenerTareas);

// Exportamos el router para poder usarlo en app.ts
// Es como decir: "aquí tienes todas las rutas que definimos, úsalas en la aplicación principal"
export default router;