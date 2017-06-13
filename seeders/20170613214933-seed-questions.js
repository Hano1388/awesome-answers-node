'use strict';
const faker = require('faker');
// const models = require('../models');
// 👇 used destructuring to grab Question
// properly from model object
const { Question } = require('../models');
// 👇 Array.form({length:100}) created an array that contains 100 empty element
const questions = Array.from({length:100})
  .map(() => {
    // Question.create and all sequelized query methods
    // return a promise. this means that we don't create any of them
    return Question.create({
      title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
      description: faker.hacker.phrase()
    })
  })
module.exports = {
  up: function (queryInterface, Sequelize) {
    // return models.Question // We used destructuring above so we can use(Question)
    // when creating seeds with Sequelize,
    // the up and down methods must return a Promise
    // this is how sequelize can tell that your seeds finished excuting.
    return Promise.all(questions);
  },

  down: function (queryInterface, Sequelize) {
    return Question.destroy({where: {}}) // that destroy every question if run drop table question
  }
};
