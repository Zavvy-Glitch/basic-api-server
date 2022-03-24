'use strict';

const validator = require('../lib/middleware/validator.js');
const error500 = require('../lib/error-handlers/500.js')


describe('Testing the Validator middleware', () => {
  let req = {method: 'GET', query: {}};
  let res = {status: 500};
  let next = jest.fn();
  
  it('Should throw an error if there is no name', () => {
    req.query.name = undefined;
    validator(req, res, next);

    expect(next).toHaveBeenCalledWith(error500);
    expect(res.status).toBe(500);

  });
});