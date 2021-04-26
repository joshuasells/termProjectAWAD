const express = require('express');
const router = express.Router();
const createAccountTemplate = require('../models/createAccountModels');

router.post('/createaccount', (request, response) => {
  const newUser = new createAccountTemplate({
    firstName: request.body.firstName,
    lastName: request.body.lastName,
    username: request.body.username,
    email: request.body.email,
    password: request.body.password
  });

  newUser.save()
    .then(data => {
      response.json(data);
    })
    .catch(error => {
      response.json(error);
    });
});

module.exports = router;