var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var foodSchema = new Schema({
  name: String,
  price: String,
  expired_date: Date
});

module.exports = mongoose.model('Food', foodSchema);