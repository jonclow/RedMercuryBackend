const express = require('express');
const weatherController = require('../controllers/WeatherController');

function routes() {
  const weatherRouter = express.Router();
  const controller = weatherController();

  weatherRouter.route('/data')
    .post(controller.newDatapoint);

  return weatherRouter;
}


module.exports = routes;
