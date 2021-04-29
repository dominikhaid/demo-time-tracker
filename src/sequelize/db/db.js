const {Sequelize} = require('sequelize');

//TODO CLEAN UP
let configDb;
try {
  configDb = require('../../../config/sql-conf.json');
} catch (error) {
  console.log(error);
}

if (process.env.NODE_ENV === 'development') {
  configDb = configDb.development;
} else if (process.env.NODE_ENV === 'production') {
  configDb = configDb.production;
} else if (process.env.NODE_ENV === 'test') {
  configDb = configDb.test;
} else {
  configDb = configDb.development;
}

module.exports = db = new Sequelize(
  configDb.database,
  configDb.username,
  configDb.password,
  {
    host: configDb.host,
    dialect:
      configDb.dialect /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' |'sqllite */,
    storage: configDb.storage,
  },
  {
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
      evict: 1000,
    },
  },
);
