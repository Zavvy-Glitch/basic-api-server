'use strict';

module.exports = (sequelize, DataTypes) => {

  return sequelize.define('color', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hue: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });
};