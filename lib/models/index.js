'use strict';

require('dotenv').config();

const { Sequelize, DataTypes } = require ('sequelize');
const PersonModel = require('./person.js');
const ColorModel = require('./color.js');

console.log(process.env.NODE_ENV);

let DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory';
// let postgresDatabase = 'postgres://localhost:5432/';

//postgresql://username:pass@localhost:5432/db-name

const options = process.env.NODE_ENV === 'production'
  ? {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
  : {};


const sequelizeInstance = new Sequelize(DATABASE_URL, options);

const personTable = PersonModel(sequelizeInstance, DataTypes);
const colorTable = ColorModel(sequelizeInstance, DataTypes);


module.exports = {
  db: sequelizeInstance,
  person: personTable,
  color: colorTable,
};