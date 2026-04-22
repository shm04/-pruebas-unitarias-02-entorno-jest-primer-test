// Necesitamos importar estos tipos de Express para poder trabajar con las peticiones HTTP
// Request: contiene toda la información que nos envía el cliente (como datos del formulario, parámetros, etc.)
// Response: nos permite enviar respuestas al cliente (como datos, mensajes de error, etc.)
import { Request, Response } from 'express';

// Por ahora, en lugar de usar una base de datos, guardamos las tareas en un arreglo
// Tenemos un arreglo de objectos en donde cada objeto representa una tarea
const tareas = [
  { id: 1, titulo: "Estudiar pruebas", completada: false, descripcion: "Estudiar pruebas unitarias usando Jest" },
  { id: 2, titulo: "Hacer ejercicio", completada: true, descripcion: "Correr 30 minutos a 10km/h" },
];

// Esta función se ejecuta cuando alguien hace una petición GET a nuestra API
// Por ejemplo, cuando un navegador o una app móvil quiere ver la lista de tareas
// en el archivo app.ts vamos a usar esta función para obtener las tareas
export function obtenerTareas(req: Request, res: Response) {
  // Con res.json() convertimos nuestro arreglo de tareas a formato JSON
  // y lo enviamos como respuesta al cliente
  // Es como decir: "aquí tienes la lista de tareas que pediste"
  res.json(tareas);
}