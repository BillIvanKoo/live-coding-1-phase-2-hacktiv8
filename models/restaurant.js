var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var restaurantSchema = new Schema({
  name: String,
  owner: String,
  address: String,
  open_status: Boolean
});

module.exports = mongoose.model('Restaurant', restaurantSchema);