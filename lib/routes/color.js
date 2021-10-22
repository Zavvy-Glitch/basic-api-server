'use strict';

const express = require('express');

const { color } = require('../models/index.js');

const router = express.Router();

router.get('/color', getAllColors);
router.get('/color/:id', getOneColor);
router.post('/color', addColor);
router.put('/color/:id', updateColor);
router.delete('/color/:id', deleteColor);

async function getAllColors(request, response, next) {
  try {
    const allColors = await color.findAll();
    response.status(200).send(allColors);
  } catch(e) {
    next(e);
  }
}

async function getOneColor(request, response, next) {
  try {
    const id = parseInt(request.params.id);
    const oneColor = await color.findOne({
      where: {id},
    });
    response.status(200).send(oneColor);
  } catch(e) {
    next(e);
  }
}


// async function addColor (req, res, next) {
//   const json = req.body;
//   let newRecord = await color.create(json);
//   res.send(newRecord);
// }

async function addColor(request, response, next) {
  try {
    const newColor = await color.create({
      color: request.body.type,
    });
    response.status(201).send(newColor);
  } catch(e) {
    next(e);
  }
}

async function updateColor(request, response, next) {
  try {
    const id = parseInt(request.params.id);
    const changeColor = await color.update({
      where: {id},
    });
    response.status(200).send(changeColor);
  } catch(e) {
    next(e);
  }
}

async function deleteColor(request, response, next) {
  try {
    const id = parseInt(request.params.id);
    const removeColor = await color.destroy({
      where: {id},
    });
    response.status(200).send(removeColor);
  } catch(e) {
    next(e);
  }
}

module.exports = router;
