const jsonWebToken = require('jsonwebtoken');
const checkReqErrors = require('./status').checkReqErrors;

/**
 * @desc create secrect JWT key
 * @returns string
 */
const myJWTSecretKey = () => {
  const buffer = Buffer.from(process.env.JWTSecret, 'base64');
  return buffer;
};

module.exports.myJWTSecretKey = myJWTSecretKey;

/**
 * @desc verify jwt token
 * @param {*} req
 * @param {*} res
 * @returns response
 */
async function verfiyToken(req, res) {
  let token = req.headers.authorization
    ? req.headers.authorization.replace(/^Bearer\s/, '')
    : null;
  if (!token) token = req.params.token ? req.params.token : null;

  try {
    if (!token) checkReqErrors({error: 'You are not Authorized'}, res);
    const tokenDecodedData = jsonWebToken.verify(token, myJWTSecretKey());
    checkReqErrors({tokenDecode: tokenDecodedData}, res);
  } catch (error) {
    checkReqErrors({error: error}, res);
  }
}

module.exports.verfiyToken = verfiyToken;
