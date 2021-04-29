const cors = require('cors');

/**
 * @desc define cors setup
 * @param {Object} server express instance
 */
module.exports.startCors = function (server) {
  var whitelist = process.env.ORIGINS.split(',');
  var corsOptions = {
    origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    optionsSuccessStatus: 200,
  };

  server.use(cors(corsOptions), (req, res, next) => {
    next();
  });
};
module.exports.cors = cors;
