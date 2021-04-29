const db = require('src/sequelize/db/db');
const checkReqErrors = require('includes/status').checkReqErrors;
const Tasks = require('src/sequelize/querys/tasks');
const signInJWT = require('includes/jwt').signInJWT;

async function auth(db) {
  return db
    .authenticate()
    .then(() => {
      return {msg: 'Server alive'};
    })
    .catch(err => {
      checkReqErrors({msg: 'Server down', err: err});
    });
}

export default function requestHandler(req, res) {
  if (req.method === 'POST') {
    auth(db)
      .then(() => {
        Tasks.createOne(req).then(erg => {
          if (!erg.error) erg.accessToken = signInJWT(erg);
          delete erg.password;
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
  } else {
    checkReqErrors({error: 'No End Point to this Request'}, res);
  }
}

export const config = {
  api: {
    externalResolver: true,
    bodyParser: false,
  },
};
