'use strict';

require ('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3333;

const apiv1 = require('./routes/collection.js');
const person = require('./routes/person.js');
const color = require('./routes/color.js');

const logger = require('./middleware/logger.js');
const error404 = require('./error-handlers/404.js');
const error500 = require('./error-handlers/500');

app.use(express.json());
app.use(logger);


app.use('/api', apiv1);
app.use('/person', person);
app.use('/color', color);




app.use(error404);
app.use(error500);

module.exports = {
  app,
  start: app.listen(PORT, () => console.log(`Server is Running on ${PORT}`)),
};