'use strict';

const { sequelize } = require('./lib/collection')
const server = require('./lib/server.js');
require('dotenv').config();
const PORT = process.env.PORT || 3333;

sequelize.sync()
  .then(() => {
    console.log('DB Initiated!!!');
    server.start(PORT)
  })
  .catch(err => {
    console.error(err);
  });