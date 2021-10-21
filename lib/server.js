'use strict';

require ('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3333;

const getAllPersons = require('./routes/person');
const getAllColors = require('./routes/color');

const logger = require('./middleware/logger.js');
const error404 = require('./error-handlers/404.js');
const error500 = require('./error-handlers/500');

app.use(express.json());
app.use(logger);

// routes for person
app.get('/person', getAllPersons);
app.get('/person/:id');
app.post('/person');
app.put('/person/:id');
app.delete('/person/:id');

//routes for color
app.use(getAllColors);


app.use(error404);
app.use(error500);

module.exports = {
  app,
  start: app.listen(PORT, () => console.log(`Server is Running on ${PORT}`)),
};