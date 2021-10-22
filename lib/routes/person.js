'use strict';

const express = require('express');

const { person } = require('../models/index.js');

const router = express.Router();

router.get('/person', getAllPersons );
router.get('/person/:id', getOnePerson);
router.post('/person', addPerson);
router.put('/person/:id', updatePerson);
router.delete('/person/:id', deletePerson);

async function getAllPersons(request, response) {
  let allPersons = await person.findAll();
  response.status(200).send(allPersons);
}

async function getOnePerson(request, response) {
  const id = parseInt(request.params.id);
  let onePerson = await person.findOne({where: {id}});
  response.status(200).send(onePerson);
}

// async function addPerson (req, res, next){
//   const json = req.body;
//   let newRecord = await person.create(json);
//   res.send(newRecord);
// }

async function addPerson(request, response) {
  const newPerson = await person.create();
  response.status(200).send(newPerson);
}

async function updatePerson(request, response) {
  const id = parseInt(request.params.id);
  let changePerson = person.findOnebyIdandUpdate({where: {id}});
  response.status(200).send(changePerson);
}

async function deletePerson(request, response) {
  const id = parseInt(request.params.id);
  let removePerson = person.destroy({where: {id}});
  response.status(200).send(removePerson);
}

module.exports = router;