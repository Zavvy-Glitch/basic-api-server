'use strict';

require('dotenv').config();

const { Sequelize, DataTypes } = require('sequelize');
const personSchema = require('./person.js');
const colorSchema = require('./color.js');


const DATABASE_URL = process.env.NODE_ENV === 'test'
? 'sqlite::memory'
: process.env.DATABASE_URL || 'postgresql://localhost:5432/newapi-app';

const sequelizeOptions = process.env.NODE === 'production' ? {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },

} : {}

const sequelize = new Sequelize(DATABASE_URL, sequelizeOptions)
// const PeopleModel = personSchema(sequelize, DataTypes);
const ColorModel = colorSchema(sequelize, DataTypes);

module.exports = {
  sequelize,
  People: personSchema(sequelize, DataTypes),
  ColorModel,
};