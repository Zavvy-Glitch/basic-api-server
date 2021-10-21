'use strict';

const { db, person, color } = require('../lib/models');

beforeAll(async() => {
  await db.sync();
});

afterAll(async () => {
  await db.drop();
});

describe('Testing our Sequelize model', () => {

  it('Should be able to create a Person', async () => {
    let newPerson = await person.create({
      name: 'Some Name',
      title: 'Some Title',
    });
    expect(newPerson.id).toBe(1);
    expect(newPerson.name).toBe('Some Name');
  });

  it('Should be able to create a Color', async () => {
    let newColor = await color.create({
      color: 'Some Color',
    });
    expect(newColor.id).toBe(1);
    expect(newColor.color).toBe('Some Color');
  });
});