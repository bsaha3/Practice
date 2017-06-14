var express = require('express');
var router = express.Router();

// var bodyParser=require('body-parser');

// router.use(bodyParser.urlencoded({ extended: true }));


/* GET users listing. */
router.get('/', function(req, res, next) {

	console.log(req.body.t1);

  res.render('user');
});

module.exports = router;
