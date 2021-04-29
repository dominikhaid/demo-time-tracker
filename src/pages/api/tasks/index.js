const db = require('src/sequelize/db/db');
const checkReqErrors = require('includes/status').checkReqErrors;
const Tasks = require('src/sequelize/querys/tasks');

async function auth(db) {
  return db
    .authenticate()
    .then(() => {
      return {msg: 'Server alive'};
    })
    .catch(err => {
      console.log(err);
      checkReqErrors({msg: 'Server down', err: err}, res);
    });
}

export default function requestHandler(req, res) {
  if (Object.keys(req.query).length > 0 || Object.keys(req.body).length > 0) {
    if (req.method === 'POST') {
      auth(db)
        .then(() => {
          Tasks.createOne(req).then(erg => {
            checkReqErrors(erg, res);
          });
        })
        .catch(err => {
          checkReqErrors({error: 'Something went wrong', err: err}, res);
        });
    } else if (req.method === 'PATCH') {
      auth(db)
        .then(() => {
          Tasks.updateAll(req).then(erg => {
            checkReqErrors(erg, res);
          });
        })
        .catch(err => {
          checkReqErrors({error: 'Something went wrong', err: err}, res);
        });
    } else if (req.method === 'DELETE') {
      auth(db)
        .then(() => {
          Tasks.deleteOne(req).then(erg => {
            checkReqErrors(erg, res);
          });
        })
        .catch(err => {
          checkReqErrors({error: 'Something went wrong', err: err}, res);
        });
    } else {
      checkReqErrors({error: 'No End Point to this Request'}, res);
    }
  } else {
    auth(db)
      .then(() => {
        Tasks.findAll(req).then(erg => {
          checkReqErrors(erg, res);
        });
      })
      .catch(err => {
        checkReqErrors({error: 'Something went wrong', err: err}, res);
      });
  }
}

export const config = {
  api: {
    externalResolver: true,
    bodyParser: false,
  },
};
