'use strict';

require('dotenv').config();
const app = require('./lib/server.js');
const { db } = require('./lib/models/index.js');

// const PORT = process.env.PORT || 3333;

db.sync();
app.start;