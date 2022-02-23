var express = require('express');
var router = express.Router();
var newsApiService = require('../services/newsApiService');

/* GET many news articles. */
router.get('/', async (req, res, next) => {
  var q = req.query.q;
  response = await newsApiService.getMany(q);
  res.send(response.data);
});

module.exports = router;
