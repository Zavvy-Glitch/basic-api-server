'use strict';

const express = require('express');

const { color } = require('../models/index.js');

const router = express.Router();

router.get('/color', getAllColors);
router.get('/color/:id', getOneColor);
router.post('/color', addColor);
router.put('/color/:id', updateColor);
router.delete('/color/:id', deleteColor);

async function getAllColors(request, response) {
  let allColors = await color.findAll();
  response.status(200).send(allColors);
}

async function getOneColor(request, response) {
  const id = parseInt(request.params.id);
  let oneColor = await color.findOne({where: {id}});
  response.status(200).send(oneColor);
}

async function addColor(request, response) {
  const newColor = await color.create();
  response.status(200).send(newColor);
}

async function updateColor(request, response) {
  const id = parseInt(request.params.id);
  let changeColor = color.findOnebyIdandUpdate({where: {id}});
  response.status(200).send(changeColor);
}

async function deleteColor(request, response) {
  const id = parseInt(request.params.id);
  let removeColor = color.destroy({where: {id}});
  response.status(200).send(removeColor);
}

module.exports = router;
