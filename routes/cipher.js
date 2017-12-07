var express = require('express');
var router = express.Router();

/* GET cypher page. */
router.get('/', function(req, res, next) {
  res.render('cipher', { title: 'Ceasar Cipher' });
});

module.exports = router;
