var express = require('express');
var router = express.Router();
const mw = require('../middlewares/users/mw_users');
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

/* POST users listing. */
router.post('/', mw);
module.exports = router;
