'use strict';

//this is the entire SQL table w/defined columns
const Person = (sequelize, DataTypes) => sequelize.define('Person', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = Person;