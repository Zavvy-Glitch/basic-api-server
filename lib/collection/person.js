'use strict';

const Person = (sequelize, DataTypes) => sequelize.define('Person', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    job: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

module.exports = Person