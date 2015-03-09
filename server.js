var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var morgan = require('morgan');

var Contact = require('./app/models/contact');

var uristring = process.env.MONGOLAB_URI || 'mongodb://127.0.0.1'

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extend: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

mongoose.connect(uristring, function(err, res) {
  if (err) {
    console.log ('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
    console.log('Succeeded connecting to: ' + uristring);
  }
});

var router = express.Router();
require('./app/routes')(app, router);

app.listen(port);
console.log('App is running on port ' + port);