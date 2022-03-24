'use strict';

const express = require('express');

const { ColorModel } = require('../collection/index.js');

const router = express.Router();

router.post('/color', async (req, res) => {
    let newColor = req.body;
    let responseData = await ColorModel.create(newColor);
    res.status(200).send(responseData);
  });

router.get('/color', async (req, res) =>{
  let allColors = await ColorModel.findAll();
  res.status(200).send(allColors);
})

router.get('/color/:id', async (req, res) => {
  let oneColor = await ColorModel.findOne(parseInt(req.params.id));
  res.status(200).send(oneColor);
})

router.put('/color/:id', async (req, res, next) => {
  let updateColor = await ColorModel.update({
    name: req.body.name,
    hue: req.body.hue,
    }, { where: {id: req.params.id}
  });
  res.status(200).send(updateColor);

router.delete('/color/:id', async (req, res, next) => {
  let deleteColor = await ColorModel.delete({
    where: { id: req.params.id}
  });
  res.status(200).send(deleteColor);
})

})

module.exports = router;
