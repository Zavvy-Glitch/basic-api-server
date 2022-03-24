'use strict';

require ('dotenv').config();

const express = require('express');
const app = express();


const logger = require('./middleware/logger.js');
const peopleRouter = require('./routes/person.js');
const colorRouter = require('./routes/color.js')
const validator = require('./middleware/validator.js')
const error404 = require('./error-handlers/404.js');
const error500 = require('./error-handlers/500');

app.use(express.json());
app.use(peopleRouter);
app.use(colorRouter);
app.use(validator)
app.use(logger)

app.use('*', error404);
app.use(error500);

module.exports = {
  app,
  start: (PORT) => {
    app.listen(PORT, () => {
      console.log(`App is Running on ${PORT}`)
    })
  }
};