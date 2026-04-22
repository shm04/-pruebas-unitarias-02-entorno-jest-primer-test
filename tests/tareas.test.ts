// Importamos supertest, que es una herramienta que nos ayuda a probar APIs
// Es como un navegador virtual que puede hacer peticiones a nuestra aplicación
import request from "supertest";

// Importamos nuestra aplicación para poder probarla
// Es como traer toda nuestra aplicación para ver si funciona correctamente
import app from "../src/app";

// describe nos ayuda a agrupar pruebas relacionadas
// En este caso, todas las pruebas que verifiquen la ruta GET /tareas
describe("GET /tareas", () => {
  // it define una prueba individual
  // El texto describe lo que esperamos que haga nuestra API
  it("Debe responder con un arreglo de tareas", async () => {
    // Hacemos una petición GET a /tareas usando supertest
    // Es como si un navegador visitara http://localhost:3000/tareas
    const response = await request(app).get("/tareas");

    // Verificamos que la respuesta sea correcta:
    // 1. El código de estado debe ser 200 (todo salió bien)
    expect(response.status).toBe(200);
    
    // 2. La respuesta debe ser un arreglo
    expect(Array.isArray(response.body)).toBe(true);
    
    // 3. El arreglo debe tener al menos una tarea
    expect(response.body.length).toBeGreaterThan(0);
    
    // 4. La primera tarea debe tener una propiedad 'titulo'
    expect(response.body[0]).toHaveProperty("titulo");
    
    // 5. La primera tarea debe tener una propiedad 'completada'
    expect(response.body[0]).toHaveProperty("completada");

    // 6. La primera tarea debe tener una propiedad 'descripcion'
    // Esta propiedad no existe, y por lo tanto la prueba fallará
    expect(response.body[0]).toHaveProperty("descripcion");
  });
});