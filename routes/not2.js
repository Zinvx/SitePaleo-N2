var express = require('express')
var router = express.Router()

router.get('/', function(req, res, next) {
  const user = global.authTokens[req.cookies["AuthToken"]];
  res.render('not2', {user})
});

module.exports = router;