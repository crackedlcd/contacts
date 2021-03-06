var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContactSchema = new Schema({
  firstName: String,
  lastName: String,
  name: String,
  email: String,
  phone: String,
  description: String,
  location: String
});

module.exports = mongoose.model('Contact', ContactSchema);