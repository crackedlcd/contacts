var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var mongoose = require('mongose');

var uristring = process.env.MONGOLAB_URI || 'mongodb://127.0.0.1'

app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 8080;

mongoose.connect(uristring, function(err, res) {
  if (err) {
    console.log ('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
    console.log('Succeeded connecting to: ' + uristring);
  }
})

var router = express.Router();
require('./app/routes')(app, router);

app.listen(port);
console.log('App is running on port ' + port);