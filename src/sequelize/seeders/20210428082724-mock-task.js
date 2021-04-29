'use strict';

var data = require('../../../database/task-mock.json');
var tasksInit = require('../models/tasks.js').tasksInit;
const db = require('../db/db');
const Tasks = tasksInit(db);

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // data.forEach(element => {
    //   element.email = element.email.toLowerCase();
    //   //element.password = bcrypt.hash(element.password, bcrypt.genSaltSync(8));
    // });

    // Tasks.beforeCreate(async (user, options) => {
    //   const salt = await bcrypt.genSalt(8);
    //   user.password = await bcrypt.hash(user.password, salt);
    // });

    return await Tasks.bulkCreate(data, {returning: true});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tasks', null, {});
  },
};
