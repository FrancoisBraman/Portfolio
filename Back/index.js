require('dotenv').config();
const debug = require('debug')('server');
const http = require('http');

const app = require('./app/app');

const server = http.createServer(app);

const port = process.env.PORT || 5000;

server.listen(port, () => {
  debug(`Big Brother is watching you http://localhost:${port}/`);
})