var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express'});
});

router.get('/object', function(req, res, next){
    var obj = ['Uno', 'Dos', 'Tres'];
    res.render('pages/object.ejs', {title: 'A numa sicierto', object : obj});
});


module.exports = router;
