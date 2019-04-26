const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const db = require('./config/datastore');
const weatherRoutes = require('./api/routes/weatherRouter')();

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/weather', weatherRoutes);
app.set('db', db);
app.listen(port, () => {
  debug('----------------- Express up. --------------------------');
  debug(`----------------- Listening on port: ${chalk.green(port)} --------------------------`);
});
