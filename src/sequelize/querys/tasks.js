const tasksInit = require('../models/tasks.js').tasksInit;
const db = require('../db/db');
const Tasks = tasksInit(db);
const uuidv4 = require('uuid').v4;

async function findAll(req) {
  let allTasks = await Tasks.findAll()
    .then(tasks => {
      if (tasks) return tasks;
      return {error: 404, msg: 'No Tasks found'};
    })
    .catch(err => {
      return {error: 500, msg: err};
    });

  return allTasks;
}

module.exports.findAll = findAll;

async function findOne(req) {
  let [queryFields, bodyFields] = req.xssFilter(['id']);

  let erg = await Tasks.findByPk(
    Number(queryFields && queryFields.id ? queryFields.id : bodyFields.id),
  )
    .then(task => {
      if (task) return task.dataValues;
      return {error: 404, msg: 'No Customer found'};
    })
    .catch(err => {
      return {error: 500, msg: err};
    });

  return erg;
}

module.exports.findOne = findOne;

//TODO CHANGE TO SEARCH BY PARAMS NAME OR AND DESC
async function searchOne(req) {
  let queryParams = new Object();

  if (req.body || req.params || req.query) {
    let [queryFields, bodyFields] = req.xssFilter(['email']);

    queryParams = bodyFields ? bodyFields : queryFields;
  }

  if (!queryParams.email) queryParams.email = req.email;

  let erg = await Tasks.findOne({
    where: {
      email: queryParams && queryParams.email ? queryParams.email : null,
    },
  })
    .then(task => {
      if (task) return task.dataValues;
      return {error: 404, msg: 'No Customer found'};
    })
    .catch(err => {
      return {error: 500, msg: err};
    });
  return erg;
}

module.exports.searchOne = searchOne;

async function createOne(req) {
  let [queryFields, bodyFields] = req.xssFilter([
    'id',
    'name',
    'desc',
    'time',
    'start',
    'end',
  ]);

  let newTaskData = bodyFields
    ? JSON.parse(JSON.stringify(bodyFields))
    : JSON.parse(JSON.stringify(queryFields));

  let newTask = await Tasks.findOrCreate({
    where: {
      task_id: newTaskData.id,
    },
    defaults: {
      name: newTaskData.name,
      description: newTaskData.desc,
      start_date: newTaskData.start,
      end_date: newTaskData.end,
    },
  })
    .then(([task, created]) => {
      if (created) {
        return task.dataValues;
      }
      if (!created)
        return {error: 5, msg: 'Task with the same id already exists!'};
    })
    .catch(err => {
      return {error: 250, msg: err};
    });

  return newTask;
}

module.exports.createOne = createOne;

//TODO DO WE NEED CRUD DELTETE
async function deleteOne(req) {
  let [queryFields, bodyFields] = req.xssFilter(['id']);

  let deltedTask = await Tasks.destroy({
    where: {
      task_id: queryFields && queryFields.id ? queryFields.id : bodyFields.id,
    },
  })
    .then(task => {
      if (task) return {msg: 'Task deleted', Taks: req.params.task_id};
      return {error: 404, msg: `Task not found ${req.params.task_id}`};
    })
    .catch(err => {
      return {error: 500, msg: err};
    });
  return deltedTask;
}

module.exports.deleteOne = deleteOne;

async function updateAll(req) {
  let [queryFields, bodyFields] = req.xssFilter([
    'id',
    'name',
    'desc',
    'time',
    'start',
    'end',
  ]);

  let update = bodyFields
    ? JSON.parse(JSON.stringify(bodyFields))
    : JSON.parse(JSON.stringify(queryFields));

  update.task_id = update.id.split(',');
  update.start_date = update.start.split(',');
  update.end_date = update.end.split(',');
  update.time_spend = update.time.split(',');
  update.description = update.desc.split('&,');
  update.name = update.name.split('&,');
  delete update.desc;
  delete update.time;
  delete update.id;
  delete update.start;
  delete update.end;

  update.task_id.forEach(async (upTask, index) => {
    let taskUpdate = {
      name: update.name[index],
      description: update.description[index],
      time_spend: update.time_spend[index],
      start_date: update.start_date[index],
      end_date: update.end_date[index],
    };

    let updatedTask = await Tasks.update(taskUpdate, {
      where: {
        task_id: upTask,
      },
    })
      .then(task => {
        if (task && task[0] === 1) {
          return true;
        }
      })
      .catch(err => {
        return {error: 500, msg: err};
      });
  });

  return {msg: 'Tasks updated', result: update};
}

module.exports.updateAll = updateAll;
