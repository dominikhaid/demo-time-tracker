const moment = require('moment');

/**
 * @desc resolve server resquest
 * @param {Object} obj {code:"",msg:"" || error:""}
 * @param {Object} res express response object
 * @param {Function} callback optional callback
 * @returns response
 */

const checkReqErrors = (obj, res, callback) => {
  if (obj.code || obj.error) return res.status(200).jsonp({error: obj});

  if (callback === 'break') return;

  return res.status(200).jsonp({
    success: obj,
    callback: !callback ? false : callback(obj),
  });
};

module.exports.checkReqErrors = checkReqErrors;

/**
 * @desc create jwt token
 * @param {Object} user
 * @param {Function} jsonWebToken
 * @param {String} myJWTSecretKey
 * @returns jwt token
 */
const signInJWT = (user, jsonWebToken, myJWTSecretKey) => {
  const userJWT = {
    email: user.email,
    id: user.uid,
    name: user.displayName,
    role:
      user.customClaims && user.customClaims.admin
        ? 'adminApiRequest'
        : 'userApiRequest',
    issuer: 'https://dev.dominikhaid.de',
    exp: moment().add(1, 'hours').unix(),
  };
  // sign with default (HMAC SHA256)
  const token = jsonWebToken.sign(userJWT, myJWTSecretKey);
  return {token: token};
};

module.exports.signInJWT = signInJWT;

/**
 * @desc verify user role
 * @param {String} role
 * @param {String} level
 * @param {Object} res
 * @returns response
 */
const checkRole = (role, level, res) => {
  if (!role.body || !role.body.role || !level)
    return checkReqErrors({error: 'Your are not authenticated'}, res, 'break');
  return true;
};

module.exports.checkRole = checkRole;
