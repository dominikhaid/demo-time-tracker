const helmet = require('helmet');

/**
 * @desc http header securety
 * @param {Function} server express instance
 */
module.exports.startHelmet = function (server) {
  if (process.env.NODE_ENV !== 'development') {
    server.use(helmet());
    server.use(
      helmet.contentSecurityPolicy({
        directives: {
          defaultSrc: ["'self'", process.env.HELMET_DEFAULT],
          styleSrc: ["'self'", "'unsafe-inline'", process.env.HELMET_SCRIPTS],
          scriptSrc: ["'self'", "'unsafe-inline'", process.env.HELMET_SCRIPTS],
          fontSrc: ["'self'", process.env.HELMET_SCRIPTS],
        },
      }),
    );
    server.use(helmet.dnsPrefetchControl());
    server.use(helmet.frameguard({action: 'deny'}));
    server.use(helmet.hidePoweredBy());
    server.use(helmet.ieNoOpen());
    server.use(helmet.noSniff());
    server.use(
      helmet.permittedCrossDomainPolicies({permittedPolicies: 'none'}),
    );
    server.use(helmet.referrerPolicy({policy: 'same-origin'}));
    server.use(helmet.xssFilter());
    server.use(
      helmet.hsts({
        maxAge: 5184000,
      }),
    );
  } else {
    server.use(helmet());
    server.use(
      helmet.contentSecurityPolicy({
        directives: {
          defaultSrc: ["'self'", process.env.HELMET_DEFAULT],
          styleSrc: ["'self'", "'unsafe-inline'", process.env.HELMET_SCRIPTS],
          scriptSrc: ["'self'", "'unsafe-inline'", process.env.HELMET_SCRIPTS],
          fontSrc: ["'self'", process.env.HELMET_SCRIPTS],
        },
      }),
    );
    server.use(helmet.dnsPrefetchControl());
    server.use(helmet.frameguard({action: 'deny'}));
    server.use(helmet.hidePoweredBy());
    server.use(helmet.ieNoOpen());
    server.use(helmet.noSniff());
    server.use(
      helmet.permittedCrossDomainPolicies({permittedPolicies: 'none'}),
    );
    server.use(helmet.referrerPolicy({policy: 'same-origin'}));
    server.use(helmet.xssFilter());
    server.use(
      helmet.hsts({
        maxAge: 5184000,
      }),
    );
  }
};

module.exports.helmet = helmet;
