var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 8080;

var router = express.Router();

app.listen(port);
console.log('App is running on port ' + port);