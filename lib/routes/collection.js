'use strict';

const express = require('express');
const router = express.Router();
const { color, person } = require('../models');

const Collection = require('../models/collection-class.js');

const modelMap = {
  color: new Collection(color),
  person: new Collection(person),
};

router.use('/:model', function(req, res, next) {

  const model = modelMap[req.params.model];

  if(!model) {
    next('No Model Located');
  }

  req.model = model;
  console.log(req.model);
  next();
});

router.get('/:model', async (req, res, next) => {
  const model = req.model;
  let records = await model.read();
  res.send(records);
});

router.get('/:model/:id', async (req, res, next) => {
  const model = req.model;
  const id = req.params.id;
  let record = await model.read(id);
  res.send(record);
});

router.post('/:model', async (req, res, next) => {
  const model = req.model;
  const json = req.body;
  let newRecord = await model.create(json);
  res.send(newRecord);
});

router.put('/:model/:id', async (req, res, next) => {
  const model = req.model;
  const id = req.params.id;
  let record = await model.update(id);
  res.send(record);
});

router.delete('/:model/id', async (req, res, next) => {
  const model = req.model;
  const id = req.params.id;
  let record = await model.delete(id);
  res.send(record);
});

module.exports = router;