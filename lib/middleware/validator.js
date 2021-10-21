'use strict';

const validator = require('../src/middleware/validator.js');


describe('Testing the Validator middleware', () => {
  let req = {method: 'GET', query: {}};
  let res = {status: 500};
  let next = jest.fn();
  
  it('Should throw an error if there is no name', () => {
    req.query.name = undefined;
    validator(req, res, next);

    expect(next).toHaveBeenCalledWith('No Name Provided');
    expect(res.status).toBe(500);

  });
});