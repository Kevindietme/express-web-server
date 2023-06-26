var express = require('express');
var router = express.Router();

const data = {
  title: "first express web server",
  description: "we are using express to serve HTML using a JADE template.",
  subtitle: "JADE and Express",
  link: "https://bocacode.com",
  linkText: "Boca Code",
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', data);
});

module.exports = router;
