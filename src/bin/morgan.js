const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

/**
 * @desc log http errors
 * @param {Function} server express instance
 */
module.exports.startMorgan = function (server) {
  // log only 4xx and 5xx responses to console

  server.use(
    morgan('combined', {
      skip: function (req, res) {
        return res.statusCode < 400;
      },
      stream: fs.createWriteStream(
        path.join(__dirname, '../../log/access.log'),
        {
          flags: 'a',
        },
      ),
    }),
  );
};
