const express = require('express');
const multer = require('multer');
var upload = multer({dest: './uploads/'});
const server = express();

server.use(express.json());
server.use(express.urlencoded({extended: true}));

server.get('*', upload.single('file'), function (req, res, next) {
  req.xssFilter = require('../includes/xssFilter');

  next();
});

server.post('*', upload.single('file'), function (req, res, next) {
  req.xssFilter = require('../includes/xssFilter');

  next();
});

server.delete('*', upload.single('file'), function (req, res, next) {
  req.xssFilter = require('../includes/xssFilter');
  next();
});

server.patch('*', upload.single('file'), function (req, res, next) {
  req.xssFilter = require('../includes/xssFilter');

  next();
});

server.put('*', upload.single('file'), function (req, res, next) {
  req.xssFilter = require('../includes/xssFilter');
  next();
});

server.use(express.static(`../${process.env.PUBLIC_FOLDER}`));

let serverOptions;
try {
  serverOptions = require('../../config/server-conf.js');
} catch (error) {
  throw new Error('Server config not found in ./config');
}

const startDotenv = require('./env').startDotenv;
startDotenv();

const startMorgan = require('./morgan').startMorgan;
startMorgan(server);

if (serverOptions.webpack) {
  const webpack = require('webpack'),
    webpackDevMiddleware = require('webpack-dev-middleware'),
    webpackHotMiddleware = require('webpack-hot-middleware');

  const webpackDevConfig = require(`../webpack/config/webpack.${
    process.env.NODE_ENV ? process.env.NODE_ENV : 'development'
  }.js`);

  var compiler = webpack(webpackDevConfig(process.env));

  server.use(
    webpackDevMiddleware(compiler, {
      publicPath: webpackDevConfig.publicPath,
      stats: 'errors-only',
      noInfo: true,
      requestTimeout: 200000,
    }),
  );

  server.use(webpackHotMiddleware(compiler));
}

if (serverOptions.helment) {
  const startHelmet = require('./helmet').startHelmet;
  startHelmet(server);
}

if (serverOptions.cors) {
  const startCors = require('./cors').startCors;
  startCors(server);
}

if (serverOptions.jwt) {
  const checkReqErrors = require('../includes/status').checkReqErrors;
  const jsonWebToken = require('jsonwebtoken');
  const myJWTSecretKey = require('../includes/jwt').myJWTSecretKey;

  server.use('/api/auth', (req, res, next) => {
    try {
      if (!req.headers.authorization) {
        checkReqErrors({error: 'You are not Authorized'}, res);
        return;
      }
      jsonWebToken.verify(
        req.headers.authorization.replace(/^Bearer\s/, ''),
        myJWTSecretKey(),
      );
      next();
    } catch (error) {
      console.debug('JWT LOGIN ERROR', error);
      checkReqErrors({error: error}, res);
    }
  });
}

module.exports.server = server;
module.exports.serverOptions = serverOptions;
