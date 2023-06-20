const request = require('supertest');
const server = require('../index');

describe('Operaciones CRUD de cafes', () => {
  it('Obtiene un status code 200', async () => {
    const response = await request(server).get('/cafes').send();
    const status = response.statusCode;
    expect(status).toBe(200);
  });

  it('Tipo de dato recibido es un array', async () => {
    const { body } = await request(server).get('/cafes').send();
    const cafe = body;
    expect(cafe).toBeInstanceOf(Array);
  });

  it('Dato recibido tiene al menos un elemento', async () => {
    const { body } = await request(server).get('/cafes').send();
    const cafe = body;
    expect(cafe.length).toBeGreaterThan(0);
  });

  it('Obitene codigo 404 al eliminar cafe con id inexistente', async () => {
    const idInexistente = 1000;
    const response = await request(server).delete(`/cafes/${idInexistente}`);

    expect(response.status).toBe(404);
    expect(response.body).toEqual({
      message: 'No se encontró ningún cafe con ese id',
    });
  });

  const idRandom = () => Math.floor(Math.random() * 1000);

  it('Agregar un nuevo café', async () => {
    const id = idRandom();
    const cafe = { id, nombre: 'Cafe de prueba' };
    const { body: cafes } = await request(server).post('/cafes').send(cafe);
    expect(cafes).toContainEqual(cafe);
  });

  it('Obtiene código 201 al agregar un nuevo café', async () => {
    const id = idRandom();
    const cafe = { id, nombre: 'Cafe de prueba' };
    const response = await request(server).post('/cafes').send(cafe);
    const status = response.statusCode;
    expect(status).toBe(201);
  });

  it('Obtiene código 404 al actualizar café con id distinto en parámetros y payload', async () => {
    const id = idRandom();
    const cafe = { id, nombre: 'Cafe de prueba' };
    const response = await request(server).put('/cafes/100').send(cafe);
    const status = response.statusCode;
    expect(status).toBe(404);
  });
});
