var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var add_room = new Schema({
  _id: Schema.Types.ObjectId,
  building_name:String,
  room_no:String,
  room_name:String,
  room_status:String,
  room_invoice:String,
  room_rate:Number,
  room_rate_vat:Number,
  room_furniture:Number,
  room_furniture_vat:Number,
  room_public_utility:Number,
  room_public_utility_vat:Number,
  room_internal_water_bill:String,
  room_external_water_bill:String,
  room_internal_energy_bill:String,
  room_external_energy_bill:String,
  room_service_include:String,
  room_furniture_include:String,
  

  updated: {type: Date, default: Date.now},
  date: {type: Date, default: Date.now}
});


module.exports = mongoose.model('user', user);