'use strict';

const supertest = require('supertest');
const server = require('../lib/server.js');
const { sequelize } = require('../lib/collection');
const request = supertest(server.app);

beforeAll(async () => {
  await sequelize.sync();
});

afterAll(async () => {
  await sequelize.drop();
});

describe('Testing our Server API Router', () => {
  
  test('Should create a person on POST /person', async () => {
    const response = await request.post('/person').send({
      name: 'NAME',
      age: 22,
      job: 'JOB',

    });

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('NAME');
    expect(response.body.age).toEqual(22);
    expect(response.body.job).toEqual('JOB');
  });
  
  test('Should respond with All Persons on GET /person', async () => {
    const response = await request.get('/person');

    expect(response.status).toEqual(200);
    expect(response.body.length).toBe(1);
  });
  
  test('Should respond with One Person on GET /person/:id', async () => {
   const response = await request.get('/person/:id');

   expect(response.status).toEqual(200);
  });

  test('Should respond with Updated Person on PUT /person:id', async () => {

  });

  test('Should respond with Deleted Person on DELETE /person:id', async () => {

  });
  
  test('Should respond with All Colors on GET /color', async () => {
    const response = await request.get('/color');

    expect(response.status).toEqual(200);
    expect(response.body.length).toBe(0);
  });

  test('Should respond with One Color on GET /color:id', async () => {

  });

  test('Should create a color on POST /color', async () => {
    const response = await request.post('/color').send({
      name: 'BLUE',
      hue: 'SKY',

    });

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('BLUE');
    expect(response.body.hue).toEqual('SKY');
  });

  test('Should respond with Updated Color on PUT /color:id', async () => {

  });

  test('Should respond with Deleted Color on DELETE /color:id', async () => {

  });
});