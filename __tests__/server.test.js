'use strict';

const { db } = require('../lib/models');
const supertest = require('supertest');
const server = require('../lib/server.js');
const request = supertest(server.app);

beforeAll(async () => {
  await db.sync();
});

afterAll(async () => {
  await db.drop();
});

describe('Testing our Server', () => {
  
  it('Should respond with Add Person on POST /person', async () => {

    let response = await request.post('/person').send({
      name: 'TEST NAME',
      title: 'TEST TITLE',
    });

    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
  });
  
  it('Should respond with All Persons on GET /person', async () => {
  
  });
  
  it('Should respond with One Person on GET /person:id', async () => {
  
  });

  it('Should respond with Updated Person on PUT /person:id', async () => {

  });

  it('Should respond with Deleted Person on DELETE /person:id', async () => {

  });
  
  it('Should respond with All Colors on GET /color', async () => {

  });

  it('Should respond with One Color on GET /color:id', async () => {

  });

  it('Should respond with Add Color on POST /color', async () => {

  });

  it('Should respond with Updated Color on PUT /color:id', async () => {

  });

  it('Should respond with Deleted Color on DELETE /color:id', async () => {

  });
});