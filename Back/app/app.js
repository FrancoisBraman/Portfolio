const debug = require('debug')('app');
const path = require('path');
const express = require('express');
const router = require('./routers/router');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));

app.use((req, _, next) => {
  debug(req.url);
  next();
});

app.use(router);

module.exports = app;