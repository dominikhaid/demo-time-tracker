const {Sequelize, DataTypes} = require('sequelize');

module.exports.tasksInit = function (db) {
  return db.define('tasks', Fields, TableOptions);
};

const TableOptions = {
  modelName: 'Tasks',
  comment: 'all tasks',
  defaultScope: {},
  freezeTableName: true,
  // hooks: {
  //   beforeCreate: async function (user) {
  //     const salt = await bcrypt.genSalt(8);
  //     user.password = await bcrypt.hash(user.password, salt);
  //     user.email = user.email.toLowerCase();
  //   },
  //   beforeUpdate: async function (user) {
  //     const salt = await bcrypt.genSalt(8);
  //     if (user.password) user.password = await bcrypt.hash(user.password, salt);
  //     if (user.email) user.email = user.email.toLowerCase();
  //   },
  //   beforeBulkCreate: async function (users) {
  //     for (const user of users) {
  //       if (user.password) {
  //         const salt = await bcrypt.genSalt(8);
  //         user.password = await bcrypt.hash(user.password, salt);
  //       }
  //       if (user.email) user.email = user.email.toLowerCase();
  //     }
  //   },
  //   beforeBulkUpdate: async function (users) {
  //     if (users.attributes.password) {
  //       const salt = await bcrypt.genSalt(8);
  //       users.attributes.password = await bcrypt.hash(
  //         users.attributes.password,
  //         salt,
  //       );
  //     }
  //     if (users.attributes.email)
  //       users.attributes.email = users.attributes.email.toLowerCase();
  //   },
  // },
};

const Fields = {
  task_id: {
    type: DataTypes.STRING(32),
    unique: true,
    primaryKey: true,
    allowNull: false,
    comment: 'single task unique id',
    validate: {
      notNull: {msg: 'No task id provided'},
    },
  },
  name: {
    type: DataTypes.STRING(64),
    comment: 'name of single task',
    allowNull: true,
  },
  description: {
    type: DataTypes.STRING(264),
    comment: 'description of single task',
    allowNull: true,
  },
  start_date: {
    type: DataTypes.DATE,
    comment: 'start of single task',
    allowNull: true,
  },
  end_date: {
    type: DataTypes.DATE,
    comment: 'end of single task',
    allowNull: true,
    // validation: {
    //   isDate: true,
    // },
  },
  time_spend: {
    type: DataTypes.FLOAT,
    comment: 'time spen on a single task',
    allowNull: true,
    // validation: {
    //   isDate: true,
    // },
  },
  createdAt: {type: DataTypes.DATE, defaultValue: Sequelize.NOW},
  updatedAt: {type: DataTypes.DATE, defaultValue: Sequelize.NOW},
};

module.exports.Fields = Fields;
