'use strict';

module.exports = (error, request, response, next) => {
  response.status(404).send('Bad Route');
  response.end();
};
