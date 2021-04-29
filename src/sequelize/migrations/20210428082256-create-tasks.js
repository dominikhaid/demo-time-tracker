'use strict';
var Fields = require('../models/tasks.js').Fields;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Tasks', Fields);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Tasks');
  },
};
