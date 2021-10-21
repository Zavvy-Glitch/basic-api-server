'use strict';

//this is the entire SQL table w/defined columns
const Color = (sequelize, DataTypes) => sequelize.define('Color', {
  color: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Color;