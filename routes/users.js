var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/message', function(req, res, next) {
  var query = req.query;
  if(query.name.toUpperCase() === "MANISHA"){
  	res.send('Hi from manisha');
  }else if(query.name.toUpperCase() === "PALLAVI"){
  	res.send('This is pallu.29');
  }else if(query.name.toUpperCase() === "PRANAV"){
  	res.send('Hi from cool pranav');
  }else if(query.name.toUpperCase() === "RAJKUMAR"){
  	res.send('Rajkumar is doing well');
  }else{
  	res.send('Sorry you are not listed');
  }
});

module.exports = router;
