import request from "supertest";
import app from "../src/app";

describe("GET /tareas", () => {
  it("Debe responder con un arreglo de tareas", async () => {
    const response = await request(app).get("/tareas");

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
    expect(response.body[0]).toHaveProperty("titulo");
    expect(response.body[0]).toHaveProperty("completada");
    expect(response.body[0]).toHaveProperty("descripcion");
  });
});

describe("POST /tareas", () => {
  it("Debe crear una tarea cuando se envía título y descripción", async () => {
    const nuevaTarea = {
      titulo: "Aprender mocks",
      descripcion: "Estudiar mocks y stubs en Jest"
    };

    const response = await request(app).post("/tareas").send(nuevaTarea);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body.titulo).toBe(nuevaTarea.titulo);
    expect(response.body.descripcion).toBe(nuevaTarea.descripcion);
    expect(response.body.completada).toBe(false);
  });

  it("Debe responder con 400 si falta algún campo obligatorio", async () => {
    const tareaInvalida = {
      titulo: "Tarea sin descripción"
    };

    const response = await request(app).post("/tareas").send(tareaInvalida);

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("mensaje");
    expect(response.body.mensaje).toMatch(/obligatorios/i);
  });
});