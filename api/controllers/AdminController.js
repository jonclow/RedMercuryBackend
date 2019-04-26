// const debug = require('debug')('AdminController');

function AdminController() {
  function uptimeCheck(req, res) {
    return res.send('Server up');
  }

  return { uptimeCheck };
}

module.exports = AdminController;
