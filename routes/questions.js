const express = require('express');
const router = express.Router();
const { Question } = require('../models');

// Question#index PATH: /question/ METHOD: GET
router.get('/', (req, res) => {
  Question
    .findAll()
    .then(questions => {
      // passing a second argument to the render of the response
      // object will make available all its properties as variables
      // inside the template
      res.render('questions/index', { questions: questions });
    });
});
module.exports = router;
