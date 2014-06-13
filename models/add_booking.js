var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var add_booking = new Schema({
  _id: Schema.Types.ObjectId,
  select_building:String,
  select_room:String,
  customer_name:String,
  customer_id:String,
  customer_address:String,
  customer_provice:String,
  customer_post_code:String,
  customer_country:String,
  customer_mobile:String,
  customer_email:String,
  customer_pic:String,
  payment_type:String,
  payment_cash_amount:Number,
  payment_remark:String,
  payment_date_payment:String,
  payment_date_transection:String,

  updated: {type: Date, default: Date.now},
  date: {type: Date, default: Date.now}
});


module.exports = mongoose.model('user', user);