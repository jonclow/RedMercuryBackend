const express = require('express');
const adminController = require('../controllers/AdminController');

function routes() {
  const adminRouter = express.Router();
  const controller = adminController();

  adminRouter.route('/uptimeCheck')
    .get(controller.uptimeCheck);

  return adminRouter;
}


module.exports = routes;
