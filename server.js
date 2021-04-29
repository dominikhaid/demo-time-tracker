const server = require('./src/bin/main').server;
const serverOptions = require('./src/bin/main').serverOptions;
const fs = require('fs');

let port = process.env.PORT || 5000;
let protocol = serverOptions.https ? require('http') : require('http');
let httpServer = serverOptions.https
  ? protocol.createServer(
      {
        key: fs.readFileSync('certificates/key.pem', 'utf8'),
        cert: fs.readFileSync('certificates/cert.pem', 'utf8'),
      },
      server,
    )
  : protocol.createServer(server);

if (serverOptions.server === 'express') {
  const routes = require('../routers/routes');
  routes && server.use('/api', routes);

  httpServer ? httpServer.listen(port) : server.listen(port);

  console.debug(`Express server at: ${process.env.HOST}:${port}`);

  return;
}

if (serverOptions.server === 'next') {
  const next = require('next');
  const dev = process.env.NODE_ENV !== 'production';
  const nextApp = next({dev});
  const {parse} = require('url');
  const handle = nextApp.getRequestHandler();
  const multer = require('multer');
  var upload = multer();

  nextApp
    .prepare()
    .then(() => {
      server.get('*', upload.none(), (req, res) => {
        return handle(req, res);
      });

      server.post('*', upload.none(), (req, res) => {
        return handle(req, res);
      });

      server.delete('*', upload.none(), (req, res) => {
        return handle(req, res);
      });

      server.patch('*', upload.none(), (req, res) => {
        return handle(req, res);
      });

      server.put('*', upload.none(), (req, res) => {
        return handle(req, res);
      });

      server.get('/', (req, res) => {
        const parsedUrl = parse(req.url, true);
        return handle(req, res, parsedUrl);
      });

      httpServer ? httpServer.listen(port) : server.listen(port);
      console.debug(`Next.js server at: ${process.env.HOST}:${port}/app`);
    })
    .catch(ex => {
      console.error(ex.stack);
      process.exit(1);
    });

  return;
}
