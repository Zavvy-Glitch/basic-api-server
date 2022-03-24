'use strict';

const express = require('express');

const { People } = require('../collection/index.js');

const router = express.Router();

router.post('/person', async (req, res) => {
  let newPerson = req.body;
  let responseData = await People.create(newPerson);
  res.status(200).send(responseData)
});

router.get('/person', async (req, res, next) => {
  let allPersons = await People.findAll();
  res.status(200).send(allPersons);
});

router.get('/person/:id', async (req, res, next) => {
  let onePerson = await People.findByPk(parseInt(req.params.id));
  res.status(200).send(onePerson);
})

router.put('/person/:id', async (req, res, next) => {
  let updatePerson = await People.update({
    name: req.body.name,
    age: req.body.age,
    job: req.body.job,
    }, { where: { id: req.params.id }
  });
  res.status(200).send(updatePerson);
})

router.delete('/person/:id', async (req, res, next) => {
  let deletePerson = await People.destroy({
    where: { id: req.params.id}
  });
  res.sendStatus(200).send(deletePerson);
})

module.exports = router;