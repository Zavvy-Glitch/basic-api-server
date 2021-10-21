'use strict';

const app = require ('./src/server.js');
require('dotenv').config();

const PORT = process.env.PORT || 3333;

app.start(PORT);